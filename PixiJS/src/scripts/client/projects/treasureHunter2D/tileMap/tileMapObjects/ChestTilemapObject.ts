import { ActorStatic, ActorStaticConfiguration } from '@src/scripts/client/gixi/ActorStatic';
import { GixiApplication } from '@src/scripts/client/gixi/GixiApplication';
import { Actions, Interpolations } from 'pixi-actions';
import { DropShadowFilter } from 'pixi-filters';
import { Container, Ticker } from 'pixi.js';
import { ICollisionSystemBody } from '../../../../gixi/interfaces/ICollisionSystemBody';

/**
 * Represents a coin in the game.
 * 
 */
export class ChestTilemapObject extends ActorStatic implements ICollisionSystemBody {

    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<ActorStaticConfiguration>) {

        if (configuration) {
            configuration.isCollidable = false;
        }


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
                this._app.systems.audioSystem.play("./assets/audio/Chime02.mp3");
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

    //TODO: Rethink what and where this should be
    public isCollected = false;
    public collect() {

        if (this.isCollected) {
            return;
        }
        this.isCollected = true;
        this.destroyAfterAnimation();
    }

}
