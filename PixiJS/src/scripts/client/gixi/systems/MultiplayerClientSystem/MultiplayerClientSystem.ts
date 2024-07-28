import { GixiApplication } from '@client/gixi/GixiApplication';
import { SystemBase } from '../base/SystemBase';
import * as PIXI from 'pixi.js';
import { MultiplayerSocketClient } from './MultiplayerSocketClient';
import { Client, GamePacketRequest, PacketRequest, PacketResponse } from '@shared/multiplayer/Packet';

/**
 * Handles keyboard input and maintains the state of keys.
 */
export class MultiplayerClientSystem extends SystemBase {
  // Properties -----------------------------------
  public get targetLatencyMS(): number {
    return this._multiplayerSocketClient.targetLatencyMS;
  }

  public get clients(): Client[] {
    return this._multiplayerSocketClient.clients;
  }

  public get targetPacketLoss(): number {
    return this._multiplayerSocketClient.targetPacketLoss;
  }

  public get isConnected(): boolean {
    return this._multiplayerSocketClient.isConnected;
  }

  public get localSocketId(): string {
    return this._multiplayerSocketClient.localSocketId;
  }

  public get isGameJoined(): boolean {
    return this._multiplayerSocketClient.isGameJoined;
  }

  public get isSessionStarted(): boolean {
    return this._multiplayerSocketClient.isSessionStarted;
  }

  // Fields ---------------------------------------
  private _multiplayerSocketClient: MultiplayerSocketClient;
  private _isDebug = true;

  // Initialization -------------------------------
  constructor(app: GixiApplication) {
    super(app);

    this._multiplayerSocketClient = new MultiplayerSocketClient();
  }

  public override async initializeAsync(): Promise<any> {
    if (this.isInitialized) {
      return;
    }

    // Local
    await this._multiplayerSocketClient.initializeAsync();
    this._isInitialized = true;
  }

  // Methods --------------------------------------
  public nextTargetLatency() {
    this._multiplayerSocketClient.nextTargetLatency();
  }

  public nextTargetPacketLoss() {
    this._multiplayerSocketClient.nextTargetPacketLoss();
  }

  public emitGamePacketRequest<T extends GamePacketRequest>(request: T): void {
    this.emitRequest(request);
  }

  protected emitRequest<T extends PacketRequest>(request: T): void {
    if (!this._multiplayerSocketClient.isGameJoined) {
      //
      //Only log here if you are in a multiplayer session
      if (this._multiplayerSocketClient.isSessionStarted) {
        console.log(`${this.constructor.name}.emitRequest() : Not connected to game server. Request:`, request);
      }
      return;
    }
    this._multiplayerSocketClient.emitRequest(request);
  }

  // Event Handlers -------------------------------
  public onResponse<T extends PacketResponse>(ResponseClass: new (...args: any[]) => T, onRequestCallback: (request: T) => void): void {
    this._multiplayerSocketClient.onResponse(ResponseClass, onRequestCallback);
  }

  public override onTick(ticker: PIXI.Ticker): void {
    //Use if desired
  }
}
