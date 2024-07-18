import { SuperApp } from "../core/super/SuperApp";
import { ISuperTilemapItemFactory, LayerType, TilemapItemData } from "../core/super/superTilemap/SuperTilemap";
import * as PIXI from 'pixi.js';
import { ChestSuperTilemapObject } from "./objects/ChestSuperTilemapObject";

export class CustomSuperTilemapItemFactory implements ISuperTilemapItemFactory {

  // Fields ---------------------------------------
  private _superApp: SuperApp;

  // Initialization -------------------------------
  constructor(superApp: SuperApp) {
    this._superApp = superApp;
  }

  // Methods --------------------------------------
  public async createTilemapItem(tilemapItemData: TilemapItemData): Promise<PIXI.Sprite> {

    switch (tilemapItemData.layerType) {

      case LayerType.TileLayer:
        return new PIXI.Sprite(tilemapItemData.texture);

      case LayerType.ObjectGroup:

        //console.log(`createTilemapItem: (${tilemapItemData.row},${tilemapItemData.column}) ` + tilemapItemData.type);
        if (tilemapItemData.type == (ChestSuperTilemapObject).name) {

          return new ChestSuperTilemapObject(this._superApp, { texture: tilemapItemData.texture });
        }
        return new PIXI.Sprite(tilemapItemData.texture);

      default:
        throw new Error('Invalid layer type');
    }
  }
}