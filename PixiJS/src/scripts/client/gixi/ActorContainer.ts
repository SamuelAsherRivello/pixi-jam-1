import * as PIXI from 'pixi.js';
import { IInitializableAsync } from './interfaces/IInitializeAsync';
import { GixiApplication } from './GixiApplication';
import { IActor } from './interfaces/IActor';
import { IActorConfiguration } from './interfaces/IActorConfiguration';


/**
* Configuration
*/
export interface ActorContainerConfiguration extends IActorConfiguration {

}

const ActorContainerConfigurationDefault: ActorContainerConfiguration = {
  isCollidable: true,
  isTickable: true,
  isResizable: true
}



export class ActorContainer extends PIXI.Container implements IInitializableAsync, IActor {

  // Properties -----------------------------------
  public get isInitialized(): boolean {
    return this._isInitialized;
  }

  public get configuration(): ActorContainerConfiguration {
    return this._configuration;
  }

  public get isCollidable(): boolean {
    return this._isCollidable;
  }

  public isChild(): boolean {
    return this.parent !== null;
  }

  // Fields ---------------------------------------
  private _isDestroyed: boolean = false;
  protected _configuration: ActorContainerConfiguration;
  protected _isInitialized: boolean = false;
  protected _isCollidable: boolean = true;
  protected _app: GixiApplication;



  // Initialization -------------------------------
  constructor(app: GixiApplication,
    configuration?: Partial<ActorContainerConfiguration>) {

    super();
    this._configuration = { ...ActorContainerConfigurationDefault, ...configuration };
    this._app = app;

    console.log("player 444 is : " + this.isCollidable)

    // Tick
    if (this.configuration.isTickable) {
      this._app.app.ticker.add(this.onTickInternal.bind(this));
    }

    // Resize
    if (this.configuration.isResizable) {
      this._app.addListener(GixiApplication.EVENT_RESIZE, this.onResizeInternal.bind(this));
    }

    // DO NOT CALL initializeAsync here. It is called by the child
  }

  public requireIsInitialized() {

    if (!this.isInitialized) {
      throw new Error('requireIsInitialized.');
    }
  }

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
      this._app.app.ticker.remove(this.onTickInternal.bind(this));
    }
    if (this.configuration.isResizable) {
      this._app.removeListener(GixiApplication.EVENT_RESIZE, this.onResizeInternal.bind(this));
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

  public onResize(app: GixiApplication): void {
    // Empty implementation to be overridden
  }

  public onTick(ticker: PIXI.Ticker): void {

    // Empty implementation to be overridden

    // if (this.label == "Player") {
    //   console.log("Player is isCollidable" + this.isCollidable);
    // }

    if (!this.isCollidable || !this.configuration.isCollidable) {
      return;
    }

    const collisions = this._app.systems.collisionSystem.stageContainersCollidingWith(this);

    if (collisions.length) {
      this.onCollision(collisions);
    };

  }

  protected onCollision(collisions: PIXI.Container[]): void {
    // Empty implementation to be overridden
  }

  //TODO: remove these internals???
  private onTickInternal(ticker: PIXI.Ticker): void {
    if (this._isDestroyed) return;
    this.onTick(ticker);
  }

  private onResizeInternal(app: GixiApplication): void {
    if (this._isDestroyed) return;
    this.onResize(app);
  }


}