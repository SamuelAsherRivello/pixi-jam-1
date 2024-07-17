//PIXI
import * as PIXI from 'pixi.js';
import Stats from 'stats.js';

//CORE
import { SuperApp, SuperAppConfiguration } from '@src/scripts/library/core/super/SuperApp';
import { SuperTilemap } from '@src/scripts/library/core/super/SuperTilemap';

//TREASURE HUNTER GAME
import { InstructionsSuperText } from '@src/scripts/library/treasureHunter2D/InstructionsSuperText';
import { ScoreSuperText } from '@src/scripts/library/treasureHunter2D/ScoreSuperText';
import { Player } from '@src/scripts/library/treasureHunter2D/Player';
import { Coin } from './library/treasureHunter2D/Coin';


/////////////////////////////
// PIXI Configuration
/////////////////////////////
PIXI.AbstractRenderer.defaultOptions.roundPixels = true; // Crisp pixels
PIXI.AbstractRenderer.defaultOptions.resolution = window.devicePixelRatio || 1; // Crisp pixels


/////////////////////////////
// Project Configuration
/////////////////////////////
const superAppData: any = {
  LOGO_IMAGE_URL: 'assets/images/pixijs-logo-32x32.png',
  TILE_MAP_DATA: 'assets/tilemaps/TreasureHunter2D.tmj',
  PLAYER_SPRITE_URL: 'assets/images/player-default-sprite.png',
  COIN_SPRITE_URL: 'assets/images/OpenGameArt/Coin.png',
  COINS_COLLECTED: 0,
  COINS_MAX: 10,
  SCREEN_UI_MARGIN_X: 10,
  SCREEN_UI_MARGIN_Y: 10,
};

let player: Player;
let coin: Coin;
let tempWorldOrigin: PIXI.Graphics;


/////////////////////////////
// Create App
/////////////////////////////
const superAppConfiguration: SuperAppConfiguration = {
  widthInitial: 1920,
  heightInitial: 1080,
  data: superAppData
}
const superAppConst = new SuperApp('pixi-application-canvas', superAppConfiguration);


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
async function onInitializeCompleted(superApp: SuperApp) {


  /////////////////////////////
  // Create Tilemap
  /////////////////////////////
  const superTilemap = new SuperTilemap(superApp, superAppData.TILE_MAP_DATA);
  await superTilemap.init();
  superApp.addToViewport(superTilemap);
  superTilemap.x = superApp.getScreenCenterpoint().x - superTilemap.width / 2;
  superTilemap.y = superApp.getScreenCenterpoint().y - superTilemap.height / 2;

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
  tempWorldOrigin.x = superApp.getScreenCenterpoint().x;
  tempWorldOrigin.y = superApp.getScreenCenterpoint().y;
  superApp.addToViewport(tempWorldOrigin);


  /////////////////////////////
  // Create Coin
  /////////////////////////////
  for (let i = 0; i < superAppData.COINS_MAX; i++) {
    coin = new Coin(superApp, superAppData.COIN_SPRITE_URL);
    coin.x = superApp.getScreenCenterpoint().x + 100 + 32 * i * 2;
    coin.y = superApp.getScreenCenterpoint().y;
    superApp.addToViewport(coin);
  }


  /////////////////////////////
  // Create Player
  /////////////////////////////
  await PIXI.Assets.load([superAppData.PLAYER_SPRITE_URL]);
  const playerTexture = PIXI.Texture.from(superAppData.PLAYER_SPRITE_URL);
  player = new Player(superApp, playerTexture);
  player.x = superApp.getScreenCenterpoint().x;
  player.y = superApp.getScreenCenterpoint().y;
  superApp.addToViewport(player);


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
      `Coins ${superApp.configuration.data.COINS_COLLECTED}/${superApp.configuration.data.COINS_MAX}`,
      30,
      "right");
  superApp.addToStage(scoreText);

  /////////////////////////////
  // Update Systems Every Frame
  /////////////////////////////
  superApp.app.ticker.add((ticker) => {

    stats.begin();
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
superAppConst.addListener(SuperApp.EVENT_INITIALIZE_COMPLETE, onInitializeCompleted);
superAppConst.addListener(SuperApp.EVENT_INITIALIZE_ERROR, onInitializeError);


(async () => {
  await superAppConst.init();
})();
