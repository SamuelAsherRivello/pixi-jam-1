import * as PIXI from 'pixi.js';
import { SuperApp } from './SuperApp';
import { SuperUtility } from './SuperUtility';

export class MultiAnimatedSprite {
  private _animationNameToAnimatedSprite: Map<string, PIXI.AnimatedSprite>;
  private _textureImageURL: string;
  private _spriteSheetURL: string;

  constructor(newTextureImageURL: string, newSpriteSheetURL: string) {
    this._textureImageURL = newTextureImageURL;
    this._spriteSheetURL = newSpriteSheetURL;
    this._animationNameToAnimatedSprite = new Map();
  }

  async initializeAndAddToViewport(superApp: SuperApp, parent: PIXI.Container) {
    const spriteSheetAtlasResponse = await fetch(this._spriteSheetURL);
    const spriteSheetAtlas = await spriteSheetAtlasResponse.json();
    await PIXI.Assets.load(this._textureImageURL);    
    const texture = PIXI.Texture.from(this._textureImageURL);
    const spriteSheet = new PIXI.Spritesheet(texture, spriteSheetAtlas);
    await spriteSheet.parse();

    for (const [animationName, textures] of Object.entries(spriteSheet.animations)) {
      this._animationNameToAnimatedSprite.set(animationName, new PIXI.AnimatedSprite(textures));
    }

    this._animationNameToAnimatedSprite.forEach((value: PIXI.AnimatedSprite, key: string) => {
      superApp.addToViewport(value);
    });
  }

  public play(animationName: string, animationSpeed: number) {
    const animatedSprite: PIXI.AnimatedSprite | undefined = this._animationNameToAnimatedSprite.get(animationName);
    if (animatedSprite == undefined)
      throw new Error("Trying to play unknown animation with animationName=" + animationName);

    animatedSprite.animationSpeed = animationSpeed;
    animatedSprite.play();
  }
}
