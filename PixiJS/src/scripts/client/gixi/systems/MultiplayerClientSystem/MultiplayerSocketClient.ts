import { BadConnectionSimulator } from '@shared/multiplayer/BadConnectionSimulator';
import { io, Socket } from 'socket.io-client';
import {
  Client,
  GameCreateRequest,
  GameCreateResponse,
  GameJoinRequest,
  GameJoinResponse,
  GameLeaveResponse,
  GamePacketRequest,
  GamePacketResponse,
  PacketRequest,
  PacketResponse,
  SessionStartRequest,
  SessionStartResponse,
} from '@shared/multiplayer/Packet';
import { MultiplayerSocket, TypeConverter } from '@shared/multiplayer/MultiplayerSocket';

export class MultiplayerSocketClient extends MultiplayerSocket {
  // Properties -----------------------------------

  private get SocketAsClient(): Socket {
    return this._socket as Socket;
  }

  public get targetLatencyMS(): number {
    return this._badConnectionSimulator.targetLatencyMS;
  }

  public get clients(): Client[] {
    return this._clients;
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

  public get localClientId(): string {
    return this._socket ? this._socket.id : '-1';
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
  private _clients: Client[];
  private _badConnectionSimulator: BadConnectionSimulator = new BadConnectionSimulator();
  // Initialization -------------------------------
  constructor() {
    super();
    this._clients = [];
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

    this._socket = io('http://localhost:3001', {
      transports: ['websocket'],
      autoConnect: false,
    });

    this._socket.on('connect', () => {
      this.consoleLog('Client connected to server');

      this._isConnected = true;
      this._socket;

      const request = new SessionStartRequest();
      this.emitRequest(request);
    });

    this.onResponse(SessionStartResponse, (response) => {
      this._isSessionStarted = true;
      this._hasJoinedGame = false;
      console.log('SessionStartResponse: ', response);
      const request = new GameCreateRequest();
      this.emitRequest(request);
    });

    this.onResponse(GameCreateResponse, (response) => {
      //
      console.log('GameCreateResponse: ', response);
      //
      const request = new GameJoinRequest();
      this.emitRequest(request);
    });

    this.onResponse(GameJoinResponse, (response) => {
      //
      console.log('GameJoinResponse: #clients = ' + response.clients.length);
      this._clients = response.clients;
      //
      this._hasJoinedGame = true;
      const request = new GamePacketRequest(11, 22);
      this.emitRequest(request);
    });

    this.onResponse(GameLeaveResponse, (response) => {
      //
      console.log('GameLeaveResponse: #clients = ' + response.clients.length);
      this._clients = response.clients;
    });

    this.onResponse(GamePacketResponse, (response) => {});

    this._socket.on('disconnect', () => {
      this._isSessionStarted = false;
      this._hasJoinedGame = false;
      this._isConnected = false;
      this.consoleLog(`Client disconnected from server`);

      // Attempt to reconnect after a short delay
      setTimeout(() => {
        console.log('!!!!!!reconnetion attempt');
        if (!this._socket.connected) {
          this._socket.connect();
        }
      }, 5000);
    });
  }

  // Methods ------------------------------
  public Connect() {
    if (!this._socket.connected) {
      this.SocketAsClient.connect();
    }
  }

  public Disconnect() {
    if (this._socket.connected) {
      this.SocketAsClient.disconnect();
    }
  }

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

    request.setClientIdBeforeEmitting(this._socket.id);

    //Emit only proper type
    this.emitPacket(request);
  }

  public onResponse<T extends PacketResponse>(ResponseClass: new (...args: any[]) => T, onResponseCallback: (request: T) => void): void {
    this.onPacket(ResponseClass, onResponseCallback);
  }

  // Event Handlers -------------------------------
}
