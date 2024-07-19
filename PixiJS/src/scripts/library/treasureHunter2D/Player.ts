import * as PIXI from 'pixi.js';
import { GixiApplication } from '@src/scripts/library/gixi/GixiApplication';
import { Tilemap } from '../gixi/tilemap/Tilemap';
import { ActorStatic, ActorStaticConfiguration } from '../gixi/ActorStatic';

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

    }



    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

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
            this._app.systems.inputSystem.isKeyDownThisFrame('SpaceBar')) {      //does work. TODO: WHy?

            //ACTION!
            this._app.systems.audioSystem.PlayAsync("./assets/audio/Click01.wav");
        }

        if (this._app.systems.inputSystem.isKeyDownThisFrame('f')) {

            //FULLSCREEN
            this._app.isFullscreen = !this._app.isFullscreen;
        }

        const movementSpeed = 3.0;
        this.position.x += moveVector.x * ticker.deltaTime * movementSpeed;
        this.position.y += moveVector.y * ticker.deltaTime * movementSpeed;
    }
}

