import { Server, Socket } from 'socket.io';
import http from 'http';

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////////   COPY THE BELOW ////////////////////////////////

export class MultiplayerSocket {
  // Properties -----------------------------------
  get isInitialized(): boolean {
    return this._isInitialized;
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

  protected consoleLogError(msg: string) {
    console.error(`[${this.constructor.name}] ${msg}`);
  }

  protected emitPacket(packet: Packet): void {
    this._socket.emit(packet.constructor.name, JSON.stringify(packet));
  }

  protected onPacket<T extends Packet>(PacketClass: new () => T, onCallback: (t: T) => void): void {
    this.consoleLog(`onPacket() ${PacketClass.name}`);

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
      this.data = { x: -1, y: -1 };
    }
    console.log('sending : ' + this.data.x);
  }
}

//////////////////////   COPY THE ABOVE ////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

export class MultiplayerServerSystem extends MultiplayerSocket {
  // Properties -----------------------------------

  // Fields ---------------------------------------
  private httpServer: http.Server;
  private ioServer: Server;

  // Initialization -------------------------------
  constructor() {
    super();
    this.httpServer = http.createServer();
    this.ioServer = new Server(this.httpServer, {
      cors: {
        origin: '*', // Adjust this to your client's URL if needed
        methods: ['GET', 'POST'],
      },
    });
  }

  public async initializeAsync(): Promise<any> {
    //Super
    await super.initializeAsync();

    //Local
  }

  // Methods ------------------------------
  public start(port: number): void {
    this.httpServer.listen(port, () => {
      this.consoleLog(`Server started on port ${port}`);
    });

    // Subscribing within here... any chance it'll double-subscribe on reconnect?
    this.ioServer.on('connection', (socket) => {
      this.consoleLog('Server connection by client socked.id = ' + socket.id);
      this._socket = socket;

      this.onRequest(SessionStartRequest, (response) => {
        this.emitResponse(new SessionStartResponse());
      });

      this.onRequest(GameCreateRequest, (response) => {
        this.emitResponse(new GameCreateResponse());
      });

      this.onRequest(GameJoinRequest, (response) => {
        this.emitResponse(new GameJoinResponse());
      });

      this.onRequest(GamePacketRequest, (response) => {
        this.emitResponse(new GamePacketResponse(response.data.x, response.data.y));
      });

      this._socket.on('disconnect', () => {
        this.consoleLog('user disconnected2');
      });
    });
  }

  protected emitResponse<T extends Response>(response: T): void {
    //Check type
    if (!(response instanceof Response)) {
      this.consoleLogError(`!!!!emitResponse() failed. Wrong type of ${(response as any).constructor.name}.`);
      return;
    }

    //Emit only proper type
    console.log('response: ' + response.constructor.name + ' was : ' + response);
    this.emitPacket(response);
  }

  protected onRequest<T extends Request>(RequestClass: new () => T, onRequestCallback: (request: T) => void): void {
    this.onPacket(RequestClass, onRequestCallback);
  }

  // Event Handlers ------------------------------
}

const gameServer = new MultiplayerServerSystem();
gameServer.start(3001);
