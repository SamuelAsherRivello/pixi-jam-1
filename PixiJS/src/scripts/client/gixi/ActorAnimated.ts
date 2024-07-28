import { ActorContainer, ActorContainerConfiguration } from './ActorContainer';
import { GixiApplication } from './GixiApplication';
import { IActor } from './base/IActor';
import { IInitializableAsync } from './base/IInitializeAsync';
import * as PIXI from 'pixi.js';
import { ITickable } from './base/ITickable';
import { MultiAnimatedSprite } from '@client/core/multiAnimatedSprites/MultiAnimatedSprite';

/**
 * Configuration
 */
export interface ActorAnimatedConfiguration extends ActorContainerConfiguration {
  spriteSheetDataUrl: string;
}

const ActorAnimatedConfigurationDefault: ActorAnimatedConfiguration = {
  //populate urls here or pass them into the ActorAnimated constructor
  spriteSheetDataUrl: '',
  canCollisionCheck: true,
  isTickable: true,
  isResizable: true,
};

/**
 * Represents a coin in the game.
 *
 */
export class ActorAnimated extends ActorContainer implements IInitializableAsync, IActor, ITickable {
  // Properties -----------------------------------
  public override get configuration(): ActorAnimatedConfiguration {
    return this._configuration as ActorAnimatedConfiguration;
  }

  // Fields ---------------------------------------
  protected _multiAnimatedSprite!: MultiAnimatedSprite;

  // Initialization -------------------------------
  constructor(app: GixiApplication, configuration?: Partial<ActorAnimatedConfiguration>) {
    super(app, { ...ActorAnimatedConfigurationDefault, ...configuration });

    // Redeclare anything from super
    // that you want differently here
    this.label = ActorAnimated.name;

    this.initializeAsync();
  }

  public override async initializeAsync() {
    // Super
    await super.initializeAsync();

    //TODO:
    //1. Populate ActorAnimatedConfiguration above
    //      with whatever is needed to pass into the constructor.
    //      (See how ActorStatic does it.)
    //2. Do some error checking here
    //      (See how ActorStatic does it.)
    //3. Update this snippet below as needed. Done!
    this._multiAnimatedSprite = new MultiAnimatedSprite(this.configuration.spriteSheetDataUrl);
    await this._multiAnimatedSprite.initializeAndReparent(this._app, this);

    // Local
    //Do any additional initialization here
  }

  // Methods --------------------------------------

  // Event Handlers -------------------------------

  public override onTick(ticker: PIXI.Ticker): void {
    // Super
    super.onTick(ticker);

    // Local
    //Do any additional things here
  }
}
