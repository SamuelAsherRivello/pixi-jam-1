import * as PIXI from 'pixi.js';
import { DropShadowFilter } from 'pixi-filters';
import { ActorStatic } from '../../gixi/ActorStatic';
import { MultiplayerClientSystem } from '@client/gixi/systems/MultiplayerClientSystem/MultiplayerClientSystem';
import { GamePacketResponse } from '@shared/multiplayer/Packet';

/**
 * Represents a ghost following the player using multiplayer
 *
 */
export class PlayerGhost extends ActorStatic {
  // Properties -----------------------------------

  // Fields ---------------------------------------

  // Initialization -------------------------------

  public override async initializeAsync() {
    // Super
    await super.initializeAsync();

    // OPTIONAL: Try these - https://pixijs.io/filters/
    this._sprite.filters = [new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 })];
    this._sprite.alpha = 0.5;

    // Local
    //Do any additional initialization here
    this._sprite.anchor.set(0, 0);

    this.initializeMultiplayer();
  }

  private initializeMultiplayer() {
    const multiplayerClientSystem: MultiplayerClientSystem = this._app.systemManager.getItem(MultiplayerClientSystem);

    if (!multiplayerClientSystem) {
      return;
    }

    multiplayerClientSystem.onResponse(GamePacketResponse, (response) => {
      console.log('ghost.OnResponse() :', response.data.x, response.data.y);
      this.x = response.data.x;
      this.y = response.data.y;
    });
  }

  // Methods --------------------------------------

  // Event Handlers -------------------------------

  public override onTick(ticker: PIXI.Ticker): void {
    super.onTick(ticker);
  }
}
