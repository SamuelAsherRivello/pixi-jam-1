import { GixiApplication } from '../GixiApplication';
import { IActorConfiguration } from './IActorConfiguration';

/**
 * IActor Interface
 */
export interface IActor {

    // Properties -----------------------------------
    configuration: IActorConfiguration;
    canCollisionCheck: boolean;

    // Methods --------------------------------------
    isChild(): boolean;
    onAdded(): void;
    onRemoved(): void;
    onResize(app: GixiApplication): void;
}
