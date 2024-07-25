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
    return properties.every((prop) => prop in obj);
  }

  public static FormatNumber(value: number, maxLeadingZeros: number): string {
    const leadingZeros = '0'.repeat(maxLeadingZeros);
    return (leadingZeros + value).slice(-maxLeadingZeros);
  }

  public static setAnchorAndAdjustPosition(sprite: PIXI.Sprite, point: PIXI.Point) {
    //For ex. 0.5/0.5 will move the anchor to the center of the sprite
    //and adjust the art to keep the sprite in the same position
    sprite.anchor.set(point.x, point.y);
    const dx = -(sprite.parent.width * point.x);
    const dy = -(sprite.parent.height * point.y);
    sprite.position.set(sprite.position.x + dx, sprite.position.y + dy);
  }

  static setAnchorAndAdjustPositionAndParent(parent: PIXI.Container<PIXI.ContainerChild>, sprite: PIXI.Sprite, point: PIXI.Point) {
    //Move Child
    GixiUtility.setAnchorAndAdjustPosition(sprite, point);

    //Move parent
    const dx = parent.width * point.x * 2;
    const dy = parent.height * point.y * 2;
    parent.position.set(parent.position.x + dx, parent.position.y + dy);
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
