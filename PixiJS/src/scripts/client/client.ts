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
  console.log('createAndInitializeApp() : ' + canvasId);
  const config = { ...gixiAppConfiguration, canvasId: canvasId };
  const app = new TreasureHunter2D(config);
  await app.initializeAsync();
  return app;
}

// Expose the function globally
(window as any).createAndInitializeApp = createAndInitializeApp;
