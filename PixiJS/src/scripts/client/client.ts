import { Observable } from './core/observables/Observable';
import { GixiApplicationConfiguration } from './gixi/GixiApplication';
import { SystemManagerDefault } from './gixi/systemManager/SystemManagerDefault';
import { TreasureHunter2D } from './projects/treasureHunter2D/TreasureHunter2D';
import * as PIXI from 'pixi.js';

/////////////////////////////
// Debugging
/////////////////////////////
const isDebugMap = false;
let tilemapDataUrl = 'assets/tilemaps/TreasureHunter2D.tmj';
if (isDebugMap) {
  tilemapDataUrl = 'assets/tilemaps/TreasureHunter2D_TestSmallerMap.tmj';
}

/////////////////////////////
// Application Data
/////////////////////////////
export interface ITreasureHunterData {
  logoImageUrl: string;
  tilemapDataUrl: string;
  playerTextureUrl: string;
  playerGhostTextureUrl: string;
  enemySpawnerIsEnabled: boolean;
  enemySpawnerTextureUrl: string;
  enemyTextureUrl: string;
  coinsCollected: Observable<number>;
  coinsMax: Observable<number>;
  timeElapsed: Observable<number>;
  timeElapsedBest: Observable<number>;
  health: Observable<number>;
  screenUIMarginX: number;
  screenUIMarginY: number;
  playerSpawnpoint: PIXI.Point;
  enemySpawnerSpawnpoint: PIXI.Point;
}

const treasureHunterData: ITreasureHunterData = {
  logoImageUrl: 'assets/images/pixijs-logo-32x32.png',
  tilemapDataUrl: tilemapDataUrl,
  playerTextureUrl: 'assets/images/player.png',
  playerGhostTextureUrl: 'assets/images/player-ghost.png',
  enemySpawnerIsEnabled: false,
  enemySpawnerTextureUrl: 'assets/images/enemy-spawner.png',
  enemyTextureUrl: 'assets/images/enemy.png',
  coinsCollected: new Observable<number>(0),
  coinsMax: new Observable<number>(0),
  timeElapsed: new Observable<number>(0),
  timeElapsedBest: new Observable<number>(0),
  health: new Observable<number>(100),
  screenUIMarginX: 10,
  screenUIMarginY: 10,
  playerSpawnpoint: new PIXI.Point(0, 0),
  enemySpawnerSpawnpoint: new PIXI.Point(0, 0),
};

/////////////////////////////
// Application Configuration
/////////////////////////////
//TODO: Make a subtype that is game specific so you can populate
//      zero or more properties instead of all
export const gixiAppConfiguration: GixiApplicationConfiguration = {
  canvasId: 'pixi-application-canvas',
  widthInitial: 1920,
  heightInitial: 1080,
  minFPS: 1,
  maxFPS: 240,
  backgroundColor: 0x87867a,
  data: treasureHunterData,
};

/////////////////////////////
// Application Creation and Initialization
/////////////////////////////
export async function createAndInitializeApp(canvasId: string): Promise<TreasureHunter2D> {
  // Get the canvas element
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

  if (!canvas) {
    throw new Error(`Canvas with id ${canvasId} not found`);
  }

  // Get the computed style of the canvas
  const style = window.getComputedStyle(canvas);

  // Parse the width and height, removing 'px' and accounting for the border
  const width = parseInt(style.width, 10) - 4; // Subtracting 4 for the 2px border on each side
  const height = parseInt(style.height, 10) - 4; // Subtracting 4 for the 2px border on each side

  console.log(`createAndInitializeApp() id = ${canvasId} at size ${width}x${height}`);

  // Update the configuration with the new dimensions
  const config = {
    ...gixiAppConfiguration,
    canvasId: canvasId,
    widthInitial: width,
    heightInitial: height,
  };

  const app = new TreasureHunter2D(config);
  await app.initializeAsync();
  return app;
}

// Expose the function globally
(window as any).createAndInitializeApp = createAndInitializeApp;
