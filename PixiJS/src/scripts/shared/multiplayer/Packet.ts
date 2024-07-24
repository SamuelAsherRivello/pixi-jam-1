export class Packet {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    toJSON() {
        return JSON.stringify(this);
    }

    static fromJSON<T extends Packet>(json: string, cls: new (...args: any[]) => T): T {
        const obj = JSON.parse(json);
        return new cls(obj.name);
    }
}

export class Request extends Packet {
    constructor(name: string) {
        super(name);
    }
}

export class Response extends Packet {
    constructor(name: string) {
        super(name);
    }
}

export class SessionStartRequest extends Request {
    constructor() {
        super("SessionStartRequest");
    }
}

export class SessionStartResponse extends Response {
    constructor() {
        super("SessionStartResponse");
    }
}
