
import {
    Tilemap,
    TilemapData,
    Layer,
    Tileset,
    Tile,
    Property,
    TilemapItemData,
    LayerType,
    ITilemapItemFactory,
} from './tilemap/Tilemap';
import { ActorContainer } from './ActorContainer';
import { TilemapCollisionSystem } from './tilemap/TilemapCollisionSystem';
import { TilemapItemFactoryDefault } from './tilemap/TilemapItemFactoryDefault';
import { TilemapObject } from './tilemap/TilemapObject';
import { ActorStatic } from './ActorStatic';
import { Ticker } from './Ticker';
import { Sprite } from './Sprite';

// Classes - GIXI
export const GIXI = {
    ActorContainer,
    Tilemap,
    TilemapCollisionSystem,
    TilemapItemFactoryDefault,
    TilemapObject,
    ActorStatic,
    Ticker,
    Sprite

};

// Non-Classes - Not Yet GIXI - TODO: Add to GIXI somehow. Not sure
export type { TilemapData, Layer, Tileset, Tile, Property, TilemapItemData, LayerType, ITilemapItemFactory };

