import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperUtility } from '../../super/SuperUtility';
import { IInitializableAsync } from '../../super/IInitializeAsync';
import { ActorContainer } from '../ActorContainer';
import { TilemapCollisionSystem } from './TilemapCollisionSystem';

export interface TilemapData {
  width: number;
  height: number;
  tilewidth: number;
  tileheight: number;
  layers: Layer[];
  tilesets: Tileset[];
}

export interface Layer {
  type: string;
  width: number;
  height: number;
  data?: number[];
  objects?: any[];
}

export interface Tileset {
  firstgid: number;
  tiles?: Tile[];
}

export interface Tile {
  id: number;
  properties?: Property[];
  type?: string;
}

export interface Property {
  name: string;
  value: boolean;
}

export interface TilemapItemData {
  x: number;
  y: number;
  row: number;
  column: number;
  texture: PIXI.Texture;
  layerType: LayerType;
  type: string;
}


export enum LayerType {
  TileLayer = 'tilelayer',
  ObjectGroup = 'objectgroup',
}

export interface ITilemapItemFactory {
  createTilemapItem(tilemapItemData: TilemapItemData): Promise<PIXI.Container>;
}


export class Tilemap extends ActorContainer implements IInitializableAsync {

  // Properties -----------------------------------
  get tilemapData(): TilemapData { return this._tilemapData; }

  // Fields ---------------------------------------
  private _tilemapDataUrl: string;
  private _TilemapItemFactory: ITilemapItemFactory;
  private _TilemapCollisionSystem: TilemapCollisionSystem;
  private _tilemapData!: TilemapData;

  // Initialization -------------------------------
  constructor(superApp: SuperApp, tilemapDataUrl: string, TilemapItemFactory: ITilemapItemFactory) {
    super(superApp);

    this._tilemapDataUrl = tilemapDataUrl;
    this._TilemapItemFactory = TilemapItemFactory;
    this._TilemapCollisionSystem = new TilemapCollisionSystem(this._superApp, this);

    this.label = (Tilemap).name;
    this.position.set(0, 0);
    this.scale.set(1);
    this.isRenderGroup = true;
  }
  get isInitialized(): boolean {
    return this._isInitialized;
  }

  public override async initializeAsync() {

    if (this.isInitialized) {
      return;
    }
    await super.initializeAsync();
    this._isInitialized = true;

    const response = await fetch(this._tilemapDataUrl);
    this._tilemapData = await response.json();

    const tilesetPromises = this._tilemapData.tilesets.map((tileset: any) => {
      const imageUrl = tileset.image.replace('../', 'assets/');
      return PIXI.Assets.load(imageUrl).then(() => {
        return { ...tileset, texture: PIXI.Texture.from(imageUrl) };
      });
    });

    const tilesets = await Promise.all(tilesetPromises);

    for (const layer of this._tilemapData.layers) {
      if (layer.type === LayerType.TileLayer) {
        await this.processTileLayer(layer, tilesets);
      } else if (layer.type === LayerType.ObjectGroup && layer.objects) {
        await this.processObjectLayer(layer, tilesets);
      }
    }

    this._TilemapCollisionSystem.initializeAsync();
  }

  requireIsInitialized() {
    throw new Error('Method not implemented.');
  }

  // Methods ------------------------------
  private async processTileLayer(layer: Layer, tilesets: any[]) {
    for (let row = 0; row < layer.height; row++) {
      for (let column = 0; column < layer.width; column++) {
        const tileIndex = layer.data ? layer.data[row * layer.width + column] : 0;
        if (tileIndex > 0) {
          const tileset = this.getTilesetForTile(tileIndex, tilesets);
          if (tileset) {
            const localTileIndex = tileIndex - tileset.firstgid;
            const tileX = (localTileIndex % tileset.columns) * tileset.tilewidth;
            const tileY = Math.floor(localTileIndex / tileset.columns) * tileset.tileheight;

            const rectangle = new PIXI.Rectangle(tileX, tileY, tileset.tilewidth, tileset.tileheight);
            const tileTexture = new PIXI.Texture({
              source: tileset.texture.source,
              frame: rectangle
            });

            const tilemapItemData: TilemapItemData = {
              x: column * tileset.tilewidth,
              y: row * tileset.tileheight,
              row: row,
              column: column,
              texture: tileTexture,
              layerType: LayerType.TileLayer,
              type: this.getTileType(tileset, localTileIndex) || ""
            };

            const sprite = await this._TilemapItemFactory.createTilemapItem(tilemapItemData);
            sprite.label = `Tile (${row.toString().padStart(2, '0')},${column.toString().padStart(2, '0')})`;

            sprite.x = tilemapItemData.x;
            sprite.y = tilemapItemData.y;
            this.addChild(sprite);
          }
        }
      }
    }
  }

  private async processObjectLayer(layer: Layer, tilesets: any[]) {
    for (const object of layer.objects!) {
      const tileset = this.getTilesetForTile(object.gid, tilesets);
      if (tileset) {
        const localTileIndex = object.gid - tileset.firstgid;
        const tileX = (localTileIndex % tileset.columns) * tileset.tilewidth;
        const tileY = Math.floor(localTileIndex / tileset.columns) * tileset.tileheight;

        const rectangle = new PIXI.Rectangle(tileX, tileY, tileset.tilewidth, tileset.tileheight);
        const tileTexture = new PIXI.Texture({
          source: tileset.texture.source,
          frame: rectangle
        });

        let typeResult: string = ""; //ok value
        let typePrimary = object.type; //BUG: THis is never populated. Its backup. Ok for now
        let typeBackup = this.getTileType(tileset, localTileIndex)?.toString();

        if (!SuperUtility.stringIsNullOrEmpty(typePrimary)) {
          typeResult = typePrimary;
        }
        else if (typeBackup != null && !SuperUtility.stringIsNullOrEmpty(typeBackup)) {
          typeResult = typeBackup;
        }

        //this means its not in a grid since objects can be anywhere
        const unsetValue = -1;

        const tilemapItemData: TilemapItemData = {
          x: object.x,
          y: object.y - tileset.tileheight,
          row: unsetValue,
          column: unsetValue,
          texture: tileTexture,
          layerType: LayerType.ObjectGroup,
          type: typeResult
        };

        //console.log("Object type: " + tilemapItemData.type); // Log the type for debugging

        const sprite = await this._TilemapItemFactory.createTilemapItem(tilemapItemData);
        sprite.label = `Object (${object.id})`;

        sprite.x = tilemapItemData.x;
        sprite.y = tilemapItemData.y;

        this.addChild(sprite);
      }
    }
  }

  // Event Handlers -------------------------------
  public isCollision(playerX: number, playerY: number, playerWidth: number, playerHeight: number): boolean {
    return this._TilemapCollisionSystem.isCollision(playerX, playerY, playerWidth, playerHeight);
  }

  public override async onAdded() {
    await this.initializeAsync();
  }

  private getTilesetForTile(tileIndex: number, tilesets: any[]): any {
    for (let i = tilesets.length - 1; i >= 0; i--) {
      if (tileIndex >= tilesets[i].firstgid) {
        return tilesets[i];
      }
    }
    return null;
  }

  public override onRemoved(): void {
    while (this.children.length > 0) {
      const child = this.removeChildAt(0);
      if (child instanceof PIXI.Sprite) {
        child.destroy({ children: true, texture: true });
      }
    }
  }

  public override onResize(superApp: SuperApp): void {
    // Handle resizing logic
  }

  public override onTick(ticker: PIXI.Ticker): void {
    // Handle tick updates
  }

  private getTileType(tileset: Tileset, tileIndex: number): string | undefined {
    if (!tileset.tiles) return undefined;
    const tile = tileset.tiles.find(t => t.id === tileIndex);
    return tile?.type;
  }
}