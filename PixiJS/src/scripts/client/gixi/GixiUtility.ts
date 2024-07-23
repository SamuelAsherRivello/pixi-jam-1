import * as PIXI from 'pixi.js';
import { ICollisionSystemBody } from './base/ICollisionSystemBody';

/**
 * Common functionality
 */
export class GixiUtility {

  // Properties -----------------------------------

  // Fields ---------------------------------------

  // Methods --------------------------------------
  public static textureIsNullOrEmpty(texture: PIXI.Texture): boolean {
    return texture === null || texture === PIXI.Texture.EMPTY;
  }

  public static stringIsNullOrEmpty(value: string): boolean {
    return value === null || value === '';
  }

  public static hasInterface<T>(obj: any, propertyChecker: InterfaceLookup<T>): obj is T {
    const properties = Object.keys(propertyChecker) as (keyof T)[];
    return properties.every(prop => prop in obj);
  }
}


//HACK: You can't check interfaces at rutnime in typescript so 
//we do a lookup on a manual set of properties that we expect to exist
export const ICollisionSystemBodyInterfaceLookup: InterfaceLookup<ICollisionSystemBody> = {
  canCollisionBeChecked: true,
};

type InterfaceLookup<T> = {
  [P in keyof T]?: boolean;
};