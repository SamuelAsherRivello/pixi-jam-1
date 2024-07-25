import { io, Socket } from 'socket.io-client';
import { GixiApplication } from '../GixiApplication';
import { SystemBase } from './base/SystemBase';
import * as PIXI from 'pixi.js';

/**
 * Handles keyboard input and maintains the state of keys.
 */
export class MultiplayerClientSystem extends SystemBase {
  // Fields ---------------------------------------
  private _packetManager: PacketManager;
  private _isDebug = true;

  // Initialization -------------------------------
  constructor(app: GixiApplication) {
    super(app);

    this._packetManager = new PacketManager();
  }

  public override async initializeAsync(): Promise<any> {
    if (this.isInitialized) {
      return;
    }

    this.consoleLog(`initializeAsync()`);

    // Local
    this._isInitialized = true;

    this._packetManager.socket = io('http://localhost:3001');

    this._packetManager.socket.on('connect', () => {
      this.consoleLog('client connected to server 456');

      const request = new SessionStartRequest();
      this.emitRequest(request);
    });

    this.onResponse(SessionStartResponse, (response) => {
      console.log('Received packet 6 :', response);

      const request = new GameCreateRequest();
      this.emitRequest(request);
    });

    this.onResponse(GameCreateResponse, (response) => {
      console.log('Received packet 10 :', response);

      const request = new GameJoinRequest();

      this.emitRequest(request);
    });

    this.onResponse(GameJoinResponse, (response) => {
      console.log('Received packet 1010 :', response);

      const request = new GamePacketRequest();

      this.emitRequest(request);
    });

    this.onResponse(GamePacketResponse, (response) => {
      console.log('Received packet 22 :', response);
    });

    this._packetManager.socket.on('disconnect', () => {
      this.consoleLog('disconnected from server');
    });
  }

  // Methods ------------------------------
  public emitRequest(response: Request): void {
    if (!(response instanceof Request)) {
      this.consoleLog(`!!!!emitRequest() ${response}} wrong type !!!!`);
    }

    this._packetManager.emitPacket(response);
  }

  private onResponse<T extends Response>(ResponseClass: new () => T, onRequestCallback: (request: T) => void): void {
    this._packetManager.onPacket(ResponseClass, onRequestCallback);
  }

  protected consoleLog(msg: string) {
    if (!this._isDebug) {
      return;
    }
    console.log(`[${this.constructor.name}] ${msg}`);
  }

  // Event Handlers -------------------------------
  public override onTick(ticker: PIXI.Ticker): void {
    //Use if desired
  }
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////////   COPY THE BELOW ////////////////////////////////

export class PacketManager {
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

  public emitPacket(packet: Packet): void {
    this._socket.emit(packet.constructor.name, JSON.stringify(packet));
  }

  public onPacket<T extends Packet>(PacketClass: new () => T, onCallback: (request: T) => void): void {
    this.consoleLog(`onPacket() ${PacketClass.name}`);
    this._socket.on(PacketClass.name, (data: string) => {
      const request = Packet.fromJSON(data, PacketClass);
      onCallback(request);
    });
  }
  // Event Handlers ------------------------------
}

class Packet {
  public get name(): string {
    return this.constructor.name;
  }
  constructor() {}

  static fromJSON<T extends Packet>(json: string, cls: new (...args: any[]) => T): T {
    const obj = typeof json === 'string' ? JSON.parse(json) : json;
    return new cls(obj.name);
  }
}

class Request extends Packet {
  constructor() {
    super();
  }
}

class Response extends Packet {
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

class GamePacketRequest extends Request {
  constructor() {
    super();
  }
}

class GamePacketResponse extends Response {
  constructor() {
    super();
  }
}

//////////////////////   COPY THE ABOVE ////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
