import { BadConnectionSimulator } from '@shared/multiplayer/BadConnectionSimulator';
import { io, Socket } from 'socket.io-client';
import {
  GameCreateRequest,
  GameCreateResponse,
  GameJoinRequest,
  GameJoinResponse,
  GamePacketRequest,
  GamePacketResponse,
  PacketRequest,
  PacketResponse,
  SessionStartRequest,
  SessionStartResponse,
} from '@shared/multiplayer/Packet';
import { MultiplayerSocket } from '@shared/multiplayer/MultiplayerSocket';

export class MultiplayerSocketClient extends MultiplayerSocket {
  // Properties -----------------------------------
  public get targetLatencyMS(): number {
    return this._badConnectionSimulator.targetLatencyMS;
  }

  public get targetPacketLoss(): number {
    return this._badConnectionSimulator.targetPacketLoss;
  }

  public nextTargetLatency() {
    this._badConnectionSimulator.nextTargetLatency();
  }

  public nextTargetPacketLoss() {
    this._badConnectionSimulator.nextTargetPacketLoss();
  }

  public get isConnected(): boolean {
    return this._isConnected;
  }

  public get isGameJoined(): boolean {
    return this._hasJoinedGame;
  }

  public get isSessionStarted(): boolean {
    return this._isSessionStarted;
  }

  // Fields ---------------------------------------
  private _hasJoinedGame: boolean = false;
  private _isSessionStarted: boolean = false;
  private _isConnected: boolean = false;
  private _badConnectionSimulator: BadConnectionSimulator = new BadConnectionSimulator();
  // Initialization -------------------------------
  constructor() {
    super();
  }

  public override async initializeAsync(): Promise<any> {
    // Super
    await super.initializeAsync();

    // Local
    if (this.isInitialized) {
      return;
    }

    // Local
    this._isInitialized = true;

    this._socket = io('http://localhost:3001');

    this._socket.on('connect', () => {
      this.consoleLog('Client connected to server');

      this._isConnected = true;

      const request = new SessionStartRequest();
      this.emitRequest(request);
    });

    this.onResponse(SessionStartResponse, (response) => {
      this._isSessionStarted = true;
      this._hasJoinedGame = false;
      const request = new GameCreateRequest();
      this.emitRequest(request);
    });

    this.onResponse(GameCreateResponse, (response) => {
      const request = new GameJoinRequest();
      this.emitRequest(request);
    });

    this.onResponse(GameJoinResponse, (response) => {
      this._hasJoinedGame = true;
      const request = new GamePacketRequest(11, 22);
      this.emitRequest(request);
    });

    this.onResponse(GamePacketResponse, (response) => {});

    this._socket.on('disconnect', () => {
      this._isSessionStarted = false;
      this._hasJoinedGame = false;
      this._isConnected = false;
      this.consoleLog(`Client disconnected from server`);
    });
  }

  // Methods ------------------------------

  public async emitRequest<T extends PacketRequest>(request: T) {
    //Check type
    if (!(request instanceof PacketRequest)) {
      //this.consoleLog(`!!!!emitRequest() failed. Wrong type of ${(request as any).constructor.name}.`);
      return;
    }

    if (this._badConnectionSimulator.wasPacketLost()) {
      return;
    }
    await this._badConnectionSimulator.simulateLatencyAsync();

    //Emit only proper type
    this.emitPacket(request);
  }

  public onResponse<T extends PacketResponse>(ResponseClass: new () => T, onRequestCallback: (request: T) => void): void {
    this.onPacket(ResponseClass, onRequestCallback);
  }

  // Event Handlers -------------------------------
}
