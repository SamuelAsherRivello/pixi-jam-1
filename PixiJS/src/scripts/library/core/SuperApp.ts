import * as PIXI from 'pixi.js';
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
  private _canvasId: string;
  public data: { [key: string]: any };;

  // Initialization -------------------------------
  constructor(
    canvasId: string = 'pixi-application-canvas',
    private width: number = 1920,
    private height: number = 1080,
    data: { [key: string]: any }
  ) {
    super();
    this._canvasId = canvasId;
    this.app = new PIXI.Application();
    this.data = data;
  }

  /**
   * Initializes the PixiJS application.
   */
  async init() {
    try {
      await this.app.init({
        width: this.width,
        height: this.height,
        backgroundColor: 0x1099bb,
        resizeTo: window,
        canvas: document.getElementById(this._canvasId) as HTMLCanvasElement,
      });


      console.log(`PIXI.Application.init() v${PIXI.VERSION} success!`);
      this.emit(SuperApp.EVENT_INITIALIZE_COMPLETE, this);

      this.setupResizeHandling();
    } catch (error) {
      console.error(`PIXI.Application.init() v${PIXI.VERSION} failed. error = ${error}`);
      this.emit(SuperApp.EVENT_INITIALIZE_ERROR, error);
    }
  }

  // Methods ------------------------------


  // Overloaded method
  public addToStage(obj: PIXI.Container | PIXI.Sprite | SuperSprite | SuperText, parent?: PIXI.Sprite): any {
    if (parent == null) {
      this.app.stage.addChild(obj);
    } else {
      parent.addChild(obj);
    }

    if (obj instanceof SuperSprite || obj instanceof SuperContainer || obj instanceof SuperText) {
      obj.onAddedToStage();
    }

    this.resize();
  };

  public removeFromStage(obj: PIXI.Container | PIXI.Sprite | SuperSprite | SuperText, parent?: PIXI.Sprite): any {

    if (parent == null) {
      this.app.stage.removeChild(obj);
    }
    else {
      parent.removeChild(obj);
    }

    if (obj instanceof SuperSprite || obj instanceof SuperContainer || obj instanceof SuperText) {
      obj.onRemovedFromStage();
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


  // Event Handlers -------------------------------


}