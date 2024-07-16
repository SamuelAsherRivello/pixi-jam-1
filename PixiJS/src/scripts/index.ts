//PIXI
import * as PIXI from 'pixi.js';
import Stats from 'stats.js';

//CORE
import { SuperApp } from '@src/scripts/library/core/SuperApp';
import { InstructionsText } from '@src/scripts/library/core/InstructionsText';
import { SuperTilemap } from '@src/scripts/library/core/SuperTilemap';

//GAME
//import { Blah } from '@src/scripts/library/treasureHunter2D/blah';


//TEMP
import { LogoSuperSprite } from '@src/scripts/LogoSuperSprite';


/////////////////////////////
// PIXI Configuration
/////////////////////////////
PIXI.AbstractRenderer.defaultOptions.roundPixels = true; // Crisp pixels
PIXI.AbstractRenderer.defaultOptions.resolution = window.devicePixelRatio || 1; // Crisp pixels


/////////////////////////////
// Project Configuration
/////////////////////////////
const LOGO_IMAGE_URL: string = 'assets/images/pixijs-logo-32x32.png';
const TILE_MAP_DATA: string = 'assets/tilemaps/TreasureHunter2D.tmj';


/////////////////////////////
// Create App
/////////////////////////////
const superAppConst = new SuperApp(1920, 1080, 'pixi-application-canvas');
let myLogoSuperSprite: LogoSuperSprite;


/////////////////////////////
// Setup Stats
/////////////////////////////
const stats = new Stats();
stats.showPanel(0);
stats.dom.className = 'stats-panel2';
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
    new SuperTilemap(superApp, TILE_MAP_DATA);
  superApp.addToStage(superTilemap);


  /////////////////////////////
  // Update Systems Every Frame
  /////////////////////////////
  superApp.app.ticker.add((ticker) => {
    stats.begin();
    stats.end();
  });


  /////////////////////////////
  // Create Instruction Text
  /////////////////////////////
  const instructionsText = new InstructionsText('Click Sprite For Filters');
  instructionsText.x = 2;
  instructionsText.y = stats.dom.clientHeight - 15;
  superApp.addToStage(instructionsText);


  /////////////////////////////
  // Load an image asset
  /////////////////////////////
  PIXI.Assets.load([LOGO_IMAGE_URL]).then(() => {

    const myTexture = PIXI.Texture.from(LOGO_IMAGE_URL);
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
