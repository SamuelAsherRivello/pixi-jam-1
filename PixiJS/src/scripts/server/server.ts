import { Server, Socket } from "socket.io";
import http from "http";

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////////   COPY THE BELOW ////////////////////////////////


export class PacketManager {

    // Properties -----------------------------------
    get isInitialized(): boolean {
        return this._isInitialized;
    }

    // Fields ---------------------------------------
    protected _socket!: Socket;
    protected _isInitialized: boolean = false;
    protected isDebug : boolean = true;

    // Initialization -------------------------------
    constructor() {
    }

    public async initializeAsync(): Promise<any> {

    }

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

    protected onPacket<T extends Packet>(PacketClass: new () => T, onCallback: (request: T) => void): void {
        
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
    constructor() {
    }

    static fromJSON<T extends Packet>(json: string, cls: new (...args: any[]) => T): T {
        const obj = typeof json === "string" ? JSON.parse(json) : json;
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

//////////////////////   COPY THE ABOVE ////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////












export class MultiplayerServerSystem extends PacketManager {

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
                origin: "*", // Adjust this to your client's URL if needed
                methods: ["GET", "POST"]
            }
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
            this.consoleLog('a user connected');
            this._socket = socket;

            this.onRequest(SessionStartRequest, (data) => {
                const response = new SessionStartResponse();
                this._socket.emit(SessionStartResponse.name, JSON.stringify(response));
            });

            this.onRequest(GameCreateRequest, (data) => {
                const response = new GameCreateResponse();
                this._socket.emit(GameCreateResponse.name, JSON.stringify(response));
            });

            this.onRequest(GameJoinRequest, (data) => {
                const response = new GameJoinResponse();
                this._socket.emit(GameJoinResponse.name, JSON.stringify(response));
            });

            this._socket.on('disconnect', () => {
                this.consoleLog('user disconnected');
            });
        });
    }

    private onRequest<T extends Request>(RequestClass: new () => T, onRequestCallback: (request: T) => void): void {
        
        this.onPacket(RequestClass, onRequestCallback);
    }

    // Event Handlers ------------------------------
}



const gameServer = new MultiplayerServerSystem();
gameServer.start(3001);


