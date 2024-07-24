import { GixiApplication } from "../GixiApplication";
import { SystemBase } from "./base/SystemBase";
import { ISystemBase } from "./base/SystemBase";


/** 
 * LocalDiskStorageSystem handles local storage operations
 */
export class LocalDiskStorageSystem extends SystemBase implements ISystemBase {
    constructor(app: GixiApplication) {
        super(app);
    }

    public override async initializeAsync(): Promise<any> {
        if (this.isInitialized) {
            return;
        }
        // Local
        this._isInitialized = true;
    }

    public saveData<T>(key: string, data: T): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    public getData<T>(key: string): T {

        if (!this.hasData(key)) {
            throw new Error(`LocalDiskStorageSystem: Key ${key} not found`);
        }
        const data = localStorage.getItem(key);
        if (!data) {
            throw new Error(`LocalDiskStorageSystem: Key ${key} not found`);
        }
        return JSON.parse(data) as T;
    }

    public deleteData(key: string): void {
        localStorage.removeItem(key);
    }

    public clearAllData(): void {
        localStorage.clear();
    }

    public hasData(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }
}
