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

        // this.socket.on('connect', () => {
        //     this.consoleLog('connected to server');

        //     const request = new SessionStartRequest();
        //     this.socket.emit(SessionStartRequest.name, request.toJSON());
        // });

        // this.socket.on(SessionStartResponse.name, (data: string) => {
        //     const response = Packet.fromJSON(data, SessionStartResponse);
        //     this.consoleLog(`Received response: ${JSON.stringify(response)}`);
        // });

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
