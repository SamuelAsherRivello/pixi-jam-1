import { ActorAnimatedConfiguration } from '@client/gixi';
import { ActorAnimated } from '@client/gixi/ActorAnimated';
import { GixiApplication } from '@client/gixi/GixiApplication';
import { ICollisionSystemBody } from '@client/gixi/base/ICollisionSystemBody';
import { DropShadowFilter, GlowFilter } from 'pixi-filters';
import { TreasureHunter2DConstants } from '../../TreasureHunter2DConstants';
import { AudioSystem } from '@client/gixi/systems/AudioSystem';
import * as PIXI from 'pixi.js';
/**
 * Represents a coin in the game.
 *
 */
export class CoinTilemapObject extends ActorAnimated implements ICollisionSystemBody {
  // Properties -----------------------------------
  public get canCollisionBeChecked(): boolean {
    return true;
  }

  // Fields ---------------------------------------

  // Initialization -------------------------------
  constructor(app: GixiApplication) {
    const configuration: ActorAnimatedConfiguration = {
      spriteSheetDataUrl: 'assets/images/AnimatedCoin/Active/animated_coin.json',
      canCollisionCheck: false,
      isTickable: false,
      isResizable: false,
    };
    super(app, configuration);

    // Redeclare anything from super
    // that you want differently here
    this.label = CoinTilemapObject.name;
  }

  public whatever() {
    this.isCollected = true;
    this.destroyAfterAnimation();
  }

  public override async initializeAsync() {
    // Super
    await super.initializeAsync();

    // OPTIONAL: Try these - https://pixijs.io/filters/
    this.filters = [
      //new GlowFilter({ distance: 1, outerStrength: 1, innerStrength: 1, color: 0xffff00 }),
      new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 }), //
    ];

    // Local
    //Do any additional initialization here

    //Play
    //1. by index
    this._multiAnimatedSprite.play(0, 0.2);
    //2. by name
    //this._multiAnimatedSprite.play('Run', 0.5);
  }

  // Methods --------------------------------------

  public destroyAfterAnimation() {
    let action1 = TreasureHunter2DConstants.Animations.riseAndGrow(
      this,
      0,
      20,
      () => {
        // onStart
        this._app.systemManager.getItem(AudioSystem).play('./assets/audio/Chime01.mp3');
      },
      () => {
        // onComplete
        this.destroy();
      }
    );

    action1.play();
  }

  // Event Handlers -------------------------------

  //TODO: Rethink what and where this should be
  public isCollected = false;
  public collect() {
    if (this.isCollected) {
      return;
    }
    this.isCollected = true;
    this.destroyAfterAnimation();
  }

  // Event Handlers -------------------------------
}
