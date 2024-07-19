
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

//Classes
export const GIXI = {
    ActorContainer,
    Tilemap,
    TilemapCollisionSystem,
    TilemapItemFactoryDefault,
    TilemapObject,
    ActorStatic

};

//Non-Classes
export type { TilemapData, Layer, Tileset, Tile, Property, TilemapItemData, LayerType, ITilemapItemFactory };