import { GixiApplication } from '@src/scripts/library/gixi/GixiApplication';
import { TilemapObject, TilemapObjectConfiguration } from '@src/scripts/library/gixi/tilemap/TilemapObject';
import { Player } from '@src/scripts/library/treasureHunter2D/Player';
import { Actions, Interpolations } from 'pixi-actions';
import { DropShadowFilter } from 'pixi-filters';
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

        this.filters = [
            new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 })
        ];

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

    private destroyAfterAnimation() {
        let action = Actions.sequence(

            Actions.delay(0),
            Actions.runFunc(() => {
                // BEFORE Animation: Call something?
                this._app.systems.audioSystem.Play("./assets/audio/Chime02.mp3");
            }),
            Actions.parallel(

                Actions.rotateTo(this,
                    1,
                    20,
                    Interpolations.smooth2),

                Actions.scaleTo(this,
                    0,
                    0,
                    20,
                    Interpolations.smooth2),

            ),
            Actions.runFunc(() => {
                // AFTER Animation: Call something?
                this.destroy();
            }),
        );
        action.play();

    }

    // Event Handlers -------------------------------

    public override onCollision(collisions: Container[]): void {

        if (!this._isCollidable) {
            return;
        }

        collisions.forEach((superSprite) => {
            if (superSprite instanceof Player) {
                this._isCollidable = false;
                this.destroyAfterAnimation();
            }
        });
    }

}
