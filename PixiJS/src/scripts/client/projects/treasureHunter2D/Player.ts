import * as PIXI from 'pixi.js';
import { GixiApplication } from '@src/scripts/client/gixi/GixiApplication';
import { DropShadowFilter } from 'pixi-filters';
import { CoinTilemapObject } from './tileMap/tileMapObjects/CoinTilemapObject';
import { ChestTilemapObject } from './tileMap/tileMapObjects/ChestTilemapObject';
import { ActorStatic, ActorStaticConfiguration } from '../../gixi/ActorStatic';
import { ICollisionSystemBody } from '../../gixi/interfaces/ICollisionSystemBody';
import { ITreasureHunterData } from '../../client';

/**
 * Configuration
 */
export interface PlayerConfiguration extends ActorStaticConfiguration {
}

const PlayerConfigurationDefault: PlayerConfiguration = {
    textureUrl: '',
    texture: PIXI.Texture.EMPTY,
    canCollisionCheck: true,
    isTickable: true,
    isResizable: true
}

/**
 * Represents a coin in the game.
 * 
 */
export class Player extends ActorStatic implements ICollisionSystemBody {


    // Properties -----------------------------------
    public get canCollisionBeChecked(): boolean {
        return true;
    }


    // Fields ---------------------------------------

    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<PlayerConfiguration>) {

        super(app, { ...PlayerConfigurationDefault, ...configuration });

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
    private isCollisionWithTilemap(x: number, y: number): boolean {

        //show all 4 values in the log string
        const width = 32;
        const height = 32;
        const isCollision = this._app.systems.tilemapCollisionSystem.isCollision(x, y, width, height);

        // Internally the map uses globals, so we do NOT need to convert
        //let globalPos = this.toGlobal(this.position);

        if (isCollision) {
            //console.log(`isCollisionWithTilemap (x=${x}, y=${y}) = ${isCollision}`);
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
            //ACTION!
            moveVector.x += -1;
        }
        if (this._app.systems.inputSystem.isKeyDown('d')) {
            moveVector.x += 1;
        }
        if (this._app.systems.inputSystem.isKeyDown('w')) {
            moveVector.y += -1;
        }
        if (this._app.systems.inputSystem.isKeyDown('s')) {
            moveVector.y += 1;
        }

        if (this._app.systems.inputSystem.isKeyDownThisFrame('Enter') ||         //works
            this._app.systems.inputSystem.isKeyDownThisFrame('Spacebar')) {      //does work. TODO: WHy?

            //ACTION!
            this._app.systems.audioSystem.play("./assets/audio/Click01.wav");

            //DO something here like attack
        }


        if (this._app.systems.inputSystem.isKeyDownThisFrame('f')) {

            //FULLSCREEN
            this._app.isFullscreen = !this._app.isFullscreen;
            this._app.systems.audioSystem.play("./assets/audio/Click01.wav");
        }

        if (this._app.systems.inputSystem.isKeyDownThisFrame('r')) {

            //FULLSCREEN
            this._app.systems.audioSystem.play("./assets/audio/Click01.wav");
            this._app.reload();

        }

        const movementSpeed = (isShift ? 10.0 : 3.0);
        const nextX = this.position.x + moveVector.x * ticker.deltaTime * movementSpeed;
        const nextY = this.position.y + moveVector.y * ticker.deltaTime * movementSpeed;

        //TODO: Sanity check this logic to slide along walls
        if (moveVector.x !== 0 && !this.isCollisionWithTilemap(nextX, this.position.y)) {
            this.position.x = nextX;
        }

        if (moveVector.y !== 0 && !this.isCollisionWithTilemap(this.position.x, nextY)) {
            this.position.y = nextY;
        }

    }


    public override onCollision(collisions: PIXI.Container[]): void {


        //TEMP: ENABLE THIS TO TEST - only do collisions on button click
        // if (!this._app.systems.inputSystem.isKeyDownThisFrame('Enter')) {
        //     return;
        // }


        collisions.forEach((collision) => {

            //Note the label is NOT always the class name
            //console.log("player is colliding with...");
            //console.log(collision.name);

            //Strong typing is optional, but recommended
            const myGixiAppData: ITreasureHunterData =
                (this._app.configuration.data as ITreasureHunterData);

            if (collision instanceof CoinTilemapObject) {
                if (!collision.isCollected) {
                    collision.collect();
                    myGixiAppData.coinsCollected.Value++;
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

