import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/SuperApp';
import { SuperContainer } from '../core/SuperContainer';

/**
 * Custom Sprite class that handles resizing and positioning
 */
export class TileMapContainer extends SuperContainer {
  private tileMapDataUrl: any;
  private tileMapImageUrl: string;

  // Initialization -------------------------------
  constructor(superApp: SuperApp, tileMapDataUrl: any, tileMapImageUrl: string) {
    super(superApp);

    this.tileMapDataUrl = tileMapDataUrl;
    this.tileMapImageUrl = tileMapImageUrl;

    // Give it a name for pretty debugging
    this.label = (TileMapContainer).name;

    // Set Position
    this.position.set(0, 0);

    // Set scale, 1 = 100% of texture size
    this.scale.set(1);
  }

  // Event Handlers -------------------------------
  public override async onAddedToStage() {

    const response = await fetch(this.tileMapDataUrl);
    const tilemapData = await response.json();

    PIXI.Assets.load([this.tileMapImageUrl]).then(() => {
      const tilesetTexture = PIXI.Texture.from(this.tileMapImageUrl);
      const tileWidth = tilemapData.tilewidth;
      const tileHeight = tilemapData.tileheight;

      const layer = tilemapData.layers[0];
      for (let y = 0; y < layer.height; y++) {
        for (let x = 0; x < layer.width; x++) {
          const tileIndex = layer.data[y * layer.width + x];
          if (tileIndex > 0) {
            const tilesPerRow = tilemapData.tilesets[0].columns;
            const tileTexture = new PIXI.Texture(
              tilesetTexture
            );
            const sprite = new PIXI.Sprite(tileTexture);
            sprite.x = x * tileWidth;
            sprite.y = y * tileHeight;
            this.addChild(sprite);
          }
        }
      }
    }).catch((error) => {
      console.error(`PIXI.Assets.load() failed. error = ${error}`);
    });
  }

  public override onRemovedFromStage(): void {
    console.log('TileMapContainer.onRemovedFromStage');

    // Remove all children from the container
    while (this.children.length > 0) {
      const child = this.removeChildAt(0);
      if (child instanceof PIXI.Sprite) {
        child.destroy({ children: true, texture: true });
      }
    }
  }

  protected override onResize(superApp: SuperApp): void {
    // Handle resizing logic
  }

  protected override onTick(ticker: PIXI.Ticker): void {
    // Handle tick updates
  }
}
