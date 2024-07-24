import { io, Socket } from "socket.io-client";
import { GixiApplication } from "../GixiApplication";
import { ISystemBase } from "./base/SystemBase";
import { SystemBase } from "./base/SystemBase";

/**
 * Handles keyboard input and maintains the state of keys.
 */
export class MultiplayerSystem extends SystemBase implements ISystemBase {

    // Fields ---------------------------------------
    public isDebug: boolean = true;
    private socket!: Socket;

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        super(app);
    }

    public override async initializeAsync(): Promise<any> {
        if (this.isInitialized) {
            return;
        }

        this.consoleLog(`initializeAsync()`);

        // Local
        this._isInitialized = true;

        this.socket = io('http://localhost:3001');

        this.socket.on('connect', () => {
            this.consoleLog('client connected to server 123');

            const request = new SessionStartRequest();
            this.socket.emit(SessionStartRequest.name, JSON.stringify(request));
        });

        this.socket.on(SessionStartResponse.name, (data) => {
            console.log('Received data 5 :', data);
            const response = Packet.fromJSON(data, SessionStartResponse);
            console.log('Received packet 6 :', response);

            const request = new GameCreateRequest();
            this.socket.emit(GameCreateRequest.name, JSON.stringify(request));

        });

        this.socket.on(GameCreateResponse.name, (data) => {
            console.log('Received data 9 :', data);
            const response = Packet.fromJSON(data, GameCreateResponse);
            console.log('Received packet 10 :', response);


            const request = new GameJoinRequest();
            this.socket.emit(GameJoinRequest.name, JSON.stringify(request));

        });

        this.socket.on(GameJoinResponse.name, (data) => {
            console.log('Received data 99 :', data);
            const request = Packet.fromJSON(data, GameJoinResponse);
            console.log('Received packet 1010 :', request);

        });

        this.socket.on('disconnect', () => {
            this.consoleLog('disconnected from server');
        });
    }

    // Methods ------------------------------

    private consoleLog(msg: string) {
        if (!this.isDebug) {
            return;
        }
        console.log(`[${(MultiplayerSystem).name}] ${msg}`);
    }
}







class Packet {

    public get name(): string {
        return this.constructor.name;
    }
    constructor() {

        console.log('Packet constructor:', this.name);
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
