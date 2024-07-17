import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite, SuperSpriteConfiguration } from '@src/scripts/library/core/super/SuperSprite';

/**
 * Represents a coin in the game.
 * 
 */
export class Player extends SuperSprite {


    // Properties -----------------------------------


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(superApp: SuperApp, superSpriteConfiguration?: Partial<SuperSpriteConfiguration>) {

        super(superApp, superSpriteConfiguration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (Player).name;
        this.anchor.set(0.0, 0.0);

    }


    public override async initializeAsync() {

        // Super
        super.initializeAsync();

        // Local
        //Do any additional initialization here

    }

    // Methods --------------------------------------
    public override onTick(ticker: PIXI.Ticker): void {

        super.onTick(ticker);

        let moveVector: PIXI.Point = new PIXI.Point(0, 0);

        if (this._superApp.input.isKeyDown('a')) {
            moveVector.x += -1;
        }
        if (this._superApp.input.isKeyDown('d')) {
            moveVector.x += 1;
        }
        if (this._superApp.input.isKeyDown('w')) {
            moveVector.y += -1;
        }
        if (this._superApp.input.isKeyDown('s')) {
            moveVector.y += 1;
        }

        const movementSpeed = 3.0;
        this.position.x += moveVector.x * ticker.deltaTime * movementSpeed;
        this.position.y += moveVector.y * ticker.deltaTime * movementSpeed;
    }

    // Event Handlers -------------------------------
}
