import { GixiApplication } from '@client/gixi/GixiApplication';
import { GixiUtility } from '@client/gixi/GixiUtility';
import * as PIXI from 'pixi.js';
import { SpriteSheet as SpriteSheetData } from './SpriteSheet';

//so I can NOT export it (to hide it from direct use). Needed? Not sure.
export class MultiAnimatedSprite {
  // Properties -----------------------------------
  public get spriteSheetData(): SpriteSheetData {
    return this._spriteSheetData;
  }

  // Fields ---------------------------------------
  private _animationNameToAnimatedSprite: Map<string, PIXI.AnimatedSprite>;
  private _spriteSheetDataUrl: string;
  private _spriteSheetData!: SpriteSheetData;

  // Initialization -------------------------------
  constructor(spriteSheetDataUrl: string) {
    this._spriteSheetDataUrl = spriteSheetDataUrl;

    this._animationNameToAnimatedSprite = new Map();
  }

  // Methods ------------------------------
  public async initializeAndReparent(app: GixiApplication, parent: PIXI.Container) {
    const dataResponse = await fetch(this._spriteSheetDataUrl);

    const jsonData = await dataResponse.json();
    this._spriteSheetData = SpriteSheetData.fromJson(jsonData);

    //Build image url from the data url's base path
    let spriteSheetTextureImageUrl = this._spriteSheetDataUrl.substring(0, this._spriteSheetDataUrl.lastIndexOf('/')) + '/';
    spriteSheetTextureImageUrl += this._spriteSheetData.meta.image;

    await PIXI.Assets.load(spriteSheetTextureImageUrl);
    const texture = PIXI.Texture.from(spriteSheetTextureImageUrl);
    const spriteSheet = new PIXI.Spritesheet(texture, this._spriteSheetData);
    await spriteSheet.parse();

    const size = new PIXI.Point(this._spriteSheetData.meta.size.w, this._spriteSheetData.meta.size.h);

    for (const [animationName, textures] of Object.entries(spriteSheet.animations)) {
      this._animationNameToAnimatedSprite.set(animationName, new PIXI.AnimatedSprite(textures));
    }

    this._animationNameToAnimatedSprite.forEach((value: PIXI.AnimatedSprite, key: string) => {
      value.label = MultiAnimatedSprite.name;
      parent.addChild(value);

      // 1 of 2
      //NOTE: The parent center and/or the value center may not be proper
      //TODO: Go to index.ts and try to put a coin at a specific world position and then be sure it looks good
      value.setSize(size.x, size.y);

      // 2 of 2
      // Center the anchor and position
      // to help with this.rotation++;
      GixiUtility.setAnchorAndAdjustPosition(value, new PIXI.Point(0.5, 0.5));
    });
  }

  /**
   * This is what an override looks like.
   */

  public play(animationName: string, animationSpeed: number): void;
  public play(animationNameIndex: number, animationSpeed: number): void;
  public play(animationNameOrIndex: string | number, animationSpeed: number): void {
    let animationName: string;

    if (typeof animationNameOrIndex === 'string') {
      animationName = animationNameOrIndex;
    } else if (typeof animationNameOrIndex === 'number') {
      animationName = this._spriteSheetData.getAnimationByIndex(animationNameOrIndex);
    } else {
      throw new Error('Invalid argument type for play method');
    }

    const animation: PIXI.AnimatedSprite | undefined = this._animationNameToAnimatedSprite.get(animationName);
    if (!animation) {
      throw new Error('Trying to play unknown animation with animationName=' + animationName);
    }

    animation.animationSpeed = animationSpeed;
    animation.play();
  }
}
