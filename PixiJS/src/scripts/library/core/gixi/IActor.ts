import * as PIXI from 'pixi.js';
import { SuperApp } from '../super/SuperApp';
import { ActorConfiguration } from './ActorConfiguration';

/**
 * IActor Interface
 */
export interface IActor {

    // Properties -----------------------------------
    configuration: ActorConfiguration;
    isCollidable: boolean;

    // Methods --------------------------------------
    isChild(): boolean;
    onAdded(): void;
    onRemoved(): void;
    onResize(superApp: SuperApp): void;
    onTick(ticker: PIXI.Ticker): void;
}
