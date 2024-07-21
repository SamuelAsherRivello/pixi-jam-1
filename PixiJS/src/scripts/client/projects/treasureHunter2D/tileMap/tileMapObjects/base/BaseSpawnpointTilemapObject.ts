import { ActorStatic, ActorStaticConfiguration } from '@src/scripts/client/gixi/ActorStatic';
import { GixiApplication } from '@src/scripts/client/gixi/GixiApplication';

/**
 * Represents a spawnpoint in the game.
 * 
 */
export class BaseSpawnpointTilemapObject extends ActorStatic {

    // Properties -----------------------------------

    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<ActorStaticConfiguration>) {

        super(app, configuration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (BaseSpawnpointTilemapObject).name;
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
