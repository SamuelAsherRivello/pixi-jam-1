import { ActorAnimatedConfiguration } from '@src/scripts/library/gixi';
import { ActorAnimated } from '@src/scripts/library/gixi/ActorAnimated';
import { GixiApplication } from '@src/scripts/library/gixi/GixiApplication';
import { Actions, Interpolations } from 'pixi-actions';
import { Container } from 'pixi.js';
import { Player } from '../../Player';
import { DropShadowFilter, GlowFilter } from 'pixi-filters';

/**
 * Represents a coin in the game.
 * 
 */
export class CoinTilemapObject extends ActorAnimated {


    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<ActorAnimatedConfiguration>) {

        super(app, configuration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (CoinTilemapObject).name;

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
    private destroyAfterAnimation() {
        let action = Actions.sequence(

            Actions.delay(0),
            Actions.runFunc(() => {
                // BEFORE Animation: Call something?
                this._app.systems.audioSystem.Play("./assets/audio/Chime01.mp3");
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
