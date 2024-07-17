import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite, SuperSpriteConfiguration } from '@src/scripts/library/core/super/SuperSprite';
import { Player } from './Player';
import { Actions, Interpolations } from 'pixi-actions';

/**
 * Represents a coin in the game.
 * 
 */
export class Coin extends SuperSprite {


    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(superApp: SuperApp, superSpriteConfiguration?: Partial<SuperSpriteConfiguration>) {

        super(superApp, superSpriteConfiguration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (Coin).name;

    }


    public override async initializeAsync() {

        // Super
        super.initializeAsync();

        // Local
        //Do any additional initialization here

    }

    // Methods --------------------------------------
    private FloatUp() {
        let action = Actions.sequence(

            Actions.delay(0),
            Actions.runFunc(() => {
                // Call something?
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
                // Call something?
                this.destroy();
            }),
        );
        action.play();

    }


    // Event Handlers -------------------------------

    public override onCollision(superSprites: SuperSprite[]): void {

        if (!this.isCollidable) {
            return;
        }

        superSprites.forEach((superSprite) => {
            if (superSprite instanceof Player) {
                console.log(`${this.label} is colliding with ${superSprite.label}`);

                this._isCollidable = false;
                this.FloatUp();

            }
        });
    }
}
