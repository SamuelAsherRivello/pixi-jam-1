import { Locator, LocatorContructor } from "../../../core/locators/Locator";
import { GixiApplication } from "../../GixiApplication";
import { ISystemBase } from "../../systems/base/SystemBase";
import { ISystemManager } from "./ISystemManager";

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
    protected _locator: Locator<ISystemBase> = new Locator<ISystemBase>();
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

    // Locator API Methods -------------------------------
    public hasItem<U extends ISystemBase>(key: LocatorContructor<U>): boolean {
        return this._locator.hasItem(key);
    }

    public addItem<U extends ISystemBase>(key: LocatorContructor<U>, system: U): void {
        this._locator.addItem(key, system);
    }

    public getItem<U extends ISystemBase>(key: LocatorContructor<U>): U {
        return this._locator.getItem(key) as U;
    }

    public removeItem<U extends ISystemBase>(key: LocatorContructor<U>): void {
        this._locator.removeItem(key);
    }
}
