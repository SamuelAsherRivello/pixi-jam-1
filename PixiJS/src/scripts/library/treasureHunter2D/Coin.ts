import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite } from '@src/scripts/library/core/super/SuperSprite';
import { Player } from './Player';
import { Actions, Interpolations } from 'pixi-actions';

/**
 * Represents a coin in the game.
 * 
 */
export class Coin extends SuperSprite {


    // Properties -----------------------------------


    // Fields ---------------------------------------
    private _textureUrl: string;
    private isCollidable: boolean = true;

    // Initialization -------------------------------
    constructor(superApp: SuperApp, textureUrl: string) {
        super(superApp);
        this.label = (Coin).name;
        this.anchor.set(0.5);
        this.position.set(300, 200);
        this.scale.set(1);
        this._textureUrl = textureUrl;
        this.init();
    }

    // Methods --------------------------------------

    /**
     * Initializes the coin by loading its texture.
     */
    private async init() {
        await PIXI.Assets.load([this._textureUrl]);
        const coinTexture = PIXI.Texture.from(this._textureUrl);
        this.texture = coinTexture;
    }

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

                this.isCollidable = false;
                this.FloatUp();

            }
        });
    }
}
