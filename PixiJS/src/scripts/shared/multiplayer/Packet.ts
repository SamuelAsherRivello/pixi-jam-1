/**
 * IMPORTANT FOR FILES OUTSIDE OF /CLIENT/: Always import using `.js` even though it's a `.ts` file.
 */

export class Client {
  public socketId: string = '';
  constructor(socketId: string) {
    this.socketId = socketId;
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
    this.data = { socketId: -1 };
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
  constructor();
  constructor(guid: string);
  constructor(guid?: string) {
    super();
    if (guid !== undefined) {
      this.data = { guid };
    } else {
      this.data = { guid: Guid.createNew() };
    }
  }
}

export class GameCreateRequest extends PacketRequest {
  constructor() {
    super();
  }
}

export class GameCreateResponse extends PacketResponse {
  constructor();
  constructor(guid: string);
  constructor(guid?: string) {
    super();
    if (guid !== undefined) {
      this.data = { guid };
    } else {
      this.data = { guid: Guid.createNew() };
    }
  }
}
export class GameJoinRequest extends PacketRequest {
  constructor() {
    super();
  }
}

export class GameJoinResponse extends PacketResponse {
  constructor() {
    super();
  }
}

export class GamePacketRequest extends PacketRequest {
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

export class GamePacketResponse extends PacketResponse {
  constructor();
  constructor(socketId: string, x: number, y: number);
  constructor(socketId?: string, x?: number, y?: number) {
    super();
    if (x !== undefined && y !== undefined) {
      this.data = { socketId, x, y };
    } else {
      this.data = { socketId: '-1', x: -1, y: -1 };
    }
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
