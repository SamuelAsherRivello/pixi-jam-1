import * as PIXI from 'pixi.js';

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
}
