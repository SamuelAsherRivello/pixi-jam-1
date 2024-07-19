import { GixiApplication } from '@src/scripts/library/gixi/GixiApplication';
import { TilemapObject, TilemapObjectConfiguration } from '@src/scripts/library/gixi/tilemap/TilemapObject';
import { Player } from '@src/scripts/library/treasureHunter2D/Player';
import { Container, Ticker } from 'pixi.js';

/**
 * Represents a coin in the game.
 * 
 */
export class ChestTilemapObject extends TilemapObject {



    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<TilemapObjectConfiguration>) {

        super(app, configuration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (ChestTilemapObject).name;
    }

    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

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
