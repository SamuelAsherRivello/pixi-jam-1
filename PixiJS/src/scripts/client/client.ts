import { Observable } from './core/observables/Observable';
import { GixiApplicationConfiguration } from './gixi/GixiApplication';
import { TreasureHunter2D } from './projects/treasureHunter2D/TreasureHunter2D';
import * as PIXI from 'pixi.js';


/////////////////////////////
// Application Data
/////////////////////////////
export interface ITreasureHunterData {
  logoImageUrl: string;
  tilemapDataUrl: string;
  playerTextureUrl: string;
  enemyTextureUrl: string;
  coinsCollected: Observable<number>;
  coinsMax: Observable<number>;
  screenUIMarginX: number;
  screenUIMarginY: number;
  playerSpawnpoint: PIXI.Point;
  enemySpawnpoint: PIXI.Point;
}

const treasureHunterData: ITreasureHunterData = {
  logoImageUrl: 'assets/images/pixijs-logo-32x32.png',
  tilemapDataUrl: 'assets/tilemaps/TreasureHunter2D.tmj',
  playerTextureUrl: 'assets/images/player-default-sprite.png',
  enemyTextureUrl: 'assets/images/enemy-default-sprite.png',
  coinsCollected: new Observable<number>(0),
  coinsMax: new Observable<number>(0),
  screenUIMarginX: 10,
  screenUIMarginY: 10,
  playerSpawnpoint: new PIXI.Point(0, 0),
  enemySpawnpoint: new PIXI.Point(0, 0),
};

/////////////////////////////
// Application Configuration
/////////////////////////////
export const gixiAppConfiguration: GixiApplicationConfiguration = {
  widthInitial: 1920,
  heightInitial: 1080,
  minFPS: 1,
  maxFPS: 240,
  backgroundColor: 0x87867a,
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
