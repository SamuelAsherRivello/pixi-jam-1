import { Server } from "socket.io";
import http from "http";


class MultiplayerServerSystem {
    private server: http.Server;
    private io: Server;
    private socket!: any;

    constructor() {
        this.server = http.createServer();
        this.io = new Server(this.server, {
            cors: {
                origin: "*", // Adjust this to your client's URL if needed
                methods: ["GET", "POST"]
            }
        });

    }

    public start(port: number) {
        this.server.listen(port, () => {
            console.log(`Server started on port ${port} `);
        });

        //TODO: Subscribing within here... any chance it'll double-subscribe on reconnect?
        this.io.on('connection', (socket) => {

            console.log('a user connected');
            this.socket = socket;

            this.onRequest(SessionStartRequest, (data) => {
                const response = new SessionStartResponse();
                socket.emit(SessionStartResponse.name, JSON.stringify(response));
            });

            this.onRequest(GameCreateRequest, (data) => {
                const response = new GameCreateResponse();
                socket.emit(GameCreateResponse.name, JSON.stringify(response));
            });

            this.onRequest(GameJoinRequest, (data) => {
                const response = new GameJoinResponse();
                socket.emit(GameJoinResponse.name, JSON.stringify(response));
            });

            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });

    }

    private onRequest<T extends Request>(RequestClass: new () => T, onRequestCallback: (request: T) => void) {

        console.log('...onRequest() Initialize :', RequestClass.name);
        this.socket.on(RequestClass.name, (data: string) => {

            const request = Packet.fromJSON(data, RequestClass);
            console.log(`...onRequest (${RequestClass.name}, ${request})`);
            onRequestCallback(request);
        });
    }



}


class Packet {

    public get name(): string {
        return this.constructor.name;
    }
    constructor() {

        console.log('Creating: ', this.name);
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


////////////////////////////////////////////////////////////////////////
const gameServer = new MultiplayerServerSystem();
gameServer.start(3001);
////////////////////////////////////////////////////////////////////////



// import { Server } from "socket.io";
// import http from "http";



// class MultiplayerServer {
//     private server: http.Server;
//     private io: Server;
//     private socket!: any;

//     constructor() {
//         this.server = http.createServer();
//         this.io = new Server(this.server, {
//             cors: {
//                 origin: "*", // Adjust this to your client's URL if needed
//                 methods: ["GET", "POST"]
//             }
//         });

//     }

//     public start(port: number) {
//         this.server.listen(port, () => {
//             console.log(`Server started on port ${port} `);
//         });

//         this.io.on('connection', (socket) => {
//             console.log('a user connected');
//             this.socket = socket; // Store the connected socket
//             this.setupRequestHandlers();

//             this.io.on(SessionStartRequest.name, (request: any) => {
//                 console.log("here comes a thing: " + request);

//                 const response = new SessionStartResponse();
//                 socket.emit(SessionStartResponse.name, JSON.stringify(response));
//             });
//         });

//     }

//     private setupRequestHandlers() {

//         console.log("setupRequestHandlers()");

//         this.io.on(SessionStartRequest.name, (request: any) => {
//             console.log("here comes a thing: " + request);
//         });


//         this.onRequest(SessionStartRequest, (request: SessionStartRequest) => {
//             console.log('Server Handles Request:', request);
//             const response = new SessionStartResponse();
//             this.socket.emit(SessionStartResponse.name, JSON.stringify(response));
//         });

//         this.onRequest(GameCreateRequest, (request: GameCreateRequest) => {
//             console.log('Server Handles Request:', request);
//             const response = new GameCreateResponse();
//             this.socket.emit(GameCreateResponse.name, JSON.stringify(response));
//         });

//         this.onRequest(GameJoinRequest, (request: GameJoinRequest) => {
//             console.log('Server Handles Request:', request);
//             const response = new GameJoinResponse();
//             this.socket.emit(GameJoinResponse.name, JSON.stringify(response));
//         });

//         this.io.on('disconnect', () => {
//             console.log('user disconnected');
//         });
//     }

//     private onRequest<T extends Packet>(RequestClass: new () => T, handler: (request: T) => void) {

//         console.log('onRequest INIT:', RequestClass.name);
//         this.io.on(RequestClass.name, (data: string) => {

//             console.log("Got something---------")
//             const request = Packet.fromJSON(data, RequestClass);
//             handler(request);
//         });
//     }
// }


// class Packet {
//     public name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     toJSON() {
//         return JSON.stringify(this);
//     }

//     static fromJSON<T extends Packet>(json: string, cls: new (...args: any[]) => T): T {
//         const obj = JSON.parse(json);
//         return new cls(obj.name);
//     }
// }

// class Request extends Packet {
//     constructor(name: string) {
//         super(name);
//     }
// }

// class Response extends Packet {
//     constructor(name: string) {
//         super(name);
//     }
// }

// class SessionStartRequest extends Request {
//     constructor() {
//         super("SessionStartRequest");
//     }
// }

// class SessionStartResponse extends Response {
//     constructor() {
//         super("SessionStartResponse");
//     }
// }

// class GameCreateRequest extends Request {
//     constructor() {
//         super("GameCreateRequest");
//     }
// }

// class GameCreateResponse extends Response {
//     constructor() {
//         super("GameCreateResponse");
//     }
// }

// class GameJoinRequest extends Request {
//     constructor() {
//         super("GameJoinRequest");
//     }
// }

// class GameJoinResponse extends Response {
//     constructor() {
//         super("GameJoinResponse");
//     }
// }
