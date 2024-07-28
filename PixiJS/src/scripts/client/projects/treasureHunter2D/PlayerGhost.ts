import * as PIXI from 'pixi.js';
import { DropShadowFilter } from 'pixi-filters';
import { ActorStatic } from '../../gixi/ActorStatic';
import { MultiplayerClientSystem } from '@client/gixi/systems/MultiplayerClientSystem/MultiplayerClientSystem';
import { GamePacketResponse } from '@shared/multiplayer/Packet';
import { Client } from '../../../shared/multiplayer/Packet';

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
      const isLocalClient = response.clientId == multiplayerClientSystem.localClientId;

      console.log(`r=${response.clientId},l=${multiplayerClientSystem.localClientId}`);

      const clientIndex = multiplayerClientSystem.clients.findIndex((c) => c.clientId == response.clientId);
      const clientCount = multiplayerClientSystem.clients.length;
      if (!isLocalClient) {
        this.rotation = 45;
      } else {
        this.rotation = 0;
      }

      console.log(`[${clientIndex}] ghost.OnResponse() :`, clientCount, isLocalClient, response.x, response.y);

      let newPosition = new PIXI.Point(response.x, response.y);

      //TODO: toGlobal works, but is only needed if the player is on viewport
      //and the ghost is on the stage. If both are on the viewport, remove this
      //newPosition = this._app.viewport.toGlobal(newPosition);
      this.position = newPosition;
    });
  }

  // Methods --------------------------------------

  // Event Handlers -------------------------------

  public override onTick(ticker: PIXI.Ticker): void {
    super.onTick(ticker);
  }
}
