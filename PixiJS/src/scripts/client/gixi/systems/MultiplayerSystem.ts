import { Socket } from "socket.io";
import { GixiApplication } from "../GixiApplication";
import { ISystemBase } from "./base/SystemBase";
import { SystemBase } from "./base/SystemBase";
import { io } from 'socket.io-client';

/**
 * 
 */
//TODO: I think all systems are keyed by class not interface, so is there any point of having IMultiplayerSystem?
export interface IMultiplayerSystem extends ISystemBase {

    // Properties -----------------------------------

    // Methods --------------------------------------
}


/**
 * Handles keyboard input and maintains the state of keys.
 */
export class MultiplayerSystem extends SystemBase implements IMultiplayerSystem {

    // Fields ---------------------------------------
    public isDebug: boolean = false;

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        super(app);

    }

    public override async initializeAsync(): Promise<any> {

        if (this.isInitialized) {
            return;
        }

        this.consoleLog(`initializeAsync()`)

        //Local
        this._isInitialized = true;



        //TODO: Maybe use the MANAGER from Socket instead of just the SOCKET itself?
        //https://socket.io/docs/v4/client-api/


        const socket = io('http://localhost:3001');


        socket.on('connect', () => {

            this.consoleLog('Connected to server');

            // Send a message to the server
            socket.emit('message', 'Hello from client!');
        });


        // Listen for messages from the server
        socket.on('message', (msg: string) => {
            this.consoleLog('Message from server: ' + msg);
        });

        socket.on('disconnect', () => {
            this.consoleLog('Disconnected from server');
        });

        socket.on('connection', (socket: Socket) => {

            this.consoleLog('connection to socket: ' + socket.id);

        });

        socket.io.on("error", (error) => {
            this.consoleLog('error from socket: ' + error);
        });

        socket.io.on("ping", () => {
            this.consoleLog('ping from socket ');
        });

        socket.on('customEvent', (message: string, data: any) => {
            this.consoleLog(message); // Output: "Here is some arbitrary data:"
            //console.log(data);    // Output: { key: 'value', num: 42, isActive: true }
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