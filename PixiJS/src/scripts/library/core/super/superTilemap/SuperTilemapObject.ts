import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite, SuperSpriteConfiguration } from '@src/scripts/library/core/super/SuperSprite';

/**
 * Represents an item from the Object layer in a tilemap
 * 
 */
export class SuperTilemapObject extends SuperSprite {


    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(superApp: SuperApp, superSpriteConfiguration?: Partial<SuperSpriteConfiguration>) {

        super(superApp, superSpriteConfiguration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (SuperTilemapObject).name;
        this.anchor.set(0.5);

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
