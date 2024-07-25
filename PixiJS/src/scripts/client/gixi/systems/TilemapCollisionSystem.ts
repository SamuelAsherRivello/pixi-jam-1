import { GixiApplication } from '../GixiApplication';
import { Tilemap } from '../tilemap/Tilemap';
import { SystemBase } from './base/SystemBase';
import * as PIXI from 'pixi.js';

/**
 * TilemapCollisionSystem handles lookups for tilemap info
 */
export class TilemapCollisionSystem extends SystemBase {
  // Properties -------------------------------

  // Fields -------------------------------
  private _tilemap!: Tilemap;

  // Initialization -------------------------------
  constructor(app: GixiApplication) {
    super(app);
  }

  public override async initializeAsync(): Promise<any> {
    if (this.isInitialized) {
      return;
    }

    // Local
    this._isInitialized = true;
  }

  // Methods --------------------------------------
  public setTilemap(tilemap: Tilemap): void {
    this._tilemap = tilemap;
  }

  public isCollision(x: number, y: number, width: number, height: number): boolean {
    if (!this._tilemap) {
      throw new Error('TilemapCollisionSystem: Tilemap must be set first');
    }
    return this._tilemap.isCollision(x, y, width, height);
  }

  // Event Handlers -------------------------------
  public override onTick(ticker: PIXI.Ticker): void {
    //Use if desired
  }
}
