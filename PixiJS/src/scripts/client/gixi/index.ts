import { Tilemap, TilemapData, Layer, Tileset, Tile, Property, TilemapItemData, LayerType, ITilemapItemFactory } from './tilemap/Tilemap';

import { ActorContainer, ActorContainerConfiguration } from './ActorContainer';
import { TilemapItemFactoryDefault } from './tilemap/TilemapItemFactoryDefault';
import { ActorStatic, ActorStaticConfiguration } from './ActorStatic';
import { ActorAnimated, ActorAnimatedConfiguration } from './ActorAnimated';
import { GixiApplication } from './GixiApplication';
import { GixiUtility } from './GixiUtility';
import { IActorConfiguration } from './base/IActorConfiguration';
import { TilemapDetails } from './tilemap/TilemapDetails';
import { GixiText } from './GixiText';

// Classes - GIXI
export const GIXI = {
  ActorContainer,
  Tilemap,
  TilemapDetails: TilemapDetails,
  TilemapItemFactoryDefault,
  ActorStatic,
  ActorAnimated,
  GixiApplication,
  GixiUtility,
  GixiText,
};

// Non-Classes - Not Yet GIXI - TODO: Add to GIXI somehow. Not sure
export type {
  TilemapData,
  Layer,
  Tileset,
  Tile,
  Property,
  TilemapItemData,
  LayerType,
  ITilemapItemFactory,
  IActorConfiguration,
  ActorContainerConfiguration,
  ActorAnimatedConfiguration,
  ActorStaticConfiguration,
};
