import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite } from '@src/scripts/library/core/super/SuperSprite';

export class Player extends SuperSprite {
    constructor(superApp: SuperApp, texture: PIXI.Texture) {
        super(superApp, texture);
        this.label = (Player).name;
        this.anchor.set(0.0, 0.0);
        this.position.set(300, 200);
        this.scale.set(1);
        this.eventMode = 'static';
        this.cursor = 'pointer';
    }

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

    public override onCollision(superSprites: SuperSprite[]): void {

        superSprites.forEach((superSprite) => {
            console.log(`${this.label} is colliding with ${superSprite.label}`);
        });
    }
}