import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';
//
import { EventEmitter } from 'events';
import { SuperSprite } from './SuperSprite';
import { SuperContainer } from './SuperContainer';
import { SuperText } from './SuperText';

/**
 * Wrapper class for initializing and managing a PixiJS application.
 */
export class SuperApp extends EventEmitter {


  // Constants ------------------------------------
  public static readonly EVENT_INITIALIZE_COMPLETE: string = 'initializeComplete';
  public static readonly EVENT_INITIALIZE_ERROR: string = 'initializeError';
  public static readonly EVENT_RESIZE: string = 'resize';

  // Fields ---------------------------------------
  public app: PIXI.Application;
  public viewport!: Viewport;
  public data: { [key: string]: any };
  //
  private widthInitial: number;
  private heightInitial: number;

  private _canvasId: string;

  // Initialization -------------------------------
  constructor(
    canvasId: string = 'pixi-application-canvas',
    widthInitial: number = 1920,
    heightInitial: number = 1080,
    data: { [key: string]: any }
  ) {

    /////////////////////////////
    // Setup
    /////////////////////////////
    super();
    this._canvasId = canvasId;
    //
    this.app = new PIXI.Application();
    this.widthInitial = widthInitial;
    this.heightInitial = heightInitial;
    this.data = data;

  }

  /**
   * Initializes the PixiJS application.
   */
  async init() {
    try {
      await this.app.init({
        width: this.widthInitial,
        height: this.heightInitial,
        backgroundColor: 0x1099bb,
        resizeTo: window,
        canvas: document.getElementById(this._canvasId) as HTMLCanvasElement,
      });

      console.log(`PIXI.Application.init() success! PixiJS v${PIXI.VERSION} with ${this.GetRendererTypeAsString(this.app.renderer.type)} `);


      /////////////////////////////
      // Create Viewport
      /////////////////////////////
      this.viewport = new Viewport({
        screenWidth: this.app.screen.width,
        screenHeight: this.app.screen.height,
        worldWidth: 3000,   //not sure
        worldHeight: 3000,  //not sure

        // the interaction module is important for wheel to work properly 
        // when renderer.view is placed or scaled
        events: this.app.renderer.events
      });

      this.viewport.center = this.getScreenCenterpoint();

      this.app.ticker.add((ticker) => {
        this.viewport.update(ticker.deltaMS);
      });

      this.addToStage(this.viewport);
      this.viewport.label = "Viewport"; //TODO: Why "Et Viewport"?

      /////////////////////////////
      this.emit(SuperApp.EVENT_INITIALIZE_COMPLETE, this);

      this.setupResizeHandling();
    } catch (error) {
      console.log(`PIXI.Application.init() failed! PixiJS v${PIXI.VERSION} with ${this.GetRendererTypeAsString(this.app.renderer.type)} `);

      this.emit(SuperApp.EVENT_INITIALIZE_ERROR, error);
    }
  }


  // Methods ------------------------------
  private GetRendererTypeAsString(type: number) {
    let rendererType: string = "Unknown";
    if (this.app.renderer.type === PIXI.RendererType.WEBGL) {
      rendererType = 'WebGL';
    } else if (this.app.renderer.type === PIXI.RendererType.WEBGPU) {
      rendererType = 'WebGPU';
    }
    return rendererType
  }

  // Add to camera-controlled scene tree
  public addToViewport(obj: PIXI.Container | PIXI.Sprite | SuperSprite | SuperText): any {

    this.viewport.addChild(obj);

    if (obj instanceof SuperSprite || obj instanceof SuperContainer || obj instanceof SuperText) {
      obj.onAdded();
    }

    this.resize();
  }

  // Remove from camera-controlled scene tree
  public removeFromViewport(obj: PIXI.Container | PIXI.Sprite | SuperSprite | SuperText): any {

    this.viewport.removeChild(obj);

    if (obj instanceof SuperSprite || obj instanceof SuperContainer || obj instanceof SuperText) {
      obj.onRemoved();
    }

    this.resize();
  }

  // Add to basic scene tree
  public addToStage(obj: PIXI.Container | PIXI.Sprite | SuperSprite | SuperText, parent?: PIXI.Sprite): any {

    if (parent == null) {
      this.app.stage.addChild(obj);
    } else {
      parent.addChild(obj);
    }

    if (obj instanceof SuperSprite || obj instanceof SuperContainer || obj instanceof SuperText) {
      obj.onAdded();
    }

    this.resize();
  };


  // Remove from basic scene tree
  public removeFromStage(obj: PIXI.Container | PIXI.Sprite | SuperSprite | SuperText, parent?: PIXI.Sprite): any {

    if (parent == null) {
      this.app.stage.removeChild(obj);
    }
    else {
      parent.removeChild(obj);
    }

    if (obj instanceof SuperSprite || obj instanceof SuperContainer || obj instanceof SuperText) {
      obj.onRemoved();
    }

    this.resize();
  }


  public resize = () => {
    this.emit(SuperApp.EVENT_RESIZE, this);
  };

  private setupResizeHandling() {

    const resizeAfterDelay = () => {
      setTimeout(this.resize, 100);
    };

    /////////////////////////////
    // Observe window resize
    /////////////////////////////
    window.addEventListener('resize', this.resize);
    window.addEventListener('resize', resizeAfterDelay);
    window.addEventListener('orientationchange', this.resize);
    window.addEventListener('orientationchange', resizeAfterDelay);
    this.resize(); // Initial resize
  }

  public getScreenScaleCurrent(): PIXI.Point {

    return new PIXI.Point(
      this.app.screen.width / this.widthInitial,
      this.app.screen.height / this.heightInitial
    );
  }

  getScreenCenterpoint() {

    return new PIXI.Point(
      this.app.screen.width / 2,
      this.app.screen.height / 2)
  }

  // Event Handlers -------------------------------
}