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
  public get clientId(): string {
    return this._clientId;
  }
  private _clientId: string = '-1'; //will override before sending

  public setClientIdBeforeEmitting(clientId: string) {
    this._clientId = clientId;
  }
  constructor() {
    super();
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

// The specific x/y nature of this will be removed in the future
// games will subclass this to send custom objects
export class GamePacketRequest extends PacketRequest {
  public get x(): number {
    return this._x;
  }
  public get y(): number {
    return this._y;
  }
  private _x: number = -1;
  private _y: number = -1;
  constructor(x: number, y: number) {
    super();
    this._x = x;
    this._y = y;
  }
}

// The specific x/y nature of this will be removed in the future
// games will subclass this to send custom objects
export class GamePacketResponse extends PacketResponse {
  public get clientId(): string {
    return this._clientId;
  }
  public get x(): number {
    return this._x;
  }
  public get y(): number {
    return this._y;
  }
  private _clientId: string = '-1';
  private _x: number = -1;
  private _y: number = -1;
  constructor(clientId: string, x: number, y: number) {
    super();
    this._clientId = clientId;
    this._x = x;
    this._y = y;
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
