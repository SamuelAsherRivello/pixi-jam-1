/**
 * IMPORTANT FOR FILES OUTSIDE OF /CLIENT/: Always import using `.js` even though it's a `.ts` file.
 */

export class Client {
  public get clientId(): string {
    return this._clientId;
  }
  private _clientId: string = '';
  constructor(clientId: string) {
    this._clientId = clientId;
  }
}

export class Packet {
  public get name(): string {
    return this.constructor.name;
  }

  public data: any;

  constructor() {}
}

export class PacketRequest extends Packet {
  constructor() {
    super();
    //will override before sending
    this.data = { clientId: -1 };
  }
}

export class PacketResponse extends Packet {
  constructor() {
    super();
  }
}

export class SessionStartRequest extends PacketRequest {
  constructor() {
    super();
  }
}

export class SessionStartResponse extends PacketResponse {
  constructor(guid: string) {
    super();
    this.data = { guid };
  }
}

export class GameCreateRequest extends PacketRequest {
  constructor() {
    super();
  }
}

export class GameCreateResponse extends PacketResponse {
  constructor(guid: string) {
    super();
    this.data = { guid };
  }
}
export class GameJoinRequest extends PacketRequest {
  constructor() {
    super();
  }
}

export class GameJoinResponse extends PacketResponse {
  public get clients(): Client[] {
    return this.data.clients;
  }

  constructor(clients: Client[] = []) {
    super();
    this.data = { clients };
  }
}

export class GameLeaveRequest extends PacketRequest {
  constructor() {
    super();
  }
}

//The server will call GameLeaveResponse() without any
//client calling GameLeaveRequest when a client disconnects
export class GameLeaveResponse extends PacketResponse {
  public get clients(): Client[] {
    return this.data.clients;
  }

  constructor(clients: Client[] = []) {
    super();
    this.data = { clients };
  }
}

export class GamePacketRequest extends PacketRequest {
  constructor(x: number, y: number) {
    super();
    this.data = { x, y };
  }
}

export class GamePacketResponse extends PacketResponse {
  constructor(clientId: string, x: number, y: number) {
    super();
    this.data = { clientId: clientId, x, y };
  }
}

export class Guid {
  private static readonly chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private static LengthProduction = 22;
  private static LengthDevelopment = 8;

  public static createNew(length: number = Guid.LengthDevelopment): string {
    let result = '';
    const timestamp = new Date().getTime().toString(36);

    // Add timestamp
    result += timestamp;

    // Add random characters to fill the remaining length
    while (result.length < length) {
      result += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
    }

    // Ensure the result is exactly the specified length
    return result.slice(0, length);
  }
}
