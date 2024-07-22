import { ActorContainer, ActorContainerConfiguration } from "./ActorContainer";
import { GixiApplication } from "./GixiApplication";
import { IActor } from "./interfaces/IActor";
import { IInitializableAsync } from "./interfaces/IInitializeAsync";
import * as PIXI from 'pixi.js';

/**
 * Configuration
 */
export interface GixiTextConfiguration extends ActorContainerConfiguration {
    textStyle: PIXI.TextStyle,
}

const GixiTextConfigurationDefault: GixiTextConfiguration = {
    textStyle: new PIXI.TextStyle(),
    canCollisionCheck: false,
    isTickable: true,
    isResizable: true
}


/**
 * Represents a coin in the game.
 * 
 */
export class GixiText extends ActorContainer implements IInitializableAsync, IActor {


    // Properties -----------------------------------
    public override get configuration(): GixiTextConfiguration {
        return this._configuration as GixiTextConfiguration;
    }

    public get textString(): string {
        return this._text.text;
    }

    public set textString(value: string) {
        this._text.text = value;

        // Some resizing may depend on string length, so call again here
        this.onResize(this._app);
    }

    // Fields ---------------------------------------
    protected _text!: PIXI.Text

    // Initialization -------------------------------
    constructor(app: GixiApplication, text: string, configuration?: Partial<GixiTextConfiguration>) {

        super(app, { ...GixiTextConfigurationDefault, ...configuration });

        const textOptions: PIXI.TextOptions = {
            style: this.configuration.textStyle,
            resolution: 2 // TODO: Best value? Ensure text is sharp
        };

        this._text = new PIXI.Text(textOptions);
        this.addChild(this._text);

        // Initialize
        this.initializeAsync();

        // Redeclare anything from super 
        // that you want differently here
        this.label = (GixiText).name;
        this._text.text = text;

    }

    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        // Local
    }

    // Methods --------------------------------------

    // Event Handlers -------------------------------

    public override onTick(ticker: PIXI.Ticker): void {

        // Super
        super.onTick(ticker);


        // Local
        //Do any additional things here

    }
}

