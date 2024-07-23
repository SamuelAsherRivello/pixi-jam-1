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

  public static FormatNumber(value: number, maxLeadingZeros: number): string {
    const leadingZeros = '0'.repeat(maxLeadingZeros);
    return (leadingZeros + value).slice(-maxLeadingZeros);
  }

  public static setAnchorAndAdjustPosition(sprite: PIXI.Sprite, point: PIXI.Point) {
    sprite.anchor.set(point.x, point.y);
    sprite.position.set(sprite.width, sprite.height);
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