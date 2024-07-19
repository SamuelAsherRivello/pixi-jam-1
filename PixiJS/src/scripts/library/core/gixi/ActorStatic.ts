import { ActorContainer } from './ActorContainer';
import { SuperApp } from '../super/SuperApp';
import { IActor } from './IActor';
import { IInitializableAsync } from '../super/IInitializeAsync';
import { ActorConfiguration } from './ActorConfiguration';
import { SuperUtility } from '../super/SuperUtility';
import * as PIXI from 'pixi.js';

/**
 * Configuration
 */
export interface ActorStaticConfiguration extends ActorConfiguration {
    textureUrl: string;
    texture: PIXI.Texture;
}

const ActorStaticConfigurationDefault: ActorStaticConfiguration = {
    textureUrl: '',
    texture: PIXI.Texture.EMPTY,
    isCollidable: true,
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
    constructor(superApp: SuperApp, configuration?: Partial<ActorStaticConfiguration>) {

        super(superApp, { ...ActorStaticConfigurationDefault, ...configuration });

        if (!SuperUtility.textureIsNullOrEmpty(this.configuration?.texture) &&
            !SuperUtility.stringIsNullOrEmpty(this.configuration?.textureUrl)) {
            throw new Error("You cannot set both texture and textureUrl in the configuration");
        }

        // Redeclare anything from super 
        // that you want differently here
        this.label = (ActorStatic).name;

        this.initializeAsync();
    }


    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        if (!SuperUtility.textureIsNullOrEmpty(this.configuration?.texture)) {
            this._sprite = new PIXI.Sprite(this.configuration?.texture);
        }
        else if (!SuperUtility.stringIsNullOrEmpty(this.configuration?.textureUrl)) {
            await PIXI.Assets.load([this.configuration.textureUrl]);
            const texture: PIXI.Texture = PIXI.Texture.from(this.configuration.textureUrl);
            this._sprite = new PIXI.Sprite(texture);
        }

        this.addChild(this._sprite);
        this._sprite.anchor.set(0.5, 0.5);

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

