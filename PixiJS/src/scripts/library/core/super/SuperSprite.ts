import * as PIXI from 'pixi.js';
import { SuperApp } from './SuperApp';

/**
 * Subclass PIXI.Sprite if you want basic sprite functionality.
 * 
 * Subclass SuperSprite if you ALSO want onResize and onTick events
 */
export class SuperSprite extends PIXI.Sprite {

  // Fields ---------------------------------------
  protected _superApp: SuperApp;
  private _isDestroyed: boolean = false;

  // Initialization -------------------------------
  constructor(superApp: SuperApp, texture?: PIXI.Texture) {
    super(texture);

    this._superApp = superApp;

    // Tick
    superApp.app.ticker.add(this.onTickInternal.bind(this));

    // Resize
    this._superApp.addListener(SuperApp.EVENT_RESIZE, this.onResizeInternal.bind(this));
  }

  // Initialization -------------------------------
  public isAddedToStage(): boolean {
    return this.parent !== null;
  }

  // Override PIXI.Sprite's destroy method
  public override destroy(options?: PIXI.DestroyOptions | boolean): void {
    if (this._isDestroyed) return;

    // Clean up
    this._superApp.app.ticker.remove(this.onTickInternal.bind(this));
    this._superApp.removeListener(SuperApp.EVENT_RESIZE, this.onResizeInternal.bind(this));

    this._isDestroyed = true;

    super.destroy(options);
  }

  // Event Handlers -------------------------------
  public onAdded() {
    // Empty implementation to be overridden
  }

  public onRemoved() {
    // Empty implementation to be overridden
  }

  public onResize(superApp: SuperApp): void {
    // Empty implementation to be overridden
  }

  public onTick(ticker: PIXI.Ticker): void {
    // Empty implementation to be overridden

    // Calculate any collisions. Call onCollisionEnter() if 1 or
    // more collisions happen this frame and send list of superSprites
    const collidingSprites: SuperSprite[] = [
      ...this.getCollidingSprites(this._superApp.app.stage.children),
      ...this.getCollidingSprites(this._superApp.viewport.children)
    ];

    if (collidingSprites.length > 0) {
      this.onCollision(collidingSprites);
    }
  }

  protected onCollision(superSprites: SuperSprite[]): void {
    // Empty implementation to be overridden
  }

  // Internal methods to handle event callbacks and check for destruction
  private onTickInternal(ticker: PIXI.Ticker): void {
    if (this._isDestroyed) return;
    this.onTick(ticker);
  }

  private onResizeInternal(superApp: SuperApp): void {
    if (this._isDestroyed) return;
    this.onResize(superApp);
  }

  // Collision Detection
  private isCollidingWith(other: SuperSprite): boolean {
    const bounds1 = this.getBounds();
    const bounds2 = other.getBounds();

    return (
      bounds1.x < bounds2.x + bounds2.width &&
      bounds1.x + bounds1.width > bounds2.x &&
      bounds1.y < bounds2.y + bounds2.height &&
      bounds1.y + bounds2.height > bounds2.y
    );
  }

  private getCollidingSprites(children: PIXI.ContainerChild[]): SuperSprite[] {
    return children.filter((child) => {
      return child instanceof SuperSprite && child !== this && this.isCollidingWith(child as SuperSprite);
    }) as SuperSprite[];
  }
}
