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
  Guid,
  Client,
} from './Packet.js';

export class MultiplayerSocketServer extends MultiplayerSocket {
  // Properties -----------------------------------

  // Fields ---------------------------------------
  private httpServer: http.Server;
  private ioServer: Server;
  private _clients: Client[] = [];

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
      const client = new Client(socket.id);
      this._clients.push(client);
      const clientCount = this._clients.length + 1;
      this.consoleLog(`Server connection by client. clientCount = ${clientCount}, socketId = ${client.socketId}`);
      this._socket = socket;

      this.onRequest(SessionStartRequest, (request) => {
        //
        console.log('s from client : ' + request.data.socketId);
        const response = new SessionStartResponse(Guid.createNew());
        this.emitResponse(response);
      });

      this.onRequest(GameCreateRequest, (request) => {
        //
        console.log('g from client : ' + request.data.socketId);
        const response = new GameCreateResponse(Guid.createNew());
        this.emitResponse(response);
      });

      this.onRequest(GameJoinRequest, (request) => {
        this.emitResponse(new GameJoinResponse());
      });

      this.onRequest(GamePacketRequest, (request) => {
        //
        const response = new GamePacketResponse(request.data.socketId, request.data.x, request.data.y);
        this.emitResponse(response);
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
