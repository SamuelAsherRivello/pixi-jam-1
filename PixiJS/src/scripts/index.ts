//PIXI
import * as PIXI from 'pixi.js';
import Stats from 'stats.js';

//CORE
import { SuperApp } from '@src/scripts/library/core/SuperApp';
import { SuperTilemap } from '@src/scripts/library/core/SuperTilemap';

//GAME
//import { Blah } from '@src/scripts/library/treasureHunter2D/blah';


//TEMP
import { LogoSuperSprite } from '@src/scripts/LogoSuperSprite';
import { InstructionsSuperText } from './library/treasureHunter2D/InstructionsSuperText';
import { ScoreSuperText } from './library/treasureHunter2D/ScoreSuperText';



/////////////////////////////
// PIXI Configuration
/////////////////////////////
PIXI.AbstractRenderer.defaultOptions.roundPixels = true; // Crisp pixels
PIXI.AbstractRenderer.defaultOptions.resolution = window.devicePixelRatio || 1; // Crisp pixels


/////////////////////////////
// Project Configuration
/////////////////////////////
const superAppData = {
  LOGO_IMAGE_URL: 'assets/images/pixijs-logo-32x32.png',
  TILE_MAP_DATA: 'assets/tilemaps/TreasureHunter2D.tmj',
  UI_MARGIN_X: 10,
  UI_MARGIN_Y: 10,
};


/////////////////////////////
// Create App
/////////////////////////////
const superAppConst = new SuperApp('pixi-application-canvas', 1920, 1080, superAppData);
let myLogoSuperSprite: LogoSuperSprite;


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
  const superTilemap =
    new SuperTilemap(superApp, superAppData.TILE_MAP_DATA);
  superApp.addToStage(superTilemap);


  /////////////////////////////
  // Update Systems Every Frame
  /////////////////////////////
  superApp.app.ticker.add((ticker) => {
    stats.begin();
    stats.end();
  });


  /////////////////////////////
  // Create Text
  /////////////////////////////
  const instructionsText: InstructionsSuperText =
    new InstructionsSuperText(superApp, 'Arrows/WASD To Move', 30, "left");
  superApp.addToStage(instructionsText);

  const scoreText: ScoreSuperText =
    new ScoreSuperText(superApp, 'Treasure 0/3', 30, "right");
  superApp.addToStage(scoreText);


  /////////////////////////////
  // Load an image asset
  /////////////////////////////
  PIXI.Assets.load([superAppData.LOGO_IMAGE_URL]).then(() => {

    const myTexture = PIXI.Texture.from(superAppData.LOGO_IMAGE_URL);
    myLogoSuperSprite = new LogoSuperSprite(superApp, myTexture);
    superApp.addToStage(myLogoSuperSprite);

  }).catch((error) => {

    /////////////////////////////
    // Handle any errors 
    /////////////////////////////
    console.error(`PIXI.Assets.load() failed. error = ${error}`);
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
