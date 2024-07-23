import * as PIXI from 'pixi.js';
import { GixiApplication } from '../GixiApplication';
import { TilemapData } from '..';
import { Tilemap } from './Tilemap';

export class TilemapDetails {
    private collisionMap!: boolean[][];
    private _app: GixiApplication;
    private _Tilemap: Tilemap;

    constructor(app: GixiApplication, Tilemap: Tilemap) {
        this._app = app;
        this._Tilemap = Tilemap;
    }

    public async initializeAsync() {
        this.collisionMap = this.createCollisionMap(this._Tilemap.tilemapData);
    }

    private createCollisionMap(tilemapData: TilemapData): boolean[][] {
        if (!tilemapData.layers || !tilemapData.tilesets) {
            throw new Error('Invalid tilemapData: layers or tilesets are missing');
        }

        const layers = tilemapData.layers;
        const tilesets = tilemapData.tilesets;

        // Initialize collision map with the dimensions of the tilemap
        const collisionMap: boolean[][] = Array.from({ length: tilemapData.height }, () =>
            Array(tilemapData.width).fill(false)
        );

        // Build a lookup map for IsCollision property
        const collisionProperties: { [key: number]: boolean } = {};
        tilesets.forEach((tileset) => {
            if (tileset.tiles) {
                tileset.tiles.forEach((tile) => {
                    if (tile.properties) {
                        tile.properties.forEach((property) => {
                            if (property.name === "IsCollision") {
                                collisionProperties[tileset.firstgid + tile.id] = property.value;
                            }
                        });
                    }
                });

            }
        });

        // Populate the collision map based on the tile data
        layers.forEach((layer) => {
            if (layer.type === "tilelayer" && layer.data) {
                for (let y = 0; y < layer.height; y++) {
                    for (let x = 0; x < layer.width; x++) {
                        const tileIndex = layer.data[y * layer.width + x];
                        if (collisionProperties[tileIndex]) {
                            collisionMap[y][x] = true;
                        }
                    }
                }
            }
        });

        return collisionMap;
    }

    public isCollision(x: number, y: number, width: number, height: number): boolean {
        const localPos = new PIXI.Point(x, y);
        const globalPos = new PIXI.Point();
        this._app.app.stage.toGlobal(localPos, globalPos);

        const tileWidth = this._Tilemap.tilemapData.tilewidth;
        const tileHeight = this._Tilemap.tilemapData.tileheight;

        const startX = Math.floor((globalPos.x - this._Tilemap.x) / tileWidth);
        const endX = Math.ceil((globalPos.x - this._Tilemap.x + width) / tileWidth);
        const startY = Math.floor((globalPos.y - this._Tilemap.y) / tileHeight);
        const endY = Math.ceil((globalPos.y - this._Tilemap.y + height) / tileHeight);

        const localTileX = Math.floor(localPos.x / tileWidth);
        const localTileY = Math.floor(localPos.y / tileHeight);
        const globalTileX = Math.floor((globalPos.x - this._Tilemap.x) / tileWidth);
        const globalTileY = Math.floor((globalPos.y - this._Tilemap.y) / tileHeight);

        const tilemapGlobalPos = new PIXI.Point();
        this._Tilemap.toGlobal(new PIXI.Point(0, 0), tilemapGlobalPos);

        for (let tileY = startY; tileY < endY; tileY++) {
            for (let tileX = startX; tileX < endX; tileX++) {
                if (tileY >= 0 && tileY < this.collisionMap.length && tileX >= 0 && tileX < this.collisionMap[0].length) {
                    //console.log(`Checking tile (${tileX}, ${tileY})`);
                    if (this.collisionMap[tileY][tileX]) {
                        //console.log(`Collision detected at tile (${tileX}, ${tileY})`);
                        return true;
                    }
                } else {
                    //console.log(`Tile (${tileX}, ${tileY}) is out of bounds`);
                }
            }
        }

        return false;
    }
}
