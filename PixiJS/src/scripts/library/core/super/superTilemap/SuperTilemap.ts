import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperContainer } from '@src/scripts/library/core/super/SuperContainer';
import { SuperTilemapCollisionSystem } from '@src/scripts/library/core/super/superTilemap/SuperTilemapCollisionSystem';


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
  data: number[];
}

export interface Tileset {
  firstgid: number;
  tiles: Tile[];
}

export interface Tile {
  id: number;
  properties?: Property[];
}

export interface Property {
  name: string;
  value: boolean;
}

/**
 * Represents data for a tilemap item
 * 
 * @interface TilemapItemData
 */
export interface TilemapItemData {
  x: number;
  y: number;
  row: number;
  column: number;
  texture: PIXI.Texture;
  layerType: LayerType;
  type: string;
}

/**
 * Interface for tilemap item factory
 * 
 * @interface ISuperTilemapItemFactory
 */
export interface ISuperTilemapItemFactory {
  createTilemapItem(tilemapItemData: TilemapItemData): Promise<PIXI.Sprite>;
}

/**
 * Default implementation of the tilemap item factory
 * 
 * @class SuperTilemapItemFactoryDefault
 */
export class SuperTilemapItemFactoryDefault implements ISuperTilemapItemFactory {

  // Fields ---------------------------------------
  private _superApp: SuperApp;

  // Initialization -------------------------------
  constructor(superApp: SuperApp) {
    this._superApp = superApp;
  }

  // Methods --------------------------------------
  /**
   * Creates a tilemap item based on the provided data
   * 
   * @param tilemapItemData - The data for the tilemap item
   * @returns A promise that resolves to a PIXI.Sprite
   */
  public async createTilemapItem(tilemapItemData: TilemapItemData): Promise<PIXI.Sprite> {
    switch (tilemapItemData.layerType) {
      case LayerType.TileLayer:
      case LayerType.ObjectGroup:
        return new PIXI.Sprite(tilemapItemData.texture);
      default:
        throw new Error('Invalid layer type');
    }
  }
}

/**
 * Enum for layer types
 * 
 * @enum LayerType
 */
export enum LayerType {
  TileLayer = 'tilelayer',
  ObjectGroup = 'objectgroup',
}

/**
 * Represents a super tilemap
 * 
 * @class SuperTilemap
 */
export class SuperTilemap extends SuperContainer {

  // Events ---------------------------------------


  // Properties -----------------------------------
  get tilemapData(): TilemapData { return this._tilemapData; }

  // Fields ---------------------------------------
  private _tilemapDataUrl: string;
  private _superTilemapItemFactory: ISuperTilemapItemFactory;
  private _superTilemapCollisionSystem: SuperTilemapCollisionSystem;
  private _tilemapData!: TilemapData;

  // Initialization -------------------------------
  constructor(superApp: SuperApp, tilemapDataUrl: string, superTilemapItemFactory: ISuperTilemapItemFactory) {
    super(superApp);

    this._tilemapDataUrl = tilemapDataUrl;
    this._superTilemapItemFactory = superTilemapItemFactory;
    this._superTilemapCollisionSystem = new SuperTilemapCollisionSystem(this._superApp, this);

    // Give it a name for pretty debugging
    this.label = (SuperTilemap).name;

    // Set Position
    this.position.set(0, 0);

    // Set scale, 1 = 100% of texture size
    this.scale.set(1);

    // This will make moving this container GPU powered
    this.isRenderGroup = true;
  }

  // Methods --------------------------------------
  /**
   * Initializes the tilemap by loading data and processing layers
   */
  public async initialize() {
    const response = await fetch(this._tilemapDataUrl);
    this._tilemapData = await response.json();

    // Load all tileset images
    const tilesetPromises = this._tilemapData.tilesets.map((tileset: any) => {
      const imageUrl = tileset.image.replace('../', 'assets/');
      return PIXI.Assets.load(imageUrl).then(() => {
        return { ...tileset, texture: PIXI.Texture.from(imageUrl) };
      });
    });

    const tilesets = await Promise.all(tilesetPromises);

    // Iterate over each layer
    for (const layer of this._tilemapData.layers) {
      if (layer.type === LayerType.TileLayer) {
        await this.processTileLayer(layer, tilesets);
      } else if (layer.type === LayerType.ObjectGroup) {
        await this.processObjectLayer(layer, tilesets);
      }
    }

    this._superTilemapCollisionSystem.initialize();
  }

  /**
   * Processes tile layers and creates sprites for each tile
   * 
   * @param layer - The tile layer data
   * @param tilesets - The array of tilesets
   */
  private async processTileLayer(layer: any, tilesets: any[]) {
    for (let row = 0; row < layer.height; row++) {
      for (let column = 0; column < layer.width; column++) {
        const tileIndex = layer.data[row * layer.width + column];
        if (tileIndex > 0) {
          const tileset = this.getTilesetForTile(tileIndex, tilesets);
          if (tileset) {
            const localTileIndex = tileIndex - tileset.firstgid;
            const tileX = (localTileIndex % tileset.columns) * tileset.tilewidth;
            const tileY = Math.floor(localTileIndex / tileset.columns) * tileset.tileheight;

            const rectangle = new PIXI.Rectangle(tileX, tileY, tileset.tilewidth, tileset.tileheight);
            const tileTexture = new PIXI.Texture(
              {
                source: tileset.texture.source,
                frame: rectangle
              }
            );

            const tilemapItemData: TilemapItemData = {
              x: column * tileset.tilewidth,
              y: row * tileset.tileheight,
              row: row,
              column: column,
              texture: tileTexture,
              layerType: LayerType.TileLayer,
              type: ""
            };

            const sprite = await this._superTilemapItemFactory.createTilemapItem(tilemapItemData);
            sprite.label = `Tile (${row.toString().padStart(2, '0')},${column.toString().padStart(2, '0')})`;

            sprite.x = tilemapItemData.x;
            sprite.y = tilemapItemData.y;
            this.addChild(sprite);
          }
        }
      }
    }
  }

  /**
   * Processes object layers and creates sprites for each object
   * 
   * @param layer - The object layer data
   * @param tilesets - The array of tilesets
   */
  private async processObjectLayer(layer: any, tilesets: any[]) {
    for (const object of layer.objects) {
      const tileset = this.getTilesetForTile(object.gid, tilesets);
      if (tileset) {
        const localTileIndex = object.gid - tileset.firstgid;
        const tileX = (localTileIndex % tileset.columns) * tileset.tilewidth;
        const tileY = Math.floor(localTileIndex / tileset.columns) * tileset.tileheight;

        const rectangle = new PIXI.Rectangle(tileX, tileY, tileset.tilewidth, tileset.tileheight);
        const tileTexture = new PIXI.Texture(
          {
            source: tileset.texture.source,
            frame: rectangle
          }
        );

        const tilemapItemData: TilemapItemData = {
          x: object.x,
          y: object.y - tileset.tileheight,
          row: -1,
          column: -1,
          texture: tileTexture,
          layerType: LayerType.ObjectGroup,
          type: object.type
        };

        const sprite = await this._superTilemapItemFactory.createTilemapItem(tilemapItemData);
        sprite.label = `Object (${object.id})`;

        sprite.x = tilemapItemData.x;
        sprite.y = tilemapItemData.y;

        this.addChild(sprite);
      }
    }
  }

  /**
   * Checks if the given rectangular area collides with any non-walkable tiles.
   * 
   * @param playerX - The x-coordinate of the top-left corner of the player's area.
   * @param playerY - The y-coordinate of the top-left corner of the player's area.
   * @param playerWidth - The width of the player's area.
   * @param playerHeight - The height of the player's area.
   * @returns {boolean} - True if any part of the area collides, false otherwise.
   */
  public isCollision(playerX: number, playerY: number, playerWidth: number, playerHeight: number): boolean {
    return this._superTilemapCollisionSystem.isCollision(playerX, playerY, playerWidth, playerHeight);
  }

  // Event Handlers -------------------------------
  /**
   * Event handler for when the tilemap is added to the stage
   */
  public override async onAdded() {
    await this.initialize();
  }

  /**
   * Gets the tileset corresponding to a specific tile index
   * 
   * @param tileIndex - The index of the tile
   * @param tilesets - The array of tilesets
   * @returns The corresponding tileset
   */
  private getTilesetForTile(tileIndex: number, tilesets: any[]): any {
    for (let i = tilesets.length - 1; i >= 0; i--) {
      if (tileIndex >= tilesets[i].firstgid) {
        return tilesets[i];
      }
    }
    return null;
  }

  /**
   * Event handler for when the tilemap is removed from the stage
   */
  public override onRemoved(): void {
    // Remove all children from the container
    while (this.children.length > 0) {
      const child = this.removeChildAt(0);
      if (child instanceof PIXI.Sprite) {
        child.destroy({ children: true, texture: true });
      }
    }
  }

  /**
   * Event handler for when the tilemap is resized
   * 
   * @param superApp - The SuperApp instance
   */
  public override onResize(superApp: SuperApp): void {
    // Handle resizing logic
  }

  /**
   * Event handler for the tick event
   * 
   * @param ticker - The PIXI ticker
   */
  public override onTick(ticker: PIXI.Ticker): void {
    // Handle tick updates
  }
}
