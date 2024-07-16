import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/SuperApp';
import { SuperContainer } from './SuperContainer';

/**
 * Custom Sprite class that handles resizing and positioning
 */
export class SuperTilemap extends SuperContainer {

  private tileMapDataUrl: string;

  // Initialization -------------------------------
  constructor(superApp: SuperApp, tileMapDataUrl: string) {
    super(superApp);

    this.tileMapDataUrl = tileMapDataUrl;

    // Give it a name for pretty debugging
    this.label = (SuperTilemap).name;

    // Set Position
    this.position.set(0, 0);

    // Set scale, 1 = 100% of texture size
    this.scale.set(1);

    // this will make moving this container GPU powered
    this.isRenderGroup = true;
  }

  public async init() {
    const response = await fetch(this.tileMapDataUrl);
    const tilemapData = await response.json();

    // Load all tileset images
    const tilesetPromises = tilemapData.tilesets.map((tileset: any) => {
      const imageUrl = tileset.image.replace('../', 'assets/');
      return PIXI.Assets.load(imageUrl).then(() => {
        return { ...tileset, texture: PIXI.Texture.from(imageUrl) };
      });
    });

    const tilesets = await Promise.all(tilesetPromises);

    // Iterate over each layer
    for (const layer of tilemapData.layers) {
      if (layer.type !== 'tilelayer') continue;

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

              //Name it "Tile (00,00)"
              const sprite = new PIXI.Sprite(tileTexture);
              sprite.label = `Tile (${row.toString().padStart(2, '0')},${column.toString().padStart(2, '0')})`;

              sprite.x = column * tileset.tilewidth;
              sprite.y = row * tileset.tileheight;
              this.addChild(sprite);
            }
          }
        }
      }
    }
  }

  // Event Handlers -------------------------------
  public override async onAdded() {


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
    // Remove all children from the container
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
}
