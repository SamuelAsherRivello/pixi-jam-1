import { GixiApplication } from "../GixiApplication";
import { SystemBase } from "./base/SystemBase";
import { io } from 'socket.io-client';


/**
 * Handles keyboard input and maintains the state of keys.
 */
export class MultiplayerSystem extends SystemBase {

    // Fields ---------------------------------------

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


        const socket = io('http://localhost:3001'); // Adjust the URL if necessary

        socket.on('connect', () => {

            this.consoleLog('Connected to server');

            // Send a message to the server
            socket.emit('message', 'Hello from client!');

            // Listen for messages from the server
            socket.on('message', (msg: string) => {
                this.consoleLog('Message from server: ' + msg);
            });

            socket.on('disconnect', () => {
                this.consoleLog('Disconnected from server');
            });
        });

    }



    // Methods ------------------------------

    private consoleLog(msg: string) {
        console.log(`[${(MultiplayerSystem).name}] ${msg}`);
    }
}