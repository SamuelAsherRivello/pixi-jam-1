import * as PIXI from 'pixi.js';
import { GixiApplication } from '@client/gixi/GixiApplication';
import { DropShadowFilter } from 'pixi-filters';
import { CoinTilemapObject } from './tileMap/tileMapObjects/CoinTilemapObject';
import { ChestTilemapObject } from './tileMap/tileMapObjects/ChestTilemapObject';
import { ActorStatic, ActorStaticConfiguration } from '../../gixi/ActorStatic';
import { ICollisionSystemBody } from '../../gixi/base/ICollisionSystemBody';
import { ITreasureHunterData } from '../../client';
import { AudioSystem } from '../../gixi/systems/AudioSystem';
import { InputSystem } from '../../gixi/systems/InputSystem';
import { TilemapCollisionSystem } from '../../gixi/systems/TilemapCollisionSystem';
import { LocalDiskStorageSystem } from '../../gixi/systems/LocalDiskStorageSystem';
import { Enemy } from './Enemy';
import { KeyCode } from '../../core/data/types/KeyCode';
import { MultiplayerClientSystem } from '@client/gixi/systems/MultiplayerClientSystem/MultiplayerClientSystem';
import { GamePacketRequest, GamePacketResponse } from '@shared/multiplayer/Packet';
import { HtmlDomSystem } from '@client/gixi/systems/HtmlDomSystem';

/**
 * Configuration
 */
export interface PlayerConfiguration extends ActorStaticConfiguration {}

const PlayerConfigurationDefault: PlayerConfiguration = {
  textureUrl: '',
  texture: PIXI.Texture.EMPTY,
  canCollisionCheck: true,
  isTickable: true,
  isResizable: true,
};

/**
 * Represents the playable character in the game
 *
 */
export class Player extends ActorStatic implements ICollisionSystemBody {
  // Properties -----------------------------------
  public get canCollisionBeChecked(): boolean {
    return true;
  }

  // Fields ---------------------------------------
  private timeAtLastTakeDamageMS: number = 0; //start at max, so immediate damage
  private healthDeltaPerEnemyHit: number = -10;
  private static readonly timeBetweenTakeDamageMS: number = 2000;

  // Initialization -------------------------------
  constructor(app: GixiApplication, configuration?: Partial<PlayerConfiguration>) {
    super(app, { ...PlayerConfigurationDefault, ...configuration });

    // Redeclare anything from super
    // that you want differently here
    this.label = Player.name;

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
    this._sprite.filters = [new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 })];

    // Local
    //Do any additional initialization here
    this._sprite.anchor.set(0, 0);

    const multiplayerClientSystem: MultiplayerClientSystem = this._app.systemManager.getItem(MultiplayerClientSystem);

    if (!multiplayerClientSystem) {
      return;
    }

    // multiplayerClientSystem.onResponse(GamePacketResponse, (response) => {
    //   console.log('playerOnGamePacketResponse :', response);
    // });
  }

  // Methods --------------------------------------

  //TODO: Utilize this to block movement
  private isCollisionWithTilemap(x: number, y: number): boolean {
    //show all 4 values in the log string
    const isCollision = this._app.systemManager.getItem(TilemapCollisionSystem).isCollision(x, y, this.width, this.height);

    // Internally the map uses globals, so we do NOT need to convert
    //let globalPos = this.toGlobal(this.position);

    if (isCollision) {
      //console.log(`isCollisionWithTilemap (x=${x}, y=${y}) = ${isCollision}`);
    } else {
      //console.log(`isCollisionWithTilemap (x=${x}, y=${y}) = ${isCollision}`);
    }

    return isCollision;
  }

  private handleInputForMovement(ticker: PIXI.Ticker) {
    let moveVector: PIXI.Point = new PIXI.Point(0, 0);

    const isShift: boolean =
      this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.LeftShift) || this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.RightShift);

    if (this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.A) || this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.LeftArrow)) {
      //ACTION!
      moveVector.x += -1;
    }
    if (this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.D) || this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.RightArrow)) {
      moveVector.x += 1;
    }
    if (this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.W) || this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.UpArrow)) {
      moveVector.y += -1;
    }
    if (this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.S) || this._app.systemManager.getItem(InputSystem).isKeyDown(KeyCode.DownArrow)) {
      moveVector.y += 1;
    }

    if (this._app.systemManager.getItem(InputSystem).isKeyDownThisFrame(KeyCode.Space)) {
      //Action!
      this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Click01.wav');

      //DO something here like attack
    }

    const movementSpeed = isShift ? 10.0 : 3.0;
    const nextX = this.position.x + moveVector.x * ticker.deltaTime * movementSpeed;
    const nextY = this.position.y + moveVector.y * ticker.deltaTime * movementSpeed;

    // Half-width and half-height adjustments
    const halfWidth = this.width / 2;
    const halfHeight = this.height / 2;

    // Adjusted collision checks
    if (moveVector.x !== 0 && !this.isCollisionWithTilemap(nextX + (moveVector.x > 0 ? -this.width / 2 : -halfWidth), this.position.y)) {
      this.position.x = nextX;
    }

    if (moveVector.y !== 0 && !this.isCollisionWithTilemap(this.position.x, nextY + (moveVector.y > 0 ? -this.height / 2 : -halfHeight))) {
      this.position.y = nextY;
    }

    if (moveVector.x !== 0 || moveVector.y !== 0) {
      this.multiplayerEmitGamePacketRequestSafe();
    }
  }

  public takeDamage(deltaHealth: number) {
    const currentTime = this._app.app.ticker.lastTime;
    const timeSinceLastTakeDamage = currentTime - this.timeAtLastTakeDamageMS;

    if (timeSinceLastTakeDamage > Player.timeBetweenTakeDamageMS) {
      this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Hit01.mp3');

      // Update the time of the last damage taken
      this.timeAtLastTakeDamageMS = currentTime;

      // Update health value
      this._app.configuration.data.health.Value = Math.max(0, this._app.configuration.data.health.Value + deltaHealth);
    }
  }

  private multiplayerEmitGamePacketRequestSafe() {
    const multiplayerClientSystem: MultiplayerClientSystem = this._app.systemManager.getItem(MultiplayerClientSystem);

    if (!multiplayerClientSystem) {
      return;
    }

    if (multiplayerClientSystem.isConnected && multiplayerClientSystem.isGameJoined) {
      multiplayerClientSystem.emitGamePacketRequest(new GamePacketRequest(Math.round(this.x), Math.round(this.y)));
    }
  }

  handleInputForOther(ticker: PIXI.Ticker) {
    if (this._app.systemManager.getItem(InputSystem).isKeyDownThisFrame(KeyCode.F)) {
      //Fullscreen
      this._app.isFullscreen = !this._app.isFullscreen;
      this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Click01.wav');
    }

    if (this._app.systemManager.getItem(InputSystem).isKeyDownThisFrame(KeyCode.R)) {
      //Reload page
      this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Click01.wav');
      this._app.reload();
    }

    if (this._app.systemManager.getItem(InputSystem).isKeyDownThisFrame(KeyCode.O)) {
      //Clear Data
      this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Click01.wav');
      this._app.systemManager.getItem(LocalDiskStorageSystem).clearAllData();

      //And reload
      this._app.reload();
    }

    if (this._app.systemManager.getItem(InputSystem).isKeyDownThisFrame(KeyCode.P)) {
      //Clear Data
      this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Click01.wav');

      //And reload
      this._app.app.ticker.started = !this._app.app.ticker.started;
    }

    if (this._app.systemManager.getItem(InputSystem).isKeyDownThisFrame(KeyCode.L)) {
      //Latency
      this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Click01.wav');

      const multiplayerClientSystem = this._app.systemManager.getItem(MultiplayerClientSystem);
      if (multiplayerClientSystem) {
        multiplayerClientSystem.nextTargetLatency();
      }
    }
    if (this._app.systemManager.getItem(InputSystem).isKeyDownThisFrame(KeyCode.K)) {
      //Latency
      this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Click01.wav');

      const multiplayerClientSystem = this._app.systemManager.getItem(MultiplayerClientSystem);
      if (multiplayerClientSystem) {
        multiplayerClientSystem.nextTargetPacketLoss();
      }
    }
  }

  // Event Handlers -------------------------------

  public override onTick(ticker: PIXI.Ticker): void {
    super.onTick(ticker);

    // Only allow input if *this* window is in focus
    const htmlDomSystem = this._app.systemManager.getItem(HtmlDomSystem);
    if (!htmlDomSystem || !htmlDomSystem.isAppInFocus) {
      return;
    }

    this.handleInputForMovement(ticker);
    this.handleInputForOther(ticker);
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
      const myGixiAppData: ITreasureHunterData = this._app.configuration.data as ITreasureHunterData;

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

      if (collision instanceof Enemy) {
        this.takeDamage(this.healthDeltaPerEnemyHit);
      }
    });
  }
}
