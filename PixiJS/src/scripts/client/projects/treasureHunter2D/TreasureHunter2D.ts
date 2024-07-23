import * as PIXI from 'pixi.js';
import Stats from 'stats.js';
import { Actions } from 'pixi-actions';
import { GixiApplication, GixiApplicationConfiguration } from '../../gixi/GixiApplication';
import { Tilemap } from '../../gixi/tilemap/Tilemap';
import { InstructionsText } from '@src/scripts/client/projects/treasureHunter2D/ui/InstructionsText';
import { ScoreText } from '@src/scripts/client/projects/treasureHunter2D/ui/ScoreText';
import { Player } from '@src/scripts/client/projects/treasureHunter2D/Player';
import { TilemapItemFactoryCustom } from './tileMap/TilemapItemFactoryCustom';
import { Enemy } from './Enemy';
import { ITreasureHunterData } from '../../client';
import { TilemapCollisionSystem } from '../../gixi/systems/TilemapCollisionSystem';
import { DebugMarker } from '../../gixi/debugging/DebugMarker';
import { LocalDiskStorageSystem } from '../../gixi/systems/LocalDiskStorageSystem';



/**
 * The main game class
 * 
 */
export class TreasureHunter2D extends GixiApplication {

  // Events ---------------------------------------


  // Properties -----------------------------------
  get treasureHunterData(): ITreasureHunterData { return this._treasureHunterData; }

  // Fields ---------------------------------------
  private _stats: Stats;
  private _treasureHunterData: ITreasureHunterData;
  //
  private _scoreText!: ScoreText;
  private _instructionsText!: InstructionsText;
  private _player!: Player;
  private _tempScreenCenterpoint!: DebugMarker;
  private _tempWorldOrigin!: DebugMarker;
  private _tempMapOrigin!: DebugMarker;

  // Initialization -------------------------------
  constructor(configuration: GixiApplicationConfiguration) {
    super('pixi-application-canvas', configuration);
    this._treasureHunterData = configuration.data as ITreasureHunterData;

    this._stats = new Stats();
    this._stats.showPanel(0);
    this._stats.dom.className = 'stats-panel';
    document.body.appendChild(this._stats.dom);

    (globalThis as any).__PIXI_APP__ = this.app;

    this.addListener(GixiApplication.EVENT_INITIALIZE_COMPLETE, this.onInitializeCompleted.bind(this));
    this.addListener(GixiApplication.EVENT_INITIALIZE_ERROR, this.onInitializeError.bind(this));
  }

  // Methods ------------------------------
  private async onInitializeCompleted() {
    /////////////////////////////
    // Create Tilemap
    /////////////////////////////
    const tilemap = new Tilemap(
      this,
      this._treasureHunterData.tilemapDataUrl,
      new TilemapItemFactoryCustom(this)
    );

    await tilemap.initializeAsync();
    this.addToViewport(tilemap);
    tilemap.x = this.getScreenCenterpoint().x - tilemap.width / 2;
    tilemap.y = this.getScreenCenterpoint().y - tilemap.height / 2;
    this.systemManager.getItem(TilemapCollisionSystem).setTilemap(tilemap);

    /////////////////////////////
    // DebugMarkers
    /////////////////////////////
    this._tempWorldOrigin = new DebugMarker(this, "World(0,0)");
    this.addToViewport(this._tempWorldOrigin);
    this._tempWorldOrigin.position = new PIXI.Point();

    this._tempScreenCenterpoint = new DebugMarker(this, "Screen(C,C)");
    this.addToViewport(this._tempScreenCenterpoint);
    this._tempScreenCenterpoint.position = this.getScreenCenterpoint();

    this._tempMapOrigin = new DebugMarker(this, "Tilemap(0,0)");
    this.addToViewport(this._tempMapOrigin);
    this._tempMapOrigin.position = tilemap.position;

    /////////////////////////////
    // Create Enemy
    /////////////////////////////
    const enemy = new Enemy(this, { textureUrl: this._treasureHunterData.enemyTextureUrl });
    this.addToViewport(enemy);
    enemy.position = this.configuration.data.enemySpawnpoint;

    /////////////////////////////
    // Create Player
    /////////////////////////////
    this._player = new Player(this, { textureUrl: this._treasureHunterData.playerTextureUrl });
    this.addToViewport(this._player);
    this._player.position = this.configuration.data.playerSpawnpoint;

    /////////////////////////////
    // Setup Camera
    /////////////////////////////
    this.viewport.follow(this._player, {
      speed: 1,
      acceleration: 1,
      radius: 20
    });


    /////////////////////////////
    // Local Disk Storage 
    /////////////////////////////
    const hasData: boolean =
      this.systemManager.getItem(LocalDiskStorageSystem).hasData("test");

    console.log("hasData: " + hasData);
    if (!hasData) {
      this.systemManager.getItem(LocalDiskStorageSystem).saveData("test", "fun");
    }
    else {
      const value = this.systemManager.getItem(LocalDiskStorageSystem).getData("test");
      console.log("value: " + value);
    }




    /////////////////////////////
    // Create Text
    /////////////////////////////
    const textStyle = new PIXI.TextStyle();
    textStyle.fontFamily = 'Arial';
    textStyle.fontSize = 40;
    textStyle.fill = '#ffffff';

    let instructions = `Arrows / WASD To Move\nEnter / Spacebar For Attack\nF For Fullscreen\nR For Restart\nM For Move Fast`;
    this._instructionsText = new InstructionsText(this, instructions, { textStyle: textStyle });
    this.addToStage(this._instructionsText);

    this._scoreText = new ScoreText(this, "Replace Later", { textStyle: textStyle });
    this.addToStage(this._scoreText);

    this.app.ticker.add((ticker) => {
      this._stats.begin();
      Actions.tick(ticker.deltaTime);
      this._stats.end();
    });

    this._treasureHunterData.coinsCollected.OnValueChanged.on(this.onRefreshScore.bind(this));
    this._treasureHunterData.coinsMax.OnValueChanged.on(this.onRefreshScore.bind(this));
    this.onRefreshScore();
  }

  private onRefreshScore() {
    this._scoreText.textString = `Coins ${this._treasureHunterData.coinsCollected.Value}/${this._treasureHunterData.coinsMax.Value}`;
    if (this._treasureHunterData.coinsCollected.Value >= this._treasureHunterData.coinsMax.Value) {
      this.reload();
    }
  }

  // Event Handlers -------------------------------
  private onInitializeError(error: Error): void {
    console.error(`PIXI.Application.init() failed. error = ${error}`);
  }
}
