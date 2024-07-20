import { ITilemapItemFactory, TilemapItemData } from "..";
import * as PIXI from 'pixi.js';
import { LayerType } from './Tilemap';
import { GixiApplication } from "../GixiApplication";

export class TilemapItemFactoryDefault implements ITilemapItemFactory {

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
                //Keep the same as here
                return new PIXI.Sprite(tilemapItemData.texture);
            case LayerType.ObjectGroup:
                //TODO: Copy and paste this class
                //Then use TilemapItemData values to determine the type of object to create
                return new PIXI.Sprite(tilemapItemData.texture);
            default:
                throw new Error('Invalid layer type');
        }
    }
}