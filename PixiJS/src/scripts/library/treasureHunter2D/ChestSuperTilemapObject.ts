import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite, SuperSpriteConfiguration } from '@src/scripts/library/core/super/SuperSprite';
import { Player } from '@src/scripts/library/treasureHunter2D/Player';
import { SuperTilemapObject } from '../core/super/superTilemap/SuperTilemapObject';
import { Ticker } from 'pixi.js';

/**
 * Represents a coin in the game.
 * 
 */
export class ChestSuperTilemapObject extends SuperTilemapObject {


    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(superApp: SuperApp, superSpriteConfiguration?: Partial<SuperSpriteConfiguration>) {

        super(superApp, superSpriteConfiguration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (ChestSuperTilemapObject).name;
    }

    public override async initializeAsync() {

        // Super
        super.initializeAsync();

        // Local
        // Do any additional initialization here

    }

    // Methods --------------------------------------
    public override onTick(ticker: Ticker): void {

        // Super
        super.onTick(ticker);

        // Local
        this.rotation += 0.01 * ticker.deltaTime;
    }

    // Event Handlers -------------------------------

    public override onCollision(superSprites: SuperSprite[]): void {

        if (!this._isCollidable) {
            return;
        }

        superSprites.forEach((superSprite) => {
            if (superSprite instanceof Player) {
                this._isCollidable = false;
                this.destroy();
            }
        });
    }
}
