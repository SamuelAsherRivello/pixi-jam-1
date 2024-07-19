import { ActorAnimatedConfiguration } from '@src/scripts/library/gixi';
import { ActorAnimated } from '@src/scripts/library/gixi/ActorAnimated';
import { GixiApplication } from '@src/scripts/library/gixi/GixiApplication';
import { Actions, Interpolations } from 'pixi-actions';
import { DropShadowFilter, GlowFilter } from 'pixi-filters';

/**
 * Represents a coin in the game.
 * 
 */
export class CoinTilemapObject extends ActorAnimated {


    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(app: GixiApplication) {

        const configuration: ActorAnimatedConfiguration = {
            isCollidable: false,
            isTickable: false,
            isResizable: false
        }

        super(app, configuration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (CoinTilemapObject).name;

    }

    public whatever() {
        this.isCollected = true;
        this.destroyAfterAnimation();
    }


    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        // OPTIONAL: Try these - https://pixijs.io/filters/
        this.filters = [
            //new GlowFilter({ distance: 1, outerStrength: 1, innerStrength: 1, color: 0xffff00 }),
            new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 }) //
        ];

        // Local
        //Do any additional initialization here

    }


    // Methods --------------------------------------


    public destroyAfterAnimation() {
        let action = Actions.sequence(

            Actions.delay(0),
            Actions.runFunc(() => {
                // BEFORE Animation: Call something?
                this._app.systems.audioSystem.play("./assets/audio/Chime01.mp3");
            }),
            Actions.parallel(

                Actions.moveTo(this,
                    this.x,
                    this.y - 32,
                    20,
                    Interpolations.smooth2),

                Actions.scaleTo(this,
                    2,
                    2,
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


