import { SuperApp } from "../core/super/SuperApp";
import { ITilemapItemFactory, LayerType, TilemapItemData } from "../core/gixi/tilemap/Tilemap";
import * as PIXI from 'pixi.js';
import { ChestTilemapObject } from "./objects/ChestTilemapObject";

export class TilemapItemFactoryCustom implements ITilemapItemFactory {

  // Fields ---------------------------------------
  private _superApp: SuperApp;

  // Initialization -------------------------------
  constructor(superApp: SuperApp) {
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