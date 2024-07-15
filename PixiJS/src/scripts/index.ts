import * as PIXI from 'pixi.js';
import { SuperApp } from '@src/scripts/library/core/SuperApp';
import { FlowerSuperSprite } from './FlowerSuperSprite';
import Stats from 'stats.js';
import { InstructionsText } from './library/core/InstructionsText';

/////////////////////////////
// PIXI Configuration
/////////////////////////////
PIXI.AbstractRenderer.defaultOptions.roundPixels = true; // Crisp pixels
PIXI.AbstractRenderer.defaultOptions.resolution = window.devicePixelRatio || 1; // Crisp pixels

/////////////////////////////
// Project Configuration
/////////////////////////////
const FLOWER_IMAGE_URL: string = 'assets/images/pixijs-flower-400x400.png';


/////////////////////////////
// Create App
/////////////////////////////
const superAppConst = new SuperApp(1920, 1080, 'pixi-application-canvas');
let myFlowerSuperSprite: FlowerSuperSprite;


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
function onInitializeCompleted(superApp: SuperApp) {


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
  PIXI.Assets.load([FLOWER_IMAGE_URL]).then(() => {
    const myTexture = PIXI.Texture.from(FLOWER_IMAGE_URL);
    myFlowerSuperSprite = new FlowerSuperSprite(superApp, myTexture);
    superApp.addToStage(myFlowerSuperSprite);
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
