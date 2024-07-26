import * as PIXI from 'pixi.js';
import Stats from 'stats.js';
import { Actions } from 'pixi-actions';
import { GixiApplication, GixiApplicationConfiguration } from '../../gixi/GixiApplication';
import { Tilemap } from '../../gixi/tilemap/Tilemap';
import { InstructionsText } from '@client/projects/treasureHunter2D/ui/InstructionsText';
import { ScoreText } from '@client/projects/treasureHunter2D/ui/ScoreText';
import { Player } from '@client/projects/treasureHunter2D/Player';
import { TilemapItemFactoryCustom } from './tileMap/TilemapItemFactoryCustom';
import { ITreasureHunterData } from '../../client';
import { TilemapCollisionSystem } from '../../gixi/systems/TilemapCollisionSystem';
import { DebugMarker } from '../../gixi/debugging/DebugMarker';
import { LocalDiskStorageSystem } from '../../gixi/systems/LocalDiskStorageSystem';
import { GixiUtility } from '../../gixi/GixiUtility';
import { EnemySpawner, EnemySpawnerConfiguration } from './EnemySpawner';
import { PlayerGhost } from './PlayerGhost';
import { MultiplayerClientSystem } from '@client/gixi/systems/MultiplayerClientSystem/MultiplayerClientSystem';

/**
 * The main game class
 *
 */
export class TreasureHunter2D extends GixiApplication {
  // Events ---------------------------------------

  // Properties -----------------------------------
  get treasureHunterData(): ITreasureHunterData {
    return this._treasureHunterData;
  }

  // Fields ---------------------------------------
  private _stats: Stats;
  private _treasureHunterData: ITreasureHunterData;
  //
  private _scoreText!: ScoreText;
  private _instructionsText!: InstructionsText;
  private _player!: Player;
  private screenDebugMarker!: DebugMarker;
  private worldDebugMarker!: DebugMarker;
  private tilemapDebugMarker!: DebugMarker;
  private _stageDebugMarker!: DebugMarker;

  // Initialization -------------------------------
  constructor(configuration: GixiApplicationConfiguration) {
    super(configuration);
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
    const tilemap = new Tilemap(this, this._treasureHunterData.tilemapDataUrl, new TilemapItemFactoryCustom(this));

    await tilemap.initializeAsync();
    this.addToViewport(tilemap);
    tilemap.x = this.getScreenCenterpoint().x - tilemap.width / 2;
    tilemap.y = this.getScreenCenterpoint().y - tilemap.height / 2;
    this.systemManager.getItem(TilemapCollisionSystem).setTilemap(tilemap);

    /////////////////////////////
    // DebugMarkers
    /////////////////////////////

    // NOTE: Relative - Depends on the size of your browser at the moment of application starting
    this.screenDebugMarker = new DebugMarker(this, 'Screen(C,C) - Relative');
    this.addToViewport(this.screenDebugMarker);
    this.screenDebugMarker.position = this.getScreenCenterpoint();

    // NOTE: Absolute
    this.worldDebugMarker = new DebugMarker(this, 'World(0,0)');
    this.addToViewport(this.worldDebugMarker);
    this.worldDebugMarker.position = new PIXI.Point();

    // NOTE: Absolute
    this.tilemapDebugMarker = new DebugMarker(this, 'Tilemap(0,0)');
    this.addToViewport(this.tilemapDebugMarker);
    this.tilemapDebugMarker.position = tilemap.position;

    // NOTE: Absolute
    this._stageDebugMarker = new DebugMarker(this, 'Stage (0,0)');
    this.addToStage(this._stageDebugMarker);
    this._stageDebugMarker.position = new PIXI.Point();

    /////////////////////////////
    // Create Enemy Spawner
    /////////////////////////////
    const enemySpawnerConfiguration: EnemySpawnerConfiguration = {
      perEnemytextureUrl: this._treasureHunterData.enemyTextureUrl,
      timeBetweenSpawnsMS: 4000,
      enemySpawnerIsEnabled: false,
      maxToSpawn: 3,
      textureUrl: this._treasureHunterData.enemySpawnerTextureUrl,
      texture: PIXI.Texture.EMPTY,
      canCollisionCheck: false,
      isTickable: true,
      isResizable: false,
    };
    const enemySpawner = new EnemySpawner(this, enemySpawnerConfiguration);
    this.addToViewport(enemySpawner);
    enemySpawner.position = this.configuration.data.enemySpawnerSpawnpoint;

    /////////////////////////////
    // Create Player
    /////////////////////////////
    this._player = new Player(this, {
      textureUrl: this._treasureHunterData.playerTextureUrl,
    });
    this.addToViewport(this._player);
    this._player.position = this.configuration.data.playerSpawnpoint;

    /////////////////////////////
    // Create Temp Ghost To Follow Player Using Multiplayer latency
    /////////////////////////////
    const playerGhost = new PlayerGhost(this, {
      textureUrl: this._treasureHunterData.playerGhostTextureUrl,
    });
    this.addToStage(playerGhost);
    playerGhost.position = this._player.position;

    /////////////////////////////
    // Setup Camera
    /////////////////////////////
    this.viewport.follow(this._player, {
      speed: 1,
      acceleration: 1,
      radius: 500,
    });

    /////////////////////////////
    // Local Disk Storage
    /////////////////////////////
    const hasData: boolean = this.systemManager.getItem(LocalDiskStorageSystem).hasData('timeElapsedBest');

    if (hasData) {
      const timeElapsedBest = this.systemManager.getItem(LocalDiskStorageSystem).getData<number>('timeElapsedBest');
      this._treasureHunterData.timeElapsedBest.Value = timeElapsedBest;
    }

    /////////////////////////////
    // Create Text - Instructions
    /////////////////////////////
    const instructionsTextStyle = new PIXI.TextStyle();
    instructionsTextStyle.fontFamily = 'Arial';
    instructionsTextStyle.fontSize = 40;
    instructionsTextStyle.fill = '#ffffff';
    instructionsTextStyle.align = 'left';
    //
    let instructionsString = 'see onRefreshUI';
    this._instructionsText = new InstructionsText(this, instructionsString, {
      textStyle: instructionsTextStyle,
    });
    this.addToStage(this._instructionsText);

    /////////////////////////////
    // Create Text - Score
    /////////////////////////////
    const scoreTextStyle = new PIXI.TextStyle();
    scoreTextStyle.fontFamily = 'Arial';
    scoreTextStyle.fontSize = 40;
    scoreTextStyle.fill = '#ffffff';
    scoreTextStyle.align = 'right';
    //
    let scoreString = 'see onRefreshUI';
    this._scoreText = new ScoreText(this, scoreString, {
      textStyle: scoreTextStyle,
    });
    this.addToStage(this._scoreText);

    /////////////////////////////
    // Setup Ticker
    /////////////////////////////
    this.app.ticker.add((ticker) => {
      this._stats.begin();
      Actions.tick(ticker.deltaTime);
      this._treasureHunterData.timeElapsed.Value = Math.floor(ticker.lastTime / 1000);
      this._stats.end();
    });

    /////////////////////////////
    // Events
    /////////////////////////////
    this._treasureHunterData.coinsCollected.OnValueChanged.on(this.CoinsCollected_OnValueChanged.bind(this));
    //
    this._treasureHunterData.coinsMax.OnValueChanged.on(this.onRefreshUI.bind(this));
    this._treasureHunterData.health.OnValueChanged.on(this.onRefreshUI.bind(this));
    this._treasureHunterData.timeElapsed.OnValueChanged.on(this.onRefreshUI.bind(this));
    this._treasureHunterData.timeElapsedBest.OnValueChanged.on(this.onRefreshUI.bind(this));
    this.onRefreshUI();
  }

  /////////////////////////////
  // Event Handlers
  /////////////////////////////
  private CoinsCollected_OnValueChanged() {
    this.onRefreshUI();

    console.log(this._treasureHunterData.coinsCollected.Value);
    if (this._treasureHunterData.coinsCollected.Value >= this._treasureHunterData.coinsMax.Value) {
      this.systemManager.getItem(LocalDiskStorageSystem).saveData('timeElapsedBest', this._treasureHunterData.timeElapsed.Value);
      this.reload();
    }
  }

  private onRefreshUI() {
    const coinsCollected: string = GixiUtility.FormatNumber(this._treasureHunterData.coinsCollected.Value, 2);
    const coinsMax: string = GixiUtility.FormatNumber(this._treasureHunterData.coinsMax.Value, 2);
    const timeElapsed: string = GixiUtility.FormatNumber(Math.round(this._treasureHunterData.timeElapsed.Value), 4);
    const timeElapsedBest: string = GixiUtility.FormatNumber(Math.round(this._treasureHunterData.timeElapsedBest.Value), 4);
    const health: string = GixiUtility.FormatNumber(Math.round(this._treasureHunterData.health.Value), 4);

    let textString = '';
    textString += `Best Time ${timeElapsedBest}\n`;
    textString += `Time ${timeElapsed}\n`;
    textString += `Coins ${coinsCollected}/${coinsMax}\n`;
    textString += `Health ${health}\n`;
    this._scoreText.textString = textString;

    let latencyString = '';
    let packetLossString = '';
    const multiplayerClientSystem = this.systemManager.getItem(MultiplayerClientSystem);
    if (multiplayerClientSystem && multiplayerClientSystem.isConnected) {
      latencyString = `L for Latency (${multiplayerClientSystem.targetLatencyMS})\n`;
      packetLossString = `K for Packet Loss (${multiplayerClientSystem.targetPacketLoss})\n`;
    }

    let instructionsString = '';
    instructionsString += 'WASD/Arrows To Walk\n';
    instructionsString += 'Spacebar To Attack\n';
    instructionsString += 'Shift To Run\n';
    instructionsString += 'P To Pause (Broken)\n';
    instructionsString += 'O For Clear Data\n';
    instructionsString += 'F For Fullscreen\n';
    instructionsString += 'R For Restart\n';
    instructionsString += latencyString;
    instructionsString += packetLossString;

    this._instructionsText.textString = instructionsString;
  }

  // Event Handlers -------------------------------
  private onInitializeError(error: Error): void {
    console.error(`PIXI.Application.init() failed. error = ${error}`);
  }
}
