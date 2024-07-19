//PIXI
import * as PIXI from 'pixi.js';
import Stats from 'stats.js';
import { Actions, Interpolations } from 'pixi-actions';

//CORE

//TREASURE HUNTER GAME
import { InstructionsSuperText } from '@src/scripts/library/treasureHunter2D/ui/InstructionsSuperText';
import { ScoreSuperText } from '@src/scripts/library/treasureHunter2D/ui/ScoreSuperText';
import { Player } from '@src/scripts/library/treasureHunter2D/Player';
import { GIXI } from './library/gixi';
import { GixiApplication, GixiApplicationConfiguration } from './library/gixi/GixiApplication';
import { CoinTilemapObject } from './library/treasureHunter2D/tileMap/tileMapObjects/CoinTilemapObject';
import { TilemapItemFactoryCustom } from './library/treasureHunter2D/tileMap/TilemapItemFactoryCustom';



/////////////////////////////
// PIXI Configuration
/////////////////////////////
PIXI.AbstractRenderer.defaultOptions.roundPixels = true; // Crisp pixels
PIXI.AbstractRenderer.defaultOptions.resolution = window.devicePixelRatio || 1; // Crisp pixels


/////////////////////////////
// Project Configuration
/////////////////////////////
const gixiAppData: any = {
  LogoImageUrl: 'assets/images/pixijs-logo-32x32.png',
  TilemapDataUrl: 'assets/tilemaps/TreasureHunter2D.tmj',
  PlayerTextureUrl: 'assets/images/player-default-sprite.png',
  CoinsCollected: 0,
  CoinsMax: 5,
  ScreenUIMarginX: 10,
  ScreenUIMarginY: 10,
};

let player: Player;
let coin: CoinTilemapObject;
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
  data: gixiAppData
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
  const Tilemap = new GIXI.Tilemap(
    gixiApp,
    gixiAppData.TilemapDataUrl,
    new TilemapItemFactoryCustom(gixiApp)
  );

  //Initialize first, so width and height are available
  await Tilemap.initializeAsync();
  gixiApp.addToViewport(Tilemap);
  Tilemap.x = gixiApp.getScreenCenterpoint().x - Tilemap.width / 2;
  Tilemap.y = gixiApp.getScreenCenterpoint().y - Tilemap.height / 2;

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
  player = new Player(gixiApp, Tilemap, { textureUrl: gixiAppData.PlayerTextureUrl as string });
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
  const instructionsText: InstructionsSuperText =
    new InstructionsSuperText(
      gixiApp,
      'SEE INSIDE CLASS',
      30,
      "left");
  gixiApp.addToStage(instructionsText);

  const scoreText: ScoreSuperText =
    new ScoreSuperText(
      gixiApp,
      `Coins ${gixiApp.configuration.data?.CoinsCollected}/${gixiApp.configuration.data?.CoinsMax}`,
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
