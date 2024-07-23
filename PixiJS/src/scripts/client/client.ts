import { Observable } from './core/observables/Observable';
import { GixiApplicationConfiguration } from './gixi/GixiApplication';
import { SystemManagerDefault } from './gixi/systemManager/SystemManagerDefault';
import { Tilemap } from './gixi/tilemap/Tilemap';
import { TreasureHunter2D } from './projects/treasureHunter2D/TreasureHunter2D';
import * as PIXI from 'pixi.js';


/////////////////////////////
// Application Data
/////////////////////////////
export interface ITreasureHunterData {
  logoImageUrl: string;
  tilemapDataUrl: string;
  playerTextureUrl: string;
  enemySpawnerTextureUrl: string;
  enemyTextureUrl: string;
  coinsCollected: Observable<number>;
  coinsMax: Observable<number>;
  timeElapsed: Observable<number>;
  timeElapsedBest: Observable<number>;
  screenUIMarginX: number;
  screenUIMarginY: number;
  playerSpawnpoint: PIXI.Point;
  enemySpawnerSpawnpoint: PIXI.Point;
}

const treasureHunterData: ITreasureHunterData = {
  logoImageUrl: 'assets/images/pixijs-logo-32x32.png',
  tilemapDataUrl: 'assets/tilemaps/TreasureHunter2D.tmj',
  playerTextureUrl: 'assets/images/player.png',
  enemySpawnerTextureUrl: 'assets/images/enemy-spawner.png',
  enemyTextureUrl: 'assets/images/enemy.png',
  coinsCollected: new Observable<number>(0),
  coinsMax: new Observable<number>(0),
  timeElapsed: new Observable<number>(0),
  timeElapsedBest: new Observable<number>(0),
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
  widthInitial: 1920,
  heightInitial: 1080,
  minFPS: 1,
  maxFPS: 240,
  backgroundColor: 0x87867a,
  systemManager: new SystemManagerDefault(),
  data: treasureHunterData
};


/////////////////////////////
// Application Creation
/////////////////////////////
const treasureHunterApp = new TreasureHunter2D(gixiAppConfiguration);


/////////////////////////////
// Application Initialize
/////////////////////////////
(async () => {
  await treasureHunterApp.initializeAsync();
})();
