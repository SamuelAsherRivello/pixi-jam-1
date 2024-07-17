import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite } from '@src/scripts/library/core/super/SuperSprite';

/**
 * Represents a coin in the game.
 * 
 */
export class Coin extends SuperSprite {


    // Properties -----------------------------------


    // Fields ---------------------------------------
    private _textureUrl: string;


    // Initialization -------------------------------
    constructor(superApp: SuperApp, textureUrl: string) {
        super(superApp);
        this.label = (Coin).name;
        this.anchor.set(0.0, 0.0);
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



    // Event Handlers -------------------------------

    public override onCollision(superSprites: SuperSprite[]): void {
        superSprites.forEach((superSprite) => {
            console.log(`${this.label} is colliding with ${superSprite.label}`);
        });
    }
}
