import { LocatorContructor } from "@client/core/locators/Locator";
import { IInitializableAsync } from "@client/gixi/base/IInitializeAsync";
import { ITickable } from "@client/gixi/base/ITickable";
import { GixiApplication } from "@client/gixi/GixiApplication";
import { Ticker } from "pixi.js";


/**
 * 
 */
export class SystemBase implements IInitializableAsync, ITickable {

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

    public async initializeAsync(): Promise<any> {
        console.log("Method must be overriden. " + this.constructor.name);
    }

    public requireIsInitialized() {
        if (!this.isInitialized) {
            throw new Error('Systems are not initialized.');
        }
    }

    // Methods --------------------------------------
    public hasItem<U extends SystemBase>(key: LocatorContructor<U>): boolean {
        console.log("Method must be overriden. " + this.constructor.name);
        return false;
    }
    public addItem<U extends SystemBase>(key: LocatorContructor<U>, system: U): void {
        console.log("Method must be overriden. " + this.constructor.name);
    }
    public getItem<U extends SystemBase>(key: LocatorContructor<U>): U {
        console.log("Method must be overriden. " + this.constructor.name);
        return null as unknown as U;
    }
    public removeItem<U extends SystemBase>(key: LocatorContructor<U>): void {
        console.log("Method must be overriden. " + this.constructor.name);
    }

    // Event Handlers -------------------------------
    public onTick(ticker: Ticker): void {
        console.log("Method must be overriden. " + this.constructor.name);
    }
}