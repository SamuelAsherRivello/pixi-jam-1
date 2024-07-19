import * as PIXI from 'pixi.js';
import { GixiApplication } from '../GixiApplication';
import { IActorConfiguration } from './IActorConfiguration';

/**
 * IActor Interface
 */
export interface IActor {

    // Properties -----------------------------------
    configuration: IActorConfiguration;
    isCollidable: boolean;

    // Methods --------------------------------------
    isChild(): boolean;
    onAdded(): void;
    onRemoved(): void;
    onResize(superApp: GixiApplication): void;
    onTick(ticker: PIXI.Ticker): void;
}
