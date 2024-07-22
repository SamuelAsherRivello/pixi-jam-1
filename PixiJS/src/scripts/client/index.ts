//PIXI
import * as PIXI from 'pixi.js';
import Stats from 'stats.js';
import { Actions } from 'pixi-actions';
import { GixiApplication, GixiApplicationConfiguration } from './gixi/GixiApplication';
import { Tilemap } from './gixi/tilemap/Tilemap';

//TREASURE HUNTER 2D
import { InstructionsText } from '@src/scripts/client/projects/treasureHunter2D/ui/InstructionsText';
import { ScoreText } from '@src/scripts/client/projects/treasureHunter2D/ui/ScoreText';
import { Player } from '@src/scripts/client/projects/treasureHunter2D/Player';
import { TilemapItemFactoryCustom } from './projects/treasureHunter2D/tileMap/TilemapItemFactoryCustom';
import { Observable } from './core/observables/Observable';
import { DebugMarker } from './projects/treasureHunter2D/DebugMarker';
import { Enemy } from './projects/treasureHunter2D/Enemy';


/////////////////////////////
// PIXI Configuration
/////////////////////////////
PIXI.AbstractRenderer.defaultOptions.roundPixels = true; // Crisp pixels
PIXI.AbstractRenderer.defaultOptions.resolution = window.devicePixelRatio || 2; // Crisp pixels


/////////////////////////////
// Project Configuration
/////////////////////////////
export interface ITreasurHunterData {
  logoImageUrl: string;
  tilemapDataUrl: string;
  playerTextureUrl: string;
  enemyTextureUrl: string;
  coinsCollected: Observable<number>;
  coinsMax: Observable<number>;
  screenUIMarginX: number;
  screenUIMarginY: number;
  playerSpawnpoint: PIXI.Point;
  enemySpawnpoint: PIXI.Point;
}

const treasureHunterData: ITreasurHunterData = {
  logoImageUrl: 'assets/images/pixijs-logo-32x32.png',
  tilemapDataUrl: 'assets/tilemaps/TreasureHunter2D.tmj',
  playerTextureUrl: 'assets/images/player-default-sprite.png',
  enemyTextureUrl: 'assets/images/enemy-default-sprite.png',
  coinsCollected: new Observable<number>(0),
  coinsMax: new Observable<number>(0),
  screenUIMarginX: 10,
  screenUIMarginY: 10,
  playerSpawnpoint: new PIXI.Point(0, 0), //Will be set by tilemap
  enemySpawnpoint: new PIXI.Point(0, 0), //Will be set by tilemap
};

let scoreText: ScoreText;
let instructionsText: InstructionsText;
let player: Player;
let tempScreenCenterpoint: DebugMarker
let tempWorldOrigin: DebugMarker
let tempMapOrigin: DebugMarker


/////////////////////////////
// Create App
/////////////////////////////
const gixiAppConfiguration: GixiApplicationConfiguration = {

  //Show all values here, for readability
  //Or simply use GixiApplicationConfigurationDefault
  widthInitial: 1920,
  heightInitial: 1080,
  minFPS: 1,
  maxFPS: 240,
  backgroundColor: 0x87867a,

  //TODO: Maybe consider to change
  //1. From   0-1 data storage like     GixiApp.configuration.data...
  //2. To     0-n model storage like    GixiApp.modelLocator.GetItem<TreasurHunterModel>(treasurHunterModel);
  data: treasureHunterData
}
const gixiAppConst = new GixiApplication('pixi-application-canvas', gixiAppConfiguration);


/////////////////////////////
// Setup Stats
/////////////////////////////
const stats = new Stats();
stats.showPanel(0);
stats.dom.className = 'stats-panel';
document.body.appendChild(stats.dom);


/////////////////////////////
// Setup Pixi JS DevTools
// https://bit.ly/pixijs-devtools
/////////////////////////////
(globalThis as any).__PIXI_APP__ = gixiAppConst.app;


/////////////////////////////
// Handle App Initialize
/////////////////////////////
async function onInitializeCompleted(gixiApp: GixiApplication) {

  /////////////////////////////
  // Create Tilemap
  /////////////////////////////
  const tilemap = new Tilemap(
    gixiApp,
    treasureHunterData.tilemapDataUrl,
    new TilemapItemFactoryCustom(gixiApp)
  );

  //Initialize first, so width and height are available
  await tilemap.initializeAsync();
  gixiApp.addToViewport(tilemap);
  tilemap.x = gixiApp.getScreenCenterpoint().x - tilemap.width / 2;
  tilemap.y = gixiApp.getScreenCenterpoint().y - tilemap.height / 2;

  //Add tilemap to system. One of (the only?) systems that has lazy dependencies. ok?
  //TODO: maybe replace with gixiApp.systems.AddSystem<ITilemapCollisionSystem>(new Blah())
  gixiApp.systems.tilemapCollisionSystem.setTilemap(tilemap);

  /////////////////////////////
  // DebugMarkers
  /////////////////////////////
  tempWorldOrigin = new DebugMarker(gixiApp, "World(0,0)");
  gixiApp.addToViewport(tempWorldOrigin); //NOTE: addToViewpoint vs addToStage?
  tempWorldOrigin.position = new PIXI.Point();

  tempScreenCenterpoint = new DebugMarker(gixiApp, "Screen(C,C)");
  gixiApp.addToViewport(tempScreenCenterpoint); //NOTE: addToViewpoint vs addToStage?
  tempScreenCenterpoint.position = gixiApp.getScreenCenterpoint();

  tempMapOrigin = new DebugMarker(gixiApp, "Tilemap(0,0)");
  gixiApp.addToViewport(tempMapOrigin); //NOTE: addToViewpoint vs addToStage?
  tempMapOrigin.position = tilemap.position;


  /////////////////////////////
  // Create Enemy
  /////////////////////////////
  const enemy = new Enemy(gixiApp, { textureUrl: treasureHunterData.enemyTextureUrl });
  gixiApp.addToViewport(enemy);
  enemy.position = gixiApp.configuration.data.enemySpawnpoint;


  /////////////////////////////
  // Create Player
  /////////////////////////////
  player = new Player(gixiApp, { textureUrl: treasureHunterData.playerTextureUrl });
  gixiApp.addToViewport(player);
  player.position = gixiApp.configuration.data.playerSpawnpoint;


  /////////////////////////////
  // Setup Camera
  /////////////////////////////
  gixiApp.viewport.follow(player, {

    //TODO: find the settings that work VERY smoothly at fullsceen
    //its close, now.  But not perfect
    speed: 1,
    acceleration: 1,
    radius: 20
  });

  // Optional: Input for camera
  // app.viewport
  //   .drag()
  //   .pinch()
  //   .wheel()
  //   .decelerate();


  /////////////////////////////
  // Create Text
  /////////////////////////////

  const textStyle = new PIXI.TextStyle();
  textStyle.fontFamily = 'Arial';
  textStyle.fontSize = 40;
  textStyle.fill = '#ffffff';

  //See in class for : text/position
  let instructions = `Arrows / WASD To Move\nEnter / Spacebar For Attack\nF For Fullscreen\nR For Restart\nM For Move Fast`;
  instructionsText = new InstructionsText(gixiApp, instructions, { textStyle: textStyle });
  gixiApp.addToStage(instructionsText);

  //See in class for : text/position
  scoreText = new ScoreText(gixiApp, "Replace Later", { textStyle: textStyle });
  gixiApp.addToStage(scoreText);



  /////////////////////////////
  // Update Systems Every Frame
  /////////////////////////////
  gixiApp.app.ticker.add((ticker) => {

    stats.begin();
    Actions.tick(ticker.deltaTime);
    stats.end();
  });


  /////////////////////////////
  // Setup Gameplay
  /////////////////////////////
  function onRefreshScore() {

    scoreText.textString = `Coins ${treasureHunterData.coinsCollected.Value}/${treasureHunterData.coinsMax.Value}`;

    //Strong typing is optional, but recommended
    const myGixiAppData: ITreasurHunterData =
      (gixiApp.configuration.data as ITreasurHunterData);

    if (myGixiAppData.coinsCollected.Value >= myGixiAppData.coinsMax.Value) {
      gixiApp.reload();
    }
  }
  onRefreshScore();

  treasureHunterData.coinsCollected.OnValueChanged.on(onRefreshScore);
  treasureHunterData.coinsMax.OnValueChanged.on(onRefreshScore);



}


/////////////////////////////
// Handle App Error
/////////////////////////////
function onInitializeError(error: Error) {
  console.error(`PIXI.Application.init() failed. error = ${error}`);
}


/////////////////////////////
// Initialize App
/////////////////////////////
gixiAppConst.addListener(GixiApplication.EVENT_INITIALIZE_COMPLETE, onInitializeCompleted);
gixiAppConst.addListener(GixiApplication.EVENT_INITIALIZE_ERROR, onInitializeError);


(async () => {
  await gixiAppConst.initializeAsync();


})();
