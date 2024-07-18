import * as PIXI from 'pixi.js';
import { SuperApp } from './SuperApp';
import { SuperUtility } from './SuperUtility';
import { IInitializableAsync } from './IInitializeAsync';
import { SuperSprite } from './SuperSprite';

/**
 * Configuration
 */
export interface SuperContainerConfiguration {
  isCollidable: boolean;
  isTickable: boolean;
  isResizable: boolean;
}

const SuperSpriteConfigurationDefault: SuperContainerConfiguration = {
  isCollidable: true,
  isTickable: true,
  isResizable: true
}


export class SuperContainer extends PIXI.Container implements IInitializableAsync {

  // Properties -----------------------------------
  public get isInitialized(): boolean {
    return this._isInitialized;
  }

  public get configuration(): SuperContainerConfiguration {
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
  private _configuration: SuperContainerConfiguration;
  protected _isInitialized: boolean = false;
  protected _isCollidable: boolean = true;
  protected _superApp: SuperApp;



  // Initialization -------------------------------
  constructor(superApp: SuperApp,
    configuration?: Partial<SuperContainerConfiguration>) {

    super();
    this._configuration = { ...SuperSpriteConfigurationDefault, ...configuration };
    this._superApp = superApp;

    // Tick
    if (this.configuration.isTickable) {
      this._superApp.app.ticker.add(this.onTickInternal.bind(this));
    }

    // Resize
    if (this.configuration.isResizable) {
      this._superApp.addListener(SuperApp.EVENT_RESIZE, this.onResizeInternal.bind(this));
    }

    // DO NOT CALL initializeAsync here. It is called by the child
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

    //TODO: This is EXPENSIVE. Call it less
    // const collisions = this._superApp.systems.collisionSystem.getCollisions(this);
    // if (collisions.length) {
    //   this.onCollision(collisions);
    // };

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


}
