import { LocatorContructor } from "@src/scripts/client/core/locators/Locator";
import { GixiApplication } from "../../GixiApplication";
import { IInitializableAsync } from "../../base/IInitializeAsync";
import { ISystemBase } from "../../systems/base/SystemBase";


/**
 * 
 */
export interface ISystemManager extends IInitializableAsync {

    // Properties -----------------------------------
    set App(value: GixiApplication);

    // Methods --------------------------------------
    hasItem<U extends ISystemBase>(key: LocatorContructor<U>): boolean;
    addItem<U extends ISystemBase>(key: LocatorContructor<U>, system: U): void;
    getItem<U extends ISystemBase>(key: LocatorContructor<U>): U;
    removeItem<U extends ISystemBase>(key: LocatorContructor<U>): void;
}