//PIXI
import * as PIXI from 'pixi.js';
import { GixiApplication } from '../GixiApplication';
import { ActorStatic, ActorStaticConfiguration } from '../ActorStatic';

/**
 * Configuration
 */
export interface TilemapObjectConfiguration extends ActorStaticConfiguration {
}

const TilemapObjectConfigurationDefault: TilemapObjectConfiguration = {
    textureUrl: '',
    texture: PIXI.Texture.EMPTY,
    isCollidable: true,
    isTickable: true,
    isResizable: true
}


/**
 * Represents an item from the Object layer in a tilemap
 * 
 */
export class TilemapObject extends ActorStatic {


    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<TilemapObjectConfiguration>) {

        super(app, { ...TilemapObjectConfigurationDefault, ...configuration });

        // Redeclare anything from super 
        // that you want differently here
        this.label = (TilemapObject).name;

    }

    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        // Local
        // Do any additional initialization here

    }

    // Methods --------------------------------------

    // Event Handlers -------------------------------
}
