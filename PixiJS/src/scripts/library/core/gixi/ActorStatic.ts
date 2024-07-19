import * as PIXI from 'pixi.js';
import { SuperSprite, SuperSpriteConfiguration } from '@src/scripts/library/core/super/SuperSprite';
import { ActorContainer } from './ActorContainer';
import { SuperApp } from '../super/SuperApp';


/**
 * Configuration
 */
export interface ActorStaticConfiguration {
    textureUrl: string;
    texture: PIXI.Texture;
    isCollidable: boolean;
    isTickable: boolean;
    isResizable: boolean;
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
export class ActorStatic extends ActorContainer {


    // Properties -----------------------------------


    // Fields ---------------------------------------
    protected _superSprite: SuperSprite;

    // Initialization -------------------------------
    constructor(superApp: SuperApp, actorStaticConfiguration?: Partial<ActorStaticConfiguration>) {

        super(superApp, actorStaticConfiguration);
        this._superSprite = new SuperSprite(this._superApp, actorStaticConfiguration);
        this._superApp.addToStage(this._superSprite, this);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (ActorStatic).name;
        this._superSprite.anchor.set(0.5, 0.5);

    }


    public override async initializeAsync() {

        // Super
        super.initializeAsync();
        await this._superSprite.initializeAsync();


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

