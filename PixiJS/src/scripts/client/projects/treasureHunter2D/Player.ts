import * as PIXI from 'pixi.js';
import { GixiApplication } from '@src/scripts/client/gixi/GixiApplication';
import { DropShadowFilter } from 'pixi-filters';
import { CoinTilemapObject } from './tileMap/tileMapObjects/CoinTilemapObject';
import { ChestTilemapObject } from './tileMap/tileMapObjects/ChestTilemapObject';
import { ActorStatic, ActorStaticConfiguration } from '../../gixi/ActorStatic';
import { Tilemap } from '../../gixi/tilemap/Tilemap';

/**
 * Configuration
 */
export interface PlayerConfiguration extends ActorStaticConfiguration {
}

const PlayerConfigurationDefault: PlayerConfiguration = {
    textureUrl: '',
    texture: PIXI.Texture.EMPTY,
    isCollidable: true,
    isTickable: true,
    isResizable: true
}

/**
 * Represents a coin in the game.
 * 
 */
export class Player extends ActorStatic {


    // Properties -----------------------------------


    // Fields ---------------------------------------
    private _Tilemap: Tilemap;

    // Initialization -------------------------------
    constructor(app: GixiApplication, Tilemap: Tilemap, configuration?: Partial<PlayerConfiguration>) {

        super(app, { ...PlayerConfigurationDefault, ...configuration });
        this._Tilemap = Tilemap;

        // Redeclare anything from super 
        // that you want differently here
        this.label = (Player).name;


        //TEST
        //TODO: Update InputSystem to take screen-swipes instead of player-taps
        this.on('pointerdown', (event) => {
            this.position.x += 10;
        });
        this.eventMode = 'static';

    }



    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        // OPTIONAL: Try these - https://pixijs.io/filters/
        this._sprite.filters = [
            new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 })
        ];

        // Local
        //Do any additional initialization here
        this._sprite.anchor.set(0, 0);

    }

    // Methods --------------------------------------


    //TODO: Utilize this to block movement
    private isCollisionWithTilemap() {

        //show all 4 values in the log string
        let x = Math.round(this.position.x);
        let y = Math.round(this.position.y);
        let width = 32;
        let height = 32;

        let isCollision = this._Tilemap.isCollision(x, y, width, height);

        // Internally the map uses globals, so we do NOT need to convert
        //let globalPos = this.toGlobal(this.position);

        if (isCollision) {
            console.log(`isCollisionWithTilemap (x=${x}, y=${y}) = ${isCollision}`);
        }
        else {
            //console.log(`isCollisionWithTilemap (x=${x}, y=${y}) = ${isCollision}`);
        }


        return isCollision;

    }

    // Event Handlers -------------------------------

    public override onTick(ticker: PIXI.Ticker): void {

        super.onTick(ticker);

        let moveVector: PIXI.Point = new PIXI.Point(0, 0);

        //TODO: Change to be either/both shift keys
        const isShift: boolean = this._app.systems.inputSystem.isKeyDown('m')

        if (this._app.systems.inputSystem.isKeyDown('a')) {
            this.isCollisionWithTilemap();
            moveVector.x += -1;
        }
        if (this._app.systems.inputSystem.isKeyDown('d')) {
            this.isCollisionWithTilemap();
            moveVector.x += 1;
        }
        if (this._app.systems.inputSystem.isKeyDown('w')) {
            this.isCollisionWithTilemap();
            moveVector.y += -1;
        }
        if (this._app.systems.inputSystem.isKeyDown('s')) {
            this.isCollisionWithTilemap();
            moveVector.y += 1;
        }

        if (this._app.systems.inputSystem.isKeyDownThisFrame('Enter') ||         //works
            this._app.systems.inputSystem.isKeyDownThisFrame('Spacebar')) {      //does work. TODO: WHy?

            //ACTION!
            this._app.systems.audioSystem.play("./assets/audio/Click01.wav");
        }

        if (this._app.systems.inputSystem.isKeyDownThisFrame('f')) {

            //FULLSCREEN
            this._app.isFullscreen = !this._app.isFullscreen;
        }

        const movementSpeed = (isShift ? 10.0 : 3.0);
        this.position.x += moveVector.x * ticker.deltaTime * movementSpeed;
        this.position.y += moveVector.y * ticker.deltaTime * movementSpeed;
    }


    public override onCollision(collisions: PIXI.Container[]): void {

        collisions.forEach((collision) => {

            console.log("collision2: " + collision.label)
            if (collision instanceof CoinTilemapObject) {
                if (!collision.isCollected) {
                    collision.collect();
                    return;
                }
            }

            if (collision instanceof ChestTilemapObject) {
                if (!collision.isCollected) {
                    collision.collect();
                    return;
                }
            }
        });
    }
}

