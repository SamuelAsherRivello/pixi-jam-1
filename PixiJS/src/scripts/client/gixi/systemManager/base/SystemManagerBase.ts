import { SystemBase } from "@client/gixi/systems/base/SystemBase";
import { Locator, LocatorContructor } from "../../../core/locators/Locator";
import { GixiApplication } from "../../GixiApplication";
import { ISystemManager } from "./ISystemManager";
import { Ticker } from "pixi.js";

/**
 * 
 * Default implementation of ISystemsBase
 * 
 * You may create an alternative and pass it for your custom usage
 * 
 */
export class SystemManagerBase implements ISystemManager {

    // Properties -----------------------------------
    get isInitialized(): boolean {
        return this._isInitialized;
    }

    public set App(value: GixiApplication) {
        this._app = value;
    }


    // Fields ---------------------------------------
    protected _locator: Locator<SystemBase> = new Locator<SystemBase>();
    protected _isInitialized: boolean = false;
    protected _app!: GixiApplication;

    // Initialization -------------------------------
    constructor() {

    }

    public async initializeAsync(): Promise<any> {

        if (this.isInitialized) {
            return;
        }

        if (!this._app) {
            throw new Error('SystemsDefault: App must be set first');
        }

        this._isInitialized = true;
    }

    public requireIsInitialized() {
        if (!this.isInitialized) {
            throw new Error('Systems are not initialized.');
        }
    }

    // Methods -----------------------------------------
    public hasItem<U extends SystemBase>(key: LocatorContructor<U>): boolean {
        return this._locator.hasItem(key);
    }

    public addItem<U extends SystemBase>(key: LocatorContructor<U>, system: U): void {
        this._locator.addItem(key, system);
    }

    public getItem<U extends SystemBase>(key: LocatorContructor<U>): U {
        return this._locator.getItem(key) as U;
    }

    public removeItem<U extends SystemBase>(key: LocatorContructor<U>): void {
        this._locator.removeItem(key);
    }

    // Event Handlers  -------------------------------
    public onTick(ticker: Ticker): void {
        console.log("Method must be overriden");
    }
}
