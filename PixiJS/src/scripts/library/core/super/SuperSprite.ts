import * as PIXI from 'pixi.js';
import { SuperApp } from './SuperApp';
import { SuperUtility } from './SuperUtility';
import { IInitializableAsync } from './IInitializeAsync';

/**
 * Configuration
 */
export interface SuperSpriteConfiguration {
  textureUrl: string;
  texture: PIXI.Texture;
  isCollidable: boolean;
  isTickable: boolean;
  isResizable: boolean;
}

const SuperSpriteConfigurationDefault: SuperSpriteConfiguration = {
  textureUrl: '',
  texture: PIXI.Texture.EMPTY,
  isCollidable: true,
  isTickable: true,
  isResizable: true
}

/**
 * Subclass PIXI.Sprite if you want basic sprite functionality.
 * 
 * Subclass SuperSprite if you ALSO want onResize and onTick events
 */
export class SuperSprite extends PIXI.Sprite implements IInitializableAsync {

  // Properties -----------------------------------
  public get isInitialized(): boolean {
    return this._isInitialized;
  }

  public get configuration(): SuperSpriteConfiguration {
    return this._configuration;
  }

  public get isCollidable(): boolean {
    return this._isCollidable;
  }

  public isAddedToStage(): boolean {
    return this.parent !== null;
  }

  // Fields ---------------------------------------
  private _isDestroyed: boolean = false;
  private _configuration: SuperSpriteConfiguration;
  private _isInitialized: boolean = false;
  protected _isCollidable: boolean = true;
  protected _superApp: SuperApp;


  // Initialization -------------------------------
  constructor(superApp: SuperApp,
    configuration?: Partial<SuperSpriteConfiguration>) {

    super();
    this._configuration = { ...SuperSpriteConfigurationDefault, ...configuration };
    this._superApp = superApp;

    if (SuperUtility.textureIsNullOrEmpty(this.configuration?.texture) &&
      SuperUtility.stringIsNullOrEmpty(this.configuration?.textureUrl)) {

      console.log("1: " + this.configuration.texture.width);
      console.log("2: " + this.configuration.textureUrl)
      throw new Error("You cannot set both texture and textureUrl in the configuration");
    }

    if (configuration?.texture != null) {
      this.texture = configuration.texture;
    }

    // Tick
    if (this.configuration.isTickable) {
      this._superApp.app.ticker.add(this.onTickInternal.bind(this));
    }

    // Resize
    if (this.configuration.isResizable) {
      this._superApp.addListener(SuperApp.EVENT_RESIZE, this.onResizeInternal.bind(this));
    }

    // Initialize
    this.initializeAsync();
  }

  public requireIsInitialized() {

    if (!this.isInitialized) {
      throw new Error('requireIsInitialized.');
    }
  }

  // Initialization -------------------------------
  public async initializeAsync(): Promise<any> {

    if (this._isInitialized) {
      return;
    }

    if (!SuperUtility.stringIsNullOrEmpty(this.configuration.textureUrl)) {

      await PIXI.Assets.load([this.configuration.textureUrl]);
      this.texture = PIXI.Texture.from(this.configuration.textureUrl as string);
    }

    this._isInitialized = true;
  }


  // Override PIXI.Sprite's destroy method
  public override destroy(options?: PIXI.DestroyOptions | boolean): void {

    this.requireIsInitialized();

    if (this._isDestroyed) return;

    // Clean up
    if (this.configuration.isTickable) {
      this._superApp.app.ticker.remove(this.onTickInternal.bind(this));
    }
    if (this.configuration.isResizable) {
      this._superApp.removeListener(SuperApp.EVENT_RESIZE, this.onResizeInternal.bind(this));
    }
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
