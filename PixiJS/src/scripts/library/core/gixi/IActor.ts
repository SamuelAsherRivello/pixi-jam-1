
import { SuperApp } from '../super/SuperApp';
import { ActorConfiguration } from './ActorConfiguration';
import { Ticker } from './Ticker';

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
    onTick(ticker: Ticker): void;
}
