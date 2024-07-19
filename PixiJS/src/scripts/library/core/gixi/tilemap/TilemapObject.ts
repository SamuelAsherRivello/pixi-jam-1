import { SuperApp } from '../../super/SuperApp';
import { ActorStatic, ActorStaticConfiguration } from '../ActorStatic';

/**
 * Represents an item from the Object layer in a tilemap
 * 
 */
export class TilemapObject extends ActorStatic {


    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(superApp: SuperApp, actorStaticConfiguration?: Partial<ActorStaticConfiguration>) {

        super(superApp, actorStaticConfiguration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (TilemapObject).name;
        //this.anchor.set(0.5);

    }

    public override async initializeAsync() {

        // Super
        super.initializeAsync();

        // Local
        // Do any additional initialization here

    }

    // Methods --------------------------------------

    // Event Handlers -------------------------------
}
