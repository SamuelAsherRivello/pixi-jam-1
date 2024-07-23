import { GixiApplication } from "../../GixiApplication";
import { IInitializableAsync } from "../../base/IInitializeAsync";


/**
 * 
 */
export interface ISystemBase extends IInitializableAsync {

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