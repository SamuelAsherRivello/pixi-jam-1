import { GixiApplication } from '@client/gixi/GixiApplication';
import { Ticker } from 'pixi.js';
import { SystemBase } from './base/SystemBase';

export class HtmlDomSystem extends SystemBase {
  // Properties -----------------------------------
  public get isAppInFocus(): boolean {
    return this._isAppInFocus;
  }

  public get isAppDestroyed(): boolean {
    return this._isAppDestroyed;
  }

  // Fields ---------------------------------------
  private _isAppInFocus: boolean = true;
  private _isAppDestroyed: boolean = false;
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
    //TODO: this detects window changes, but not reloading from 1/2/4 games within existing page
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
    this._isAppInFocus = true;
    //console.log('Focus: ' + this._isInFocus);
  }

  public onInteractionEnd(): void {
    this._isAppInFocus = false;
    //console.log('Focus: ' + this._isInFocus);
  }

  public onDestroy(): void {
    if (this._isAppDestroyed) {
      return;
    }
    this._isAppDestroyed = true;
    console.log('Detecting Game.OnDestroy()');
    this.emit(HtmlDomSystem.OnDestroy);
  }

  public onTick(ticker: Ticker): void {}
}
