import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/super/SuperApp';
import { SuperSprite, SuperSpriteConfiguration } from '@src/scripts/library/core/super/SuperSprite';
import { Gixi } from '../core/gixi/ActorContainer';
import { SuperTilemap } from '../core/super/superTilemap/SuperTilemap';

/**
 * Represents a coin in the game.
 * 
 */
export class Player extends Gixi.ActorContainer {


    // Properties -----------------------------------


    // Fields ---------------------------------------
    private _superTilemap: SuperTilemap;
    private _superSprite: SuperSprite;

    // Initialization -------------------------------
    constructor(superApp: SuperApp, superTilemap: SuperTilemap, superSpriteConfiguration?: Partial<SuperSpriteConfiguration>) {

        super(superApp, superSpriteConfiguration);
        this._superTilemap = superTilemap;
        this._superSprite = new SuperSprite(this._superApp, superSpriteConfiguration);
        this._superApp.addToStage(this._superSprite, this);


        // Redeclare anything from super 
        // that you want differently here
        this.label = (Player).name;

    }


    public override async initializeAsync() {

        // Super
        super.initializeAsync();
        await this._superSprite.initializeAsync();


        // Local
        //Do any additional initialization here

    }

    // Methods --------------------------------------


    //TODO: Utilize this to block movement
    private isCollision() {

        //show all 4 values in the log string
        let x = Math.round(this.position.x);
        let y = Math.round(this.position.y);
        let width = 32;
        let height = 32;

        let isCollision = this._superTilemap.isCollision(x, y, width, height);

        // Internally the map uses globals, so we do NOT need to convert
        //let globalPos = this.toGlobal(this.position);

        if (isCollision) {
            console.log(`isCollision (${x}, ${y}, ${width}, ${height}) = ${isCollision}`);
        }
        else {
            //console.log(`isCollision (${x}, ${y}, ${width}, ${height}) = ${isCollision}`);
        }


        return isCollision;

    }

    // Event Handlers -------------------------------

    public override onTick(ticker: PIXI.Ticker): void {

        super.onTick(ticker);

        let moveVector: PIXI.Point = new PIXI.Point(0, 0);

        if (this._superApp.systems.inputSystem.isKeyDown('a')) {
            this.isCollision();
            moveVector.x += -1;
        }
        if (this._superApp.systems.inputSystem.isKeyDown('d')) {
            this.isCollision();
            moveVector.x += 1;
        }
        if (this._superApp.systems.inputSystem.isKeyDown('w')) {
            this.isCollision();
            moveVector.y += -1;
        }
        if (this._superApp.systems.inputSystem.isKeyDown('s')) {
            this.isCollision();
            moveVector.y += 1;
        }

        const movementSpeed = 3.0;
        this.position.x += moveVector.x * ticker.deltaTime * movementSpeed;
        this.position.y += moveVector.y * ticker.deltaTime * movementSpeed;
    }
}

