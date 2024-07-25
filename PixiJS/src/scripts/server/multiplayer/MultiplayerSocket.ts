import { Socket } from 'socket.io';
import { Packet } from './Packet.js';

export class MultiplayerSocket {
  // Properties -----------------------------------
  get isInitialized(): boolean {
    return this._isInitialized;
  }

  // Fields ---------------------------------------
  protected _socket!: Socket;
  protected _isInitialized: boolean = false;
  protected isDebug: boolean = true;

  // Initialization -------------------------------
  constructor() {}

  public async initializeAsync(): Promise<any> {}

  requireIsInitialized() {
    if (!this.isInitialized) {
      throw new Error('requireIsInitialized.');
    }
  }

  // Methods ------------------------------
  protected consoleLog(msg: string) {
    if (!this.isDebug) {
      return;
    }
    console.log(`[${this.constructor.name}] ${msg}`);
  }

  protected consoleLogError(msg: string) {
    console.error(`[${this.constructor.name}] ${msg}`);
  }

  protected emitPacket(packet: Packet): void {
    this._socket.emit(packet.constructor.name, JSON.stringify(packet));
  }

  protected onPacket<T extends Packet>(PacketClass: new () => T, onCallback: (t: T) => void): void {
    this.consoleLog(`onPacket() ${PacketClass.name}`);

    this._socket.on(PacketClass.name, (packetString: string) => {
      console.log(packetString);
      const packet = JSON.parse(packetString) as T;
      console.log(packet);
      onCallback(packet);
    });
  }
  // Event Handlers ------------------------------
}
