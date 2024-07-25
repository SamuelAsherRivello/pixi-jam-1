/**
 * IMPORTANT FOR FILES OUTSIDE OF /CLIENT/: Always import using `.js` even though it's a `.ts` file.
 */

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
  constructor() {
    super();
  }
}

export class GameCreateRequest extends PacketRequest {
  constructor() {
    super();
  }
}

export class GameCreateResponse extends PacketResponse {
  constructor() {
    super();
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
