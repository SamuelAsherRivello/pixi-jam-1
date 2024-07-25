import { Socket } from 'socket.io';

export class Packet {
  public get name(): string {
    return this.constructor.name;
  }

  public data: any;

  constructor() {}
}

export class Request extends Packet {
  constructor() {
    super();
  }
}

export class Response extends Packet {
  constructor() {
    super();
  }
}

export class SessionStartRequest extends Request {
  constructor() {
    super();
  }
}

export class SessionStartResponse extends Response {
  constructor() {
    super();
  }
}

export class GameCreateRequest extends Request {
  constructor() {
    super();
  }
}

export class GameCreateResponse extends Response {
  constructor() {
    super();
  }
}

export class GameJoinRequest extends Request {
  constructor() {
    super();
  }
}

export class GameJoinResponse extends Response {
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
