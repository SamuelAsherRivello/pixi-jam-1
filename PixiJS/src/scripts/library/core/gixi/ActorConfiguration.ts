
/**
* Configuration
*/
export interface ActorConfiguration {
    isCollidable: boolean;
    isTickable: boolean;
    isResizable: boolean;
}

const ActorConfigurationDefault: ActorConfiguration = {
    isCollidable: true,
    isTickable: true,
    isResizable: true
}
