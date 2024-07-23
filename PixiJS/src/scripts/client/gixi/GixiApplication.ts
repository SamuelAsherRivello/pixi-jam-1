import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';
import { EventEmitter } from 'events';
import { IInitializableAsync } from './base/IInitializeAsync';
import { ActorContainer } from './ActorContainer';
import { SystemManagerDefault as SystemManagerDefault } from './systemManager/SystemManagerDefault';
import { ISystemManager } from './systemManager/base/ISystemManager';

/**
 * Configuration
 */
export interface GixiApplicationConfiguration {
  widthInitial: number;
  heightInitial: number;
  backgroundColor: number;
  minFPS: number,
  maxFPS: number,
  systemManager: ISystemManager;
  data: { [key: string]: any };
}

const GixiApplicationConfigurationDefault: GixiApplicationConfiguration = {
  widthInitial: 1920,
  heightInitial: 1080,
  minFPS: 1,
  maxFPS: 240,
  backgroundColor: 0x1099bb,
  systemManager: new SystemManagerDefault(),
  data: {}
}



/**
 * Wrapper class for initializing and managing a PixiJS application.
 */
export class GixiApplication extends EventEmitter implements IInitializableAsync {


  // Constants ------------------------------------
  public static readonly EVENT_INITIALIZE_COMPLETE: string = 'initializeComplete';
  public static readonly EVENT_INITIALIZE_ERROR: string = 'initializeError';
  public static readonly EVENT_RESIZE: string = 'resize';


  // Properties -----------------------------------
  public get isInitialized(): boolean {
    return this._isInitialized;
  }

  public get isFullscreen(): boolean {
    return this._isFullscreen;
  }

  public set isFullscreen(value: boolean) {

    this._isFullscreen = value;

    var elem = document.getElementById(this.app.canvas.id);

    if (this._isFullscreen) {

      if (elem?.requestFullscreen) {
        elem?.requestFullscreen();
      }

    }
    else {
      document.fullscreenEnabled && document.exitFullscreen();
    }
  }

  //TODO: Move to new SceneSystem or ApplicationSystem class? = YES!
  public reload() {
    document.location.reload();
  }

  public get systemManager(): ISystemManager {
    return this._systemManager;
  }

  public get configuration(): GixiApplicationConfiguration {
    return this._configuration;
  }

  // Fields ---------------------------------------
  public app: PIXI.Application;
  public viewport!: Viewport;
  private _configuration: GixiApplicationConfiguration;
  //
  private _canvasId: string;
  private _isInitialized = false;
  private _systemManager: ISystemManager;
  private _isFullscreen: boolean = false;

  // Initialization -------------------------------
  constructor(
    canvasId: string = 'pixi-application-canvas',
    configuration?: Partial<GixiApplicationConfiguration>
  ) {

    /////////////////////////////
    // Setup
    /////////////////////////////
    super();
    this._canvasId = canvasId;


    //TODO: The console logs out the renderer upon init. 
    //      Note its forever "WebGL". I want WebGPU. - srivello
    this.app = new PIXI.Application<PIXI.WebGPURenderer<HTMLCanvasElement>>();
    this._configuration = { ...GixiApplicationConfigurationDefault, ...configuration };
    this._systemManager = this._configuration.systemManager;


    // Every SuperSprite instance listens to App
    // So this number must be >= to the number of SuperSprite instances
    this.setMaxListeners(100);
  }


  /**
   * Initializes the PixiJS application.
   */
  public async initializeAsync(): Promise<any> {
    if (this._isInitialized) {
      return;
    }

    this._isInitialized = true;

    this._systemManager.App = this;
    await this._systemManager.initializeAsync();

    try {
      await this.app.init({
        canvas: document.getElementById(this._canvasId) as HTMLCanvasElement,
        backgroundColor: this.configuration.backgroundColor,
        width: this.configuration.widthInitial,
        height: this.configuration.heightInitial,
        resizeTo: window,


        antialias: true,
        backgroundAlpha: 1,
        powerPreference: 'high-performance',

        // FORCE WEBGPU - This works, but it throws errors (fixable?)
        //preference: "webgpu",

        // EVENTS
        eventMode: 'passive',
        eventFeatures: {

          /** what is this? */
          move: true, //try false after I get swipe working

          /** disables the global move events which can be very expensive in large scenes */
          globalMove: true, //try false after I get swipe working
          click: true,
          wheel: false
        }

      });

      this.app.ticker.minFPS = this.configuration.minFPS;
      this.app.ticker.maxFPS = this.configuration.maxFPS;

      let possible: string = "WebGL";
      if (navigator.gpu) {
        possible = "(WebGL, WebGPU)";
      }
      console.log(`PIXI.Application.initializeAsync() success! PixiJS v${PIXI.VERSION} ...\nRendering Supported : ${possible}. Rendering Active : ${this.GetRendererTypeAsString(this.app.renderer.type)}.`);


      /////////////////////////////
      // Create Viewport
      /////////////////////////////
      this.viewport = new Viewport({
        screenWidth: this.app.screen.width,
        screenHeight: this.app.screen.height,
        worldWidth: 3000,   //TODO: not sure what value is best?
        worldHeight: 3000,  //TODO: not sure what value is best?

        // the interaction module is important for wheel to work properly 
        // when renderer.view is placed or scaled
        events: this.app.renderer.events
      });

      this.viewport.center = this.getScreenCenterpoint();

      this.app.ticker.add((ticker) => {
        this.viewport.update(ticker.deltaMS);
      });


      /////////////////////////////
      this.emit(GixiApplication.EVENT_INITIALIZE_COMPLETE, this);
      this.setupResizeHandling();
      this.addToStage(this.viewport);
      this.viewport.label = "Viewport"; //TODO: Why "Et Viewport"?

    } catch (error) {

      console.log(`PIXI.Application.initializeAsync() failed! PixiJS v${PIXI.VERSION} with ${this.GetRendererTypeAsString(this.app.renderer.type)} `);
      this.emit(GixiApplication.EVENT_INITIALIZE_ERROR, error);

    }


  }

  public requireIsInitialized() {

    if (!this.isInitialized) {
      throw new Error('requireIsInitialized.');
    }
  }


  // Methods ------------------------------
  private GetRendererTypeAsString(type: number) {
    let rendererType: string = "Unknown";
    switch (type) {
      case PIXI.RendererType.WEBGL:
        rendererType = 'WebGL';
        break;
      case PIXI.RendererType.WEBGPU:
        rendererType = 'WebGPU';
        break;
      case PIXI.RendererType.BOTH:
        rendererType = 'BOTH';
        break;
      default:
        rendererType = 'Unknown';
        break;
    }
    return rendererType;
  }

  // Add to camera-controlled scene tree
  public addToViewport(obj: PIXI.Container | PIXI.Sprite): any {

    this.requireIsInitialized();

    this.viewport.addChild(obj);

    if (obj instanceof ActorContainer) {
      obj.onAdded();
    }


    this.resize();
  }

  // Remove from camera-controlled scene tree
  public removeFromViewport(obj: PIXI.Container | PIXI.Sprite): any {

    this.requireIsInitialized();

    this.viewport.removeChild(obj);

    if (obj instanceof ActorContainer) {
      obj.onRemoved();
    }

    this.resize();
  }

  // Add to basic scene tree
  public addToStage(obj: PIXI.Container | PIXI.Sprite, parent?: PIXI.Sprite | ActorContainer): any {

    this.requireIsInitialized();

    if (parent == null) {
      this.app.stage.addChild(obj);
    } else {
      parent.addChild(obj);
    }

    if (obj instanceof ActorContainer) {
      obj.onAdded();
    }

    this.resize();
  };


  // Remove from basic scene tree
  public removeFromStage(obj: PIXI.Container | PIXI.Sprite, parent?: PIXI.Sprite | ActorContainer): any {

    this.requireIsInitialized();

    if (parent == null) {
      this.app.stage.removeChild(obj);
    }
    else {
      parent.removeChild(obj);
    }

    if (obj instanceof ActorContainer) {
      obj.onRemoved();
    }

    this.resize();
  }


  public resize = () => {

    this.emit(GixiApplication.EVENT_RESIZE, this);
  };

  private setupResizeHandling() {

    const resizeAfterDelay = () => {
      setTimeout(this.resize, 100);
    };

    /////////////////////////////
    // Observe window resize
    /////////////////////////////
    window.addEventListener('resize', this.resize);               //now
    window.addEventListener('resize', resizeAfterDelay);          //and after delay. Robust.
    window.addEventListener('orientationchange', this.resize);
    window.addEventListener('orientationchange', resizeAfterDelay);
    this.resize(); // Initial resize
  }

  public getScreenScaleCurrent(): PIXI.Point {

    return new PIXI.Point(
      this.app.screen.width / this.configuration.widthInitial,
      this.app.screen.height / this.configuration.heightInitial
    );
  }



  getScreenCenterpoint() {

    return new PIXI.Point(
      this.app.screen.width / 2,
      this.app.screen.height / 2)
  }

  // Event Handlers -------------------------------
}