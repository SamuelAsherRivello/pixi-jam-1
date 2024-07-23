import { GixiApplication } from "../GixiApplication";
import { SystemBase } from "./base/SystemBase";
import { ISystemBase } from "./base/SystemBase";

/**
 * Interface for LocalDiskStorageSystem
 */
export interface ILocalDiskStorageSystem extends ISystemBase {
    saveData<T>(key: string, data: T): void;
    getData<T>(key: string): T | null;
    deleteData(key: string): void;
    clearAllData(): void;
    hasData(key: string): boolean;
}

/** 
 * LocalDiskStorageSystem handles local storage operations
 */
export class LocalDiskStorageSystem extends SystemBase implements ILocalDiskStorageSystem {
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

    public getData<T>(key: string): T | null {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) as T : null;
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
