export interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface SpriteSourceSize {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface SourceSize {
  w: number;
  h: number;
}

export interface FrameDetails {
  frame: Frame;
  rotated: boolean;
  trimmed: boolean;
  spriteSourceSize: SpriteSourceSize;
  sourceSize: SourceSize;
}

export interface Meta {
  app: string;
  version: string;
  image: string;
  format: string;
  size: SourceSize;
  scale: string;
  smartupdate: string;
}

export interface AnimationData {
  [key: string]: string[];
}

export interface FramesData {
  [key: string]: FrameDetails;
}

export class SpriteSheet {
  frames: FramesData;
  animations: AnimationData;
  meta: Meta;

  constructor() {
    this.frames = {};
    this.animations = {};
    this.meta = {
      app: '',
      version: '',
      image: '',
      format: '',
      size: {
        w: 0,
        h: 0,
      },
      scale: '',
      smartupdate: '',
    };
  }

  public static fromJson(json: any): SpriteSheet {
    const spriteSheet = new SpriteSheet();
    spriteSheet.frames = json.frames;
    spriteSheet.animations = json.animations;
    spriteSheet.meta = json.meta;
    return spriteSheet;
  }

  public getAnimationByIndex(index: number): string {
    return Object.keys(this?.animations)[index];
  }
}
