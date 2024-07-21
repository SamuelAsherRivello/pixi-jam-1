//PIXI
import * as PIXI from 'pixi.js';
import Stats from 'stats.js';
import { Actions, Interpolations } from 'pixi-actions';
import { GixiApplication, GixiApplicationConfiguration } from './gixi/GixiApplication';
import { Tilemap } from './gixi/tilemap/Tilemap';

//TREASURE HUNTER 2D
import { InstructionsSuperText } from '@src/scripts/client/projects/treasureHunter2D/ui/InstructionsSuperText';
import { ScoreSuperText } from '@src/scripts/client/projects/treasureHunter2D/ui/ScoreSuperText';
import { Player } from '@src/scripts/client/projects/treasureHunter2D/Player';
import { TilemapItemFactoryCustom } from './projects/treasureHunter2D/tileMap/TilemapItemFactoryCustom';
import { Observable } from './core/observables/Observable';


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
  coinsCollected: Observable<number>;
  coinsMax: Observable<number>;
  screenUIMarginX: number;
  screenUIMarginY: number;
}

const treasureHunterData: ITreasurHunterData = {
  logoImageUrl: 'assets/images/pixijs-logo-32x32.png',
  tilemapDataUrl: 'assets/tilemaps/TreasureHunter2D.tmj',
  playerTextureUrl: 'assets/images/player-default-sprite.png',
  coinsCollected: new Observable<number>(0),
  coinsMax: new Observable<number>(0),
  screenUIMarginX: 10,
  screenUIMarginY: 10,
};

let scoreText: ScoreSuperText;
let instructionsText: InstructionsSuperText;
let player: Player;
let tempWorldOrigin: PIXI.Graphics;



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

  /////////////////////////////
  // Temp:  World centerpoint
  //        For reference
  /////////////////////////////
  tempWorldOrigin = new PIXI.Graphics()
    .rect(0, 0, 32, 32)
    .fill({
      color: 0xffffff,
      alpha: 0.5
    });
  gixiApp.addToViewport(tempWorldOrigin);
  tempWorldOrigin.x = gixiApp.getScreenCenterpoint().x;
  tempWorldOrigin.y = gixiApp.getScreenCenterpoint().y;


  /////////////////////////////
  // Create Player
  /////////////////////////////
  player = new Player(gixiApp, tilemap, { textureUrl: treasureHunterData.playerTextureUrl as string });
  gixiApp.addToViewport(player);
  player.x = gixiApp.getScreenCenterpoint().x;
  player.y = gixiApp.getScreenCenterpoint().y;



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
  instructionsText =
    new InstructionsSuperText(
      gixiApp,
      'SEE INSIDE CLASS',
      30,
      "left");
  gixiApp.addToStage(instructionsText);


  scoreText =
    new ScoreSuperText(
      gixiApp,
      `Coins ${gixiApp.configuration.data?.coinsCollected}/${gixiApp.configuration.data?.coinsMax}`,
      30,
      "right");
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


    scoreText.text = `Coins ${treasureHunterData.coinsCollected.Value}/${treasureHunterData.coinsMax.Value}`;

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
