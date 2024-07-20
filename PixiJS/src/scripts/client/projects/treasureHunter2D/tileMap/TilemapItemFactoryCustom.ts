import * as PIXI from 'pixi.js';
import { ChestTilemapObject } from "./tileMapObjects/ChestTilemapObject";
import { CoinTilemapObject } from './tileMapObjects/CoinTilemapObject';
import { GixiApplication } from '@src/scripts/client/gixi/GixiApplication';
import { ITilemapItemFactory, LayerType, TilemapItemData } from '@src/scripts/client/gixi/tilemap/Tilemap';
import { ActorStaticConfiguration } from '@src/scripts/client/gixi';

export class TilemapItemFactoryCustom implements ITilemapItemFactory {

  // Fields ---------------------------------------
  private _app: GixiApplication;

  // Initialization -------------------------------
  constructor(app: GixiApplication) {
    this._app = app;
  }

  // Methods --------------------------------------
  public async createTilemapItem(tilemapItemData: TilemapItemData): Promise<PIXI.Container> {


    switch (tilemapItemData.layerType) {

      case LayerType.TileLayer:
        return new PIXI.Sprite(tilemapItemData.texture);

      case LayerType.ObjectGroup:

        //console.log(`createTilemapItem: (${tilemapItemData.row},${tilemapItemData.column}) ` + tilemapItemData.type);

        if (tilemapItemData.type == (ChestTilemapObject).name) {

          const configuration: ActorStaticConfiguration = {
            textureUrl: '',
            texture: tilemapItemData.texture,
            canCollisionCheck: false,
            isTickable: true,
            isResizable: false
          }

          return new ChestTilemapObject(this._app, configuration);
        }
        else if (tilemapItemData.type == (CoinTilemapObject).name) {
          return new CoinTilemapObject(this._app);

        }



        CoinTilemapObject
        return new PIXI.Sprite(tilemapItemData.texture);

      default:
        throw new Error('Invalid layer type');
    }
  }
}