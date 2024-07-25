/**
 * IMPORTANT FOR FILES OUTSIDE OF /CLIENT/: Always import using `.js` even though it's a `.ts` file.
 */

import { Server, Socket } from 'socket.io';
import { MultiplayerSocket } from './MultiplayerSocket.js';
import http from 'http';
import {
  PacketRequest,
  PacketResponse,
  SessionStartRequest,
  SessionStartResponse,
  GameCreateRequest,
  GameCreateResponse,
  GameJoinRequest,
  GameJoinResponse,
  GamePacketRequest,
  GamePacketResponse,
} from './Packet.js';

export class MultiplayerSocketServer extends MultiplayerSocket {
  // Properties -----------------------------------

  // Fields ---------------------------------------
  private httpServer: http.Server;
  private ioServer: Server;

  // Initialization -------------------------------
  constructor() {
    super();
    this.httpServer = http.createServer();
    this.ioServer = new Server(this.httpServer, {
      cors: {
        origin: '*', // Adjust this to your client's URL if needed
        methods: ['GET', 'POST'],
      },
    });
  }

  public async initializeAsync(): Promise<any> {
    //Super
    await super.initializeAsync();

    //Local
  }

  // Methods ------------------------------
  public start(port: number): void {
    this.httpServer.listen(port, () => {
      this.consoleLog(`Server started on port ${port}`);
    });

    // Subscribing within here... any chance it'll double-subscribe on reconnect?
    this.ioServer.on('connection', (socket) => {
      this.consoleLog('Server connection by client socked.id = ' + socket.id);
      this._socket = socket;

      this.onRequest(SessionStartRequest, (response) => {
        this.emitResponse(new SessionStartResponse());
      });

      this.onRequest(GameCreateRequest, (response) => {
        this.emitResponse(new GameCreateResponse());
      });

      this.onRequest(GameJoinRequest, (response) => {
        this.emitResponse(new GameJoinResponse());
      });

      this.onRequest(GamePacketRequest, (response) => {
        this.emitResponse(new GamePacketResponse(response.data.x, response.data.y));
      });

      this._socket.on('disconnect', () => {
        this.consoleLog('user disconnected2');
      });
    });
  }

  protected emitResponse<T extends PacketResponse>(response: T): void {
    //Check type
    if (!(response instanceof PacketResponse)) {
      this.consoleLogError(`!!!!emitResponse() failed. Wrong type of ${(response as any).constructor.name}.`);
      return;
    }

    //Emit only proper type
    console.log('response: ' + response.constructor.name + ' was : ' + response);
    this.emitPacket(response);
  }

  protected onRequest<T extends PacketRequest>(RequestClass: new () => T, onRequestCallback: (request: T) => void): void {
    this.onPacket(RequestClass, onRequestCallback);
  }

  // Event Handlers ------------------------------
}
