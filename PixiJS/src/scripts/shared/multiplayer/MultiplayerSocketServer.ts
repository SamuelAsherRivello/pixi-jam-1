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
  Client,
  Guid,
  GameLeaveResponse,
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

    ////////////////////////////////////////////////
    // This represents all events FOR 1 GIVEN CLIENT
    ////////////////////////////////////////////////
    this.ioServer.on('connection', (socket) => {
      const client = new Client(socket.id);
      this._clients.push(client);
      const clientCount = this._clients.length + 1;
      this.consoleLog(`GET connection, clientCount = ${clientCount}`);
      this._clients.forEach((c) => {
        console.log('\tclient id: ' + c.clientId);
      });
      this._socket = socket;

      this.onRequest(SessionStartRequest, (request) => {
        //
        console.log('GET SessionStartRequest, id: ' + request.data.socketId);
        const response = new SessionStartResponse(Guid.createNew());
        this.emitResponse(response);
      });

      this.onRequest(GameCreateRequest, (request) => {
        //
        console.log('GET GameCreateRequest, id: ' + request.data.socketId);
        const response = new GameCreateResponse(Guid.createNew());
        this.emitResponse(response);
      });

      this.onRequest(GameJoinRequest, (request) => {
        const response = new GameJoinResponse(this._clients);
        console.log('TODO1 SET GameJoinResponse, clients1 = ' + this._clients.length);
        console.log('TODO2 SET GameJoinResponse, clients2 = ' + response.clients.length);
        this.emitResponse(response);
      });

      this.onRequest(GamePacketRequest, (request) => {
        //
        const response = new GamePacketResponse(request.data.socketId, request.data.x, request.data.y);
        this.emitResponse(response);
      });

      socket.on('disconnect', () => {
        // Pass along the specific socket that is disconnecting
        this.handleDisconnect(socket);
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
  protected onRequest<T extends PacketRequest>(RequestClass: new (...args: any[]) => T, onRequestCallback: (request: T) => void): void {
    this.onPacket(RequestClass, onRequestCallback);
  }

  // Event Handlers ------------------------------
  private handleDisconnect(socket: Socket): void {
    const disconnectedClient = this._clients.find((client) => client.clientId === socket.id);
    if (disconnectedClient) {
      this.consoleLog(`GET disconnect: ${disconnectedClient.clientId}`);
      this._clients = this._clients.filter((client) => client.clientId !== socket.id);

      // Here you can add any additional cleanup or notification logic
      // For example, notifying other clients about this disconnection
      this.emitResponse(new GameLeaveResponse(this._clients));

      this.consoleLog(`Remaining clients: ${this._clients.length}`);
    } else {
      this.consoleLog(`Unknown client disconnected: ${socket.id}`);
    }
  }
}
