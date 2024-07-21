import { ActorContainer, ActorContainerConfiguration } from './ActorContainer';
import { GixiApplication } from './GixiApplication';
import { IActor } from './interfaces/IActor';
import { IInitializableAsync } from './interfaces/IInitializeAsync';
import { GixiUtility } from './GixiUtility';
import * as PIXI from 'pixi.js';

/**
 * Configuration
 */
export interface ActorStaticConfiguration extends ActorContainerConfiguration {
    textureUrl: string;
    texture: PIXI.Texture;
}

const ActorStaticConfigurationDefault: ActorStaticConfiguration = {
    textureUrl: '',
    texture: PIXI.Texture.EMPTY,
    canCollisionCheck: true,
    isTickable: true,
    isResizable: true
}


/**
 * Represents a coin in the game.
 * 
 */
export class ActorStatic extends ActorContainer implements IInitializableAsync, IActor {


    // Properties -----------------------------------
    public override get configuration(): ActorStaticConfiguration {
        return this._configuration as ActorStaticConfiguration;
    }

    // Fields ---------------------------------------
    protected _sprite!: PIXI.Sprite;

    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<ActorStaticConfiguration>) {

        super(app, { ...ActorStaticConfigurationDefault, ...configuration });


        if (!GixiUtility.textureIsNullOrEmpty(this.configuration?.texture) &&
            !GixiUtility.stringIsNullOrEmpty(this.configuration?.textureUrl)) {
            throw new Error("You cannot set both texture and textureUrl in the configuration");
        }

        this.initializeAsync();

        // Redeclare anything from super 
        // that you want differently here
        this.label = (ActorStatic).name;
    }


    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        if (!GixiUtility.textureIsNullOrEmpty(this.configuration?.texture)) {
            this._sprite = new PIXI.Sprite(this.configuration?.texture);
        }
        else if (!GixiUtility.stringIsNullOrEmpty(this.configuration?.textureUrl)) {
            await PIXI.Assets.load([this.configuration.textureUrl]);
            const texture: PIXI.Texture = PIXI.Texture.from(this.configuration.textureUrl);
            this._sprite = new PIXI.Sprite(texture);
        }

        if (this._sprite) {
            this._sprite.label = this.label;
            this.addChild(this._sprite);
            this._sprite.anchor.set(0.5, 0.5);
        }


        // Local
        //Do any additional initialization here

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

