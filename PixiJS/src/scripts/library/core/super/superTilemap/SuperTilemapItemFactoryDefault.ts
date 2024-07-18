import * as PIXI from 'pixi.js';
import { SuperTilemap, TilemapData } from '@src/scripts/library/core/super/superTilemap/SuperTilemap';
import { SuperApp } from '../SuperApp';

export class SuperTilemapCollisionSystem {

    // Fields ---------------------------------------
    private collisionMap!: boolean[][];
    private _superApp: SuperApp;
    private _superTilemap: SuperTilemap;

    // Initialization -------------------------------
    constructor(superApp: SuperApp, superTilemap: SuperTilemap) {
        this._superApp = superApp;
        this._superTilemap = superTilemap;
    }

    /**
     * Initializes the collision system asynchronously.
     */
    public async initializeAsync() {
        this.collisionMap = this.createCollisionMap(this._superTilemap.tilemapData);
    }

    // Methods --------------------------------------
    /**
     * Creates a collision map based on the tilemap data.
     * @param tilemapData The tilemap data.
     * @returns A 2D array representing the collision map.
     */
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

    /**
     * Checks if there is a collision at the specified coordinates and dimensions.
     * @param x The x-coordinate of the position to check.
     * @param y The y-coordinate of the position to check.
     * @param width The width of the area to check.
     * @param height The height of the area to check.
     * @returns True if a collision is detected; otherwise, false.
     */
    public isCollision(x: number, y: number, width: number, height: number): boolean {
        const localPos = new PIXI.Point(x, y);
        const globalPos = new PIXI.Point();
        this._superApp.app.stage.toGlobal(localPos, globalPos);

        const tileWidth = this._superTilemap.tilemapData.tilewidth;
        const tileHeight = this._superTilemap.tilemapData.tileheight;

        const startX = Math.floor((globalPos.x - this._superTilemap.x) / tileWidth);
        const endX = Math.ceil((globalPos.x - this._superTilemap.x + width) / tileWidth);
        const startY = Math.floor((globalPos.y - this._superTilemap.y) / tileHeight);
        const endY = Math.ceil((globalPos.y - this._superTilemap.y + height) / tileHeight);

        for (let tileY = startY; tileY < endY; tileY++) {
            for (let tileX = startX; tileX < endX; tileX++) {
                if (tileY >= 0 && tileY < this.collisionMap.length && tileX >= 0 && tileX < this.collisionMap[0].length) {
                    if (this.collisionMap[tileY][tileX]) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
