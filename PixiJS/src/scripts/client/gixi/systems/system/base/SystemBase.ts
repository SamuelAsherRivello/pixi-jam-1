import { LocatorContructor } from "@client/core/locators/Locator";
import { IInitializableAsync } from "@client/gixi/base/IInitializeAsync";
import { GixiApplication } from "@client/gixi/GixiApplication";



/**
 * 
 */
export interface ISystemBase extends IInitializableAsync {

    // Properties -----------------------------------

    // Methods --------------------------------------
    hasItem<U extends ISystemBase>(key: LocatorContructor<U>): boolean;
    addItem<U extends ISystemBase>(key: LocatorContructor<U>, system: U): void;
    getItem<U extends ISystemBase>(key: LocatorContructor<U>): U;
    removeItem<U extends ISystemBase>(key: LocatorContructor<U>): void;
}

/**
 * 
 */
export interface ISystemsBase extends ISystemBase {

    // Properties -----------------------------------

    // Methods --------------------------------------
}

/**
 * 
 */
export class SystemBase implements ISystemBase {

    // Properties -----------------------------------
    get isInitialized(): boolean {
        return this._isInitialized;
    }

    // Fields ---------------------------------------
    protected _app: GixiApplication;
    protected _isInitialized: boolean = false;

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        this._app = app;
    }
    hasItem<U extends ISystemBase>(key: LocatorContructor<U>): boolean {
        throw new Error("Method not implemented.");
    }
    addItem<U extends ISystemBase>(key: LocatorContructor<U>, system: U): void {
        throw new Error("Method not implemented.");
    }
    getItem<U extends ISystemBase>(key: LocatorContructor<U>): U {
        throw new Error("Method not implemented.");
    }
    removeItem<U extends ISystemBase>(key: LocatorContructor<U>): void {
        throw new Error("Method not implemented.");
    }

    public async initializeAsync(): Promise<any> {
        //console.log("Method must be overriden");
    }

    public requireIsInitialized() {
        if (!this.isInitialized) {
            throw new Error('Systems are not initialized.');
        }
    }

    // Methods --------------------------------------
}