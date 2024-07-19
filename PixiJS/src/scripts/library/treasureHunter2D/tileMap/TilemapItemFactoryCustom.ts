import * as PIXI from 'pixi.js';
import { ChestTilemapObject } from "./tileMapObjects/ChestTilemapObject";
import { GixiApplication } from "../../gixi/GixiApplication";
import { ITilemapItemFactory, TilemapItemData } from '../../gixi';
import { LayerType } from '../../gixi/tilemap/Tilemap';

export class TilemapItemFactoryCustom implements ITilemapItemFactory {

  // Fields ---------------------------------------
  private _superApp: GixiApplication;

  // Initialization -------------------------------
  constructor(superApp: GixiApplication) {
    this._superApp = superApp;
  }

  // Methods --------------------------------------
  public async createTilemapItem(tilemapItemData: TilemapItemData): Promise<PIXI.Container> {

    switch (tilemapItemData.layerType) {

      case LayerType.TileLayer:
        return new PIXI.Sprite(tilemapItemData.texture);

      case LayerType.ObjectGroup:

        //console.log(`createTilemapItem: (${tilemapItemData.row},${tilemapItemData.column}) ` + tilemapItemData.type);
        if (tilemapItemData.type == (ChestTilemapObject).name) {

          return new ChestTilemapObject(this._superApp, { texture: tilemapItemData.texture });
        }
        return new PIXI.Sprite(tilemapItemData.texture);

      default:
        throw new Error('Invalid layer type');
    }
  }
}