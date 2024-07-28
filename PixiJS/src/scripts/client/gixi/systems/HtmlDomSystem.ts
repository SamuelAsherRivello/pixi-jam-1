import { GixiApplication } from '@client/gixi/GixiApplication';
import { Ticker } from 'pixi.js';
import { SystemBase } from './base/SystemBase';

export class HtmlDomSystem extends SystemBase {
  // Properties -----------------------------------
  public get isInFocus(): boolean {
    return this._isInFocus;
  }

  // Fields ---------------------------------------
  private _isInFocus: boolean = true;
  private _container?: HTMLElement;
  public static readonly OnDestroy: string = 'OnDestroy';

  // Initialization -------------------------------
  constructor(app: GixiApplication) {
    super(app);
  }

  public async initializeAsync(): Promise<any> {
    if (this._isInitialized) return;

    this._isInitialized = true;

    this._container = document.getElementById(this._app.CanvasId) as HTMLElement;

    // Mouse events
    this._container.addEventListener('mousedown', () => this.onInteractionStart());
    this._container.addEventListener('mouseenter', () => this.onInteractionStart());
    this._container.addEventListener('mouseleave', () => this.onInteractionEnd());

    // Touch events
    this._container.addEventListener('touchstart', () => this.onInteractionStart());
    this._container.addEventListener('touchend', () => this.onInteractionEnd());

    // Keyboard events
    this._container.addEventListener('keydown', () => this.onInteractionStart());
    this._container.addEventListener('keyup', () => this.onInteractionEnd());

    // Focus events
    this._container.addEventListener('focus', () => this.onInteractionStart());
    this._container.addEventListener('blur', () => this.onInteractionEnd());

    // Destroy
    window.onbeforeunload = () => this.onDestroy();
  }

  public override startRunning() {
    //Super
    super.startRunning();

    //Local
  }

  public override stopRunning() {
    //Super
    super.stopRunning();

    //Local
  }

  // Methods --------------------------------------

  // Event Handlers -------------------------------

  public onInteractionStart(): void {
    this._isInFocus = true;
    //console.log('Focus: ' + this._isInFocus);
  }

  public onInteractionEnd(): void {
    this._isInFocus = false;
    //console.log('Focus: ' + this._isInFocus);
  }

  public onDestroy(): void {
    console.log('onDestroy!!!: ');
    this.emit(HtmlDomSystem.OnDestroy);
  }

  public onTick(ticker: Ticker): void {}
}
