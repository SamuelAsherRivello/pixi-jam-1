import * as PIXI from 'pixi.js';
import { GixiApplication } from '../gixi/GixiApplication';

/**
 * Subclass PIXI.Text if you want basic text functionality.
 * 
 * Subclass SuperText if you ALSO want onResize and onTick events
 */
export class SuperText extends PIXI.Text {

    // Fields ---------------------------------------
    protected _superApp: GixiApplication;

    // Initialization -------------------------------
    constructor(superApp: GixiApplication, message: string, fontSize: number = 8, align: PIXI.TextStyleAlign = 'left') {


        const textStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: fontSize,
            fill: '#ffffff',

            align: align
        });

        const textOptions: PIXI.TextOptions = {
            text: message,
            style: textStyle,
            resolution: 2 // Ensure text is sharp
        };

        super(textOptions);

        this.label = (SuperText).name;

        this._superApp = superApp;

        // Tick
        superApp.app.ticker.add(this.onTick.bind(this));

        // Resize
        this._superApp.addListener(GixiApplication.EVENT_RESIZE, this.onResize.bind(this));
        this.onResize(this._superApp);

    }

    // Initialization -------------------------------
    public isChild(): boolean {
        return parent !== null;
    }

    // Event Handlers -------------------------------
    public onAdded() {
        // Empty implementation to be overridden
    }

    public onRemoved() {
        // Empty implementation to be overridden
    }

    public onResize(superApp: GixiApplication): void {
        // Empty implementation to be overridden
    }

    public onTick(ticker: PIXI.Ticker): void {
        // Empty implementation to be overridden
    }
}
