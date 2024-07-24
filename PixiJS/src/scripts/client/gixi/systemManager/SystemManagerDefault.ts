import { AudioSystem } from "../systems/AudioSystem";
import { CollisionSystem } from "../systems/CollisionSystem";
import { InputSystem } from "../systems/InputSystem";
import { LocalDiskStorageSystem } from "../systems/LocalDiskStorageSystem";
import { MultiplayerSystem } from "../systems/MultiplayerSystem";
import { TilemapCollisionSystem } from "../systems/TilemapCollisionSystem";
import { ISystemManager } from "./base/ISystemManager";
import { SystemManagerBase } from "./base/SystemManagerBase";

/**
 * 
 * Default implementation of ISystemsBase
 * 
 * You may create an alternative and pass it for your custom usage
 * 
 */
export class SystemManagerDefault extends SystemManagerBase implements ISystemManager {

    // Properties -----------------------------------

    // Fields ---------------------------------------

    // Initialization -------------------------------
    constructor() {
        super();

    }

    public async initializeAsync(): Promise<any> {

        //Super
        await super.initializeAsync();


        //Local

        //I learned that I can't use interfaces as the key for locator. So...
        //TODO: organize this area better. Do something like
        //this._locator.addItem(CollisionSystemBase, new CollisionSystemDefault(this._app));
        //or
        //this._locator.addItem(CollisionSystem //which is the base class , new CollisionSystemDefault(this._app));

        //
        this._locator.addItem(CollisionSystem, new CollisionSystem(this._app));
        this._locator.addItem(TilemapCollisionSystem, new TilemapCollisionSystem(this._app));
        this._locator.addItem(InputSystem, new InputSystem(this._app));
        this._locator.addItem(AudioSystem, new AudioSystem(this._app));
        this._locator.addItem(MultiplayerSystem, new MultiplayerSystem(this._app));
        this._locator.addItem(LocalDiskStorageSystem, new LocalDiskStorageSystem(this._app));
        const systems = [
            this._locator.getItem(CollisionSystem),
            this._locator.getItem(TilemapCollisionSystem),
            this._locator.getItem(InputSystem),
            this._locator.getItem(AudioSystem),
            this._locator.getItem(MultiplayerSystem),
            this._locator.getItem(LocalDiskStorageSystem),
        ];

        await Promise.all(systems.map(system => system.initializeAsync()));
    }

}