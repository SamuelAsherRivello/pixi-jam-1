import { SuperSprite, SuperSpriteConfiguration } from '@src/scripts/library/core/super/SuperSprite';
import { Player } from '@src/scripts/library/treasureHunter2D/Player';
import { Container, Ticker } from 'pixi.js';
import { TilemapObject } from '../../core/gixi/tilemap/TilemapObject';
import { SuperApp } from '../../core/super/SuperApp';

/**
 * Represents a coin in the game.
 * 
 */
export class ChestTilemapObject extends TilemapObject {



    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(superApp: SuperApp, superSpriteConfiguration?: Partial<SuperSpriteConfiguration>) {

        super(superApp, superSpriteConfiguration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (ChestTilemapObject).name;
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

    public override onCollision(superSprites: Container[]): void {


        //not working.... so copy from coin. Coin works.










        if (!this._isCollidable) {
            return;
        }

        console.log('ChestTilemapObject.onCollision()');
        superSprites.forEach((superSprite) => {
            if (superSprite instanceof Player) {
                this._isCollidable = false;
                this.destroy();
            }
        });
    }

}
