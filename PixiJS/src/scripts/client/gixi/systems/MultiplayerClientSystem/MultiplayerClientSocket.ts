import { BadConnectionSimulator } from '@client/core/networking/BadConnectionSimulator';
import { fastCopy } from 'pixi.js';
import { io, Socket } from 'socket.io-client';

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////////   COPY THE BELOW ////////////////////////////////

export class MultiplayerSocket {
  // Properties -----------------------------------
  get isInitialized(): boolean {
    return this._isInitialized;
  }

  set socket(socket: Socket) {
    this._socket = socket;
  }

  get socket(): Socket {
    return this._socket;
  }

  // Fields ---------------------------------------
  protected _socket!: Socket;
  protected _isInitialized: boolean = false;
  protected isDebug: boolean = true;

  // Initialization -------------------------------
  constructor() {}

  public async initializeAsync(): Promise<any> {}

  requireIsInitialized() {
    if (!this.isInitialized) {
      throw new Error('requireIsInitialized.');
    }
  }

  // Methods ------------------------------
  protected consoleLog(msg: string) {
    if (!this.isDebug) {
      return;
    }
    console.log(`[${this.constructor.name}] ${msg}`);
  }

  protected emitPacket(packet: Packet): void {
    this._socket.emit(packet.constructor.name, JSON.stringify(packet));
  }

  protected onPacket<T extends Packet>(PacketClass: new () => T, onCallback: (t: T) => void): void {
    //this.consoleLog(`onPacket() ${PacketClass.name}`);

    this._socket.on(PacketClass.name, (packetString: string) => {
      console.log(packetString);
      const packet = JSON.parse(packetString) as T;
      console.log(packet);
      onCallback(packet);
    });
  }
  // Event Handlers ------------------------------
}

class Packet {
  public get name(): string {
    return this.constructor.name;
  }

  public data: any;

  constructor() {}
}

export class Request extends Packet {
  constructor() {
    super();
  }
}

export class Response extends Packet {
  constructor() {
    super();
  }
}

class SessionStartRequest extends Request {
  constructor() {
    super();
  }
}

class SessionStartResponse extends Response {
  constructor() {
    super();
  }
}

class GameCreateRequest extends Request {
  constructor() {
    super();
  }
}

class GameCreateResponse extends Response {
  constructor() {
    super();
  }
}

class GameJoinRequest extends Request {
  constructor() {
    super();
  }
}

class GameJoinResponse extends Response {
  constructor() {
    super();
  }
}

export class GamePacketRequest extends Request {
  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    super();
    if (x !== undefined && y !== undefined) {
      this.data = { x, y };
    } else {
      this.data = { x: 0, y: 0 };
    }
  }
}

export class GamePacketResponse extends Response {
  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    super();
    if (x !== undefined && y !== undefined) {
      this.data = { x, y };
    } else {
      this.data = { x: 0, y: 0 };
    }
  }
}

//////////////////////   COPY THE ABOVE ////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

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

    this.socket = io('http://localhost:3001');

    this.socket.on('connect', () => {
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

    this.socket.on('disconnect', () => {
      this._isSessionStarted = false;
      this._hasJoinedGame = false;
      this._isConnected = false;
      this.consoleLog(`Client disconnected from server`);
    });
  }

  // Methods ------------------------------

  public async emitRequest<T extends Request>(request: T) {
    //Check type
    if (!(request instanceof Request)) {
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

  public onResponse<T extends Response>(ResponseClass: new () => T, onRequestCallback: (request: T) => void): void {
    this.onPacket(ResponseClass, onRequestCallback);
  }

  // Event Handlers -------------------------------
}
