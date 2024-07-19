import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite, SuperSpriteConfiguration } from '@src/scripts/library/core/super/SuperSprite';
import { Player } from '../Player';
import { Actions, Interpolations } from 'pixi-actions';
import { MultiAnimatedSprite } from '@src/scripts/library/core/super/MultiAnimatedSprite';
import { Container } from 'pixi.js';

/**
 * Represents a coin in the game.
 * 
 */
export class Coin extends SuperSprite {


    // Properties -----------------------------------


    // Fields ---------------------------------------
    private _multiAnimatedSprite!: MultiAnimatedSprite;

    // Initialization -------------------------------
    constructor(superApp: SuperApp, superSpriteConfiguration?: Partial<SuperSpriteConfiguration>) {

        super(superApp, superSpriteConfiguration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (Coin).name;
    }



    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        // Local
        //Do any additional initialization here

        // const animatedTextureURL = 'assets/images/AnimatedCoin/animated_coin.png';
        // const animatedTextureJSONURL = 'assets/images/AnimatedCoin/animated_coin.json';        
        // this._multiAnimatedSprite = new MultiAnimatedSprite(animatedTextureURL, animatedTextureJSONURL);
        // await this._multiAnimatedSprite.initializeAndAddToViewport(this._superApp, this);
        // this._multiAnimatedSprite.play('Gold', 0.5);
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

    public override onCollision(superSprites: Container[]): void {

        if (!this._isCollidable) {
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
