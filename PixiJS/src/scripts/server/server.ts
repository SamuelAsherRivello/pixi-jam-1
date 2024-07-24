import { Server } from "socket.io";
import http from "http";
import { json } from "stream/consumers";

const server = http.createServer();
const io = new Server(server, {
    cors: {
        origin: "*", // Adjust this to your client's URL if needed
        methods: ["GET", "POST"]
    }
});

server.listen(3001, () => {
    console.log('Server started on port 3001');
});

io.on('connection', (socket) => {
    console.log('a user connected2');
    socket.on(SessionStartRequest.name, (data) => {
        console.log('Received data 1 :', data);
        const request = Packet.fromJSON(data, SessionStartRequest);
        console.log('Received packet 2 :', request);

        const response = new SessionStartResponse();
        socket.emit(SessionStartResponse.name, JSON.stringify(response));
    });


    socket.on(GameCreateRequest.name, (data) => {
        console.log('Received data A :', data);
        const request = Packet.fromJSON(data, GameCreateRequest);
        console.log('Received packet B :', request);

        const response = new GameCreateResponse();
        socket.emit(GameCreateResponse.name, JSON.stringify(response));

    });

    socket.on(GameJoinRequest.name, (data) => {
        console.log('Received data aaa :', data);
        const request = Packet.fromJSON(data, GameJoinRequest);
        console.log('Received packet bbb', request);

        const response = new GameJoinResponse();
        socket.emit(GameJoinResponse.name, JSON.stringify(response));

    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});





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
