import * as PIXI from 'pixi.js';
import { ChestTilemapObject } from './tileMapObjects/ChestTilemapObject';
import { CoinTilemapObject } from './tileMapObjects/CoinTilemapObject';
import { GixiApplication } from '@client/gixi/GixiApplication';
import { ITilemapItemFactory, LayerType, TilemapItemData } from '@client/gixi/tilemap/Tilemap';
import { ActorStaticConfiguration } from '@client/gixi';
import { PlayerSpawnpointTilemapObject } from './tileMapObjects/PlayerSpawnpointTilemapObject';
import { EnemySpawnpointTilemapObject } from './tileMapObjects/EnemySpawnpointTilemapObject';
import { Tilemap } from '../../../gixi/tilemap/Tilemap';
import { ITreasureHunterData } from '@client/client';

export class TilemapItemFactoryCustom implements ITilemapItemFactory {
  // Fields ---------------------------------------
  private _app: GixiApplication;

  // Initialization -------------------------------
  constructor(app: GixiApplication) {
    this._app = app;
  }

  // Methods --------------------------------------
  public async createTilemapItem(tilemap: Tilemap, tilemapItemData: TilemapItemData): Promise<PIXI.Container> {
    //Strong typing is optional, but recommended
    const myGixiAppData: ITreasureHunterData = this._app.configuration.data as ITreasureHunterData;

    switch (tilemapItemData.layerType) {
      case LayerType.TileLayer:
        return new PIXI.Sprite(tilemapItemData.texture);

      case LayerType.ObjectGroup:
        //console.log(`createTilemapItem: (${tilemapItemData.row},${tilemapItemData.column}) ` + tilemapItemData.type);

        switch (tilemapItemData.type) {
          //////////////////////////////////////////
          case ChestTilemapObject.name:
            const configuration: ActorStaticConfiguration = {
              textureUrl: '',
              texture: tilemapItemData.texture,
              canCollisionCheck: false,
              isTickable: true,
              isResizable: false,
            };

            //NOTE: TilemapItemData is passed by reference.
            //      So for some objects, I adjust the position
            //      which the Tilemap.ts will use for placement
            tilemapItemData.x += tilemapItemData.width;
            tilemapItemData.y += tilemapItemData.height;
            return new ChestTilemapObject(this._app, configuration);

          //////////////////////////////////////////
          case CoinTilemapObject.name:
            myGixiAppData.coinsMax.Value++;

            //NOTE: TilemapItemData is passed by reference.
            //      So for some objects, I adjust the position
            //      which the Tilemap.ts will use for placement
            tilemapItemData.x += tilemapItemData.width;
            tilemapItemData.y += tilemapItemData.height;
            return new CoinTilemapObject(this._app);

          //////////////////////////////////////////
          case PlayerSpawnpointTilemapObject.name:
            let playerSpawnpointTilemapObject = new PlayerSpawnpointTilemapObject(this._app, {
              texture: tilemapItemData.texture,
            });
            playerSpawnpointTilemapObject.alpha = 0.2;

            //NOTE: TilemapItemData is passed by reference.
            //      So for some objects, I adjust the position
            //      which the Tilemap.ts will use for placement
            tilemapItemData.x += tilemapItemData.width;
            tilemapItemData.y += tilemapItemData.height;

            console.log('#hack Tilemap positions player poorly.');

            const playerSpawnpoint = new PIXI.Point(this._app.getScreenCenterpoint().x - 64, this._app.getScreenCenterpoint().y);
            this._app.configuration.data.playerSpawnpoint = playerSpawnpoint;
            return playerSpawnpointTilemapObject;

          //////////////////////////////////////////
          case EnemySpawnpointTilemapObject.name:
            let enemySpawnpointTilemapObject = new EnemySpawnpointTilemapObject(this._app, { texture: tilemapItemData.texture });
            enemySpawnpointTilemapObject.alpha = 0.2;

            //NOTE: TilemapItemData is passed by reference.
            //      So for some objects, I adjust the position
            //      which the Tilemap.ts will use for placement
            tilemapItemData.x += tilemapItemData.width;
            tilemapItemData.y += tilemapItemData.height;

            console.log('#hack Tilemap positions enemy poorly.');

            const enemySpawnerSpawnpoint = new PIXI.Point(this._app.getScreenCenterpoint().x + 64, this._app.getScreenCenterpoint().y);
            this._app.configuration.data.enemySpawnerSpawnpoint = enemySpawnerSpawnpoint;

            return enemySpawnpointTilemapObject;

          //////////////////////////////////////////
          default:
            const sprite = new PIXI.Sprite(tilemapItemData.texture);

            //TODO: OPTIMIZE TO RUN AT HIGHER FPS
            //I'm not sure if this helps.

            sprite.roundPixels = true;
            sprite.interactive = false;

            //TODO: OPTIMIZE MORE
            //one idea is to render as something OTHER than *many sprites* for the non-interactive stuff

            return sprite;
        }
    }
  }
}
