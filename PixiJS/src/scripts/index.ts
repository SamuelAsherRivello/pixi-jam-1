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
  SCREEN_UI_MARGIN_X: 10,
  SCREEN_UI_MARGIN_Y: 10,
};

let player: Player;
let tempPlayer: PIXI.Graphics;
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
  // TODO: Replace with player sprite
  /////////////////////////////
  PIXI.Assets.load([superAppData.PLAYER_SPRITE_URL]).then(() => {
    const myTexture = PIXI.Texture.from(superAppData.PLAYER_SPRITE_URL);
    player = new Player(superApp, myTexture);
    superApp.addToViewport(player);

  }).catch((error) => {
    /////////////////////////////
    // Handle any errors 
    /////////////////////////////
    console.error(`PIXI.Assets.load() failed. error = ${error}`);
  });

  tempPlayer = new PIXI.Graphics()
    .rect(0, 0, 32, 32)
    .fill({
      color: 0x0000ff,
      alpha: 0.5
    });
  tempPlayer.x = superApp.getScreenCenterpoint().x;
  tempPlayer.y = superApp.getScreenCenterpoint().y;
  superApp.addToViewport(tempPlayer);


  /////////////////////////////
  // Setup Camera
  /////////////////////////////
  superApp.viewport.follow(tempPlayer, {
    speed: .25,
    acceleration: .001,
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
    new InstructionsSuperText(superApp, 'Arrows/WASD To Move' + superApp.app.renderer.resolution, 30, "left");
  superApp.addToStage(instructionsText);

  const scoreText: ScoreSuperText =
    new ScoreSuperText(superApp, 'Treasure 0/3', 30, "right");
  superApp.addToStage(scoreText);


  /////////////////////////////
  // Update Systems Every Frame
  /////////////////////////////
  superApp.app.ticker.add((ticker) => {

    stats.begin();
    tempPlayer.x -= .1;
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
