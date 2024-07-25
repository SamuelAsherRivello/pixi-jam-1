import { ActorStaticConfiguration } from '@client/gixi/ActorStatic';
import { GixiApplication } from '@client/gixi/GixiApplication';
import { BaseSpawnpointTilemapObject } from './base/BaseSpawnpointTilemapObject';

/**
 * Represents a spawnpoint in the game.
 *
 */
export class PlayerSpawnpointTilemapObject extends BaseSpawnpointTilemapObject {
  // Properties -----------------------------------

  // Fields ---------------------------------------

  // Initialization -------------------------------
  constructor(app: GixiApplication, configuration?: Partial<ActorStaticConfiguration>) {
    super(app, configuration);

    // Redeclare anything from super
    // that you want differently here
    this.label = PlayerSpawnpointTilemapObject.name;
  }

  public override async initializeAsync() {
    // Super
    await super.initializeAsync();

    // Local
    // Do any additional initialization here
  }

  // Methods --------------------------------------

  // Event Handlers -------------------------------
}
