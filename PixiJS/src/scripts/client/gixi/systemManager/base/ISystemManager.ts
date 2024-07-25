import { LocatorContructor } from "@client/core/locators/Locator";
import { GixiApplication } from "../../GixiApplication";
import { IInitializableAsync } from "../../base/IInitializeAsync";
import { SystemBase } from "@client/gixi/systems/base/SystemBase";
import { ITickable } from "@client/gixi/base/ITickable";


/**
 * 
 */
export interface ISystemManager extends IInitializableAsync, ITickable {

    // Properties -----------------------------------
    set App(value: GixiApplication);

    // Methods --------------------------------------
    hasItem<U extends SystemBase>(key: LocatorContructor<U>): boolean;
    addItem<U extends SystemBase>(key: LocatorContructor<U>, system: U): void;
    getItem<U extends SystemBase>(key: LocatorContructor<U>): U;
    removeItem<U extends SystemBase>(key: LocatorContructor<U>): void;
}