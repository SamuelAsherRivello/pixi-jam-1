//PIXI
import * as PIXI from 'pixi.js';
import Stats from 'stats.js';
import { Actions, Interpolations } from 'pixi-actions';

//CORE

//TREASURE HUNTER GAME
import { InstructionsSuperText } from '@src/scripts/library/treasureHunter2D/ui/InstructionsSuperText';
import { ScoreSuperText } from '@src/scripts/library/treasureHunter2D/ui/ScoreSuperText';
import { Player } from '@src/scripts/library/treasureHunter2D/Player';
import { Coin } from './library/treasureHunter2D/objects/Coin';
import { GIXI } from './library/core/gixi';
import { TilemapItemFactoryCustom } from './library/treasureHunter2D/TilemapItemFactoryCustom';
import { GixiApplication, GixiApplicationConfiguration } from './library/core/gixi/GixiApplication';



/////////////////////////////
// PIXI Configuration
/////////////////////////////
PIXI.AbstractRenderer.defaultOptions.roundPixels = true; // Crisp pixels
PIXI.AbstractRenderer.defaultOptions.resolution = window.devicePixelRatio || 1; // Crisp pixels


/////////////////////////////
// Project Configuration
/////////////////////////////
const superAppData: any = {
  LogoImageUrl: 'assets/images/pixijs-logo-32x32.png',
  TilemapDataUrl: 'assets/tilemaps/TreasureHunter2D.tmj',
  PlayerTextureUrl: 'assets/images/player-default-sprite.png',
  CoinTextureUrl: 'assets/images/OpenGameArt/Coin.png',
  CoinsCollected: 0,
  CoinsMax: 5,
  ScreenUIMarginX: 10,
  ScreenUIMarginY: 10,
};

let player: Player;
let coin: Coin;
let tempWorldOrigin: PIXI.Graphics;


/////////////////////////////
// Create App
/////////////////////////////
const superAppConfiguration: GixiApplicationConfiguration = {

  //Show all values here, for readability
  widthInitial: 1920,
  heightInitial: 1080,
  backgroundColor: 0x87867a,
  data: superAppData
}
const superAppConst = new GixiApplication('pixi-application-canvas', superAppConfiguration);


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
(globalThis as any).__PIXI_APP__ = superAppConst.app;


/////////////////////////////
// Handle App Initialize
/////////////////////////////
async function onInitializeCompleted(superApp: GixiApplication) {



  /////////////////////////////
  // Create Tilemap
  /////////////////////////////
  const Tilemap = new GIXI.Tilemap(
    superApp,
    superAppData.TilemapDataUrl,
    new TilemapItemFactoryCustom(superApp)
  );

  //Initialize first, so width and height are available
  await Tilemap.initializeAsync();
  superApp.addToViewport(Tilemap);
  Tilemap.x = superApp.getScreenCenterpoint().x - Tilemap.width / 2;
  Tilemap.y = superApp.getScreenCenterpoint().y - Tilemap.height / 2;

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
  superApp.addToViewport(tempWorldOrigin);
  tempWorldOrigin.x = superApp.getScreenCenterpoint().x;
  tempWorldOrigin.y = superApp.getScreenCenterpoint().y;



  /////////////////////////////
  // Create Coin
  /////////////////////////////
  for (let i = 0; i < superAppData.CoinsMax; i++) {
    coin = new Coin(superApp);
    superApp.addToViewport(coin);
    coin.x = superApp.getScreenCenterpoint().x - 132 + 32 * i * 2;
    coin.y = superApp.getScreenCenterpoint().y - 100;

  }


  /////////////////////////////
  // Create Player
  /////////////////////////////
  player = new Player(superApp, Tilemap, { textureUrl: superAppData.PlayerTextureUrl as string });
  superApp.addToViewport(player);
  player.x = superApp.getScreenCenterpoint().x;
  player.y = superApp.getScreenCenterpoint().y;



  /////////////////////////////
  // Setup Camera
  /////////////////////////////
  superApp.viewport.follow(player, {
    speed: 1,
    acceleration: .01,
    radius: 20
  });

  // Optional: Input for camera
  // superApp.viewport
  //   .drag()
  //   .pinch()
  //   .wheel()
  //   .decelerate();


  /////////////////////////////
  // Create Text
  /////////////////////////////
  const instructionsText: InstructionsSuperText =
    new InstructionsSuperText(
      superApp,
      'Arrows/WASD To Move' + superApp.app.renderer.resolution,
      30,
      "left");
  superApp.addToStage(instructionsText);

  const scoreText: ScoreSuperText =
    new ScoreSuperText(
      superApp,
      `Coins ${superApp.configuration.data?.CoinsCollected}/${superApp.configuration.data?.CoinsMax}`,
      30,
      "right");
  superApp.addToStage(scoreText);

  /////////////////////////////
  // Update Systems Every Frame
  /////////////////////////////
  superApp.app.ticker.add((ticker) => {

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
superAppConst.addListener(GixiApplication.EVENT_INITIALIZE_COMPLETE, onInitializeCompleted);
superAppConst.addListener(GixiApplication.EVENT_INITIALIZE_ERROR, onInitializeError);


(async () => {
  await superAppConst.initializeAsync();
})();
