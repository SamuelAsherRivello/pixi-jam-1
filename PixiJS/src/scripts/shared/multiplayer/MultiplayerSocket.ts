/**
 * IMPORTANT FOR FILES OUTSIDE OF /CLIENT/: Always import using `.js` even though it's a `.ts` file.
 */

import { Packet } from './Packet.js';

export class MultiplayerSocket {
  // Properties -----------------------------------
  get isInitialized(): boolean {
    return this._isInitialized;
  }

  // Fields ---------------------------------------
  protected _socket!: any;
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
    this._socket.emit(packet.constructor.name, TypeConverter.toJson(packet));
  }

  protected onPacket<T extends Packet>(PacketClass: new () => T, onCallback: (t: T) => void): void {
    this.consoleLog(`onPacket() Init ${PacketClass.name}`);

    this._socket.on(PacketClass.name, (packetString: string) => {
      this.consoleLog(`onPacket() Call ${PacketClass.name}`);
      const packet = TypeConverter.fromJson(packetString, PacketClass) as T;
      console.log(packet);
      onCallback(packet);
    });
  }
  // Event Handlers ------------------------------
}

export class TypeConverter {
  static toJson(obj: any): string {
    return JSON.stringify(obj);
  }

  static fromJson<T extends object>(json: string, cls: new (...args: any[]) => T): T {
    const jsonObj = JSON.parse(json);
    const instance = new cls();
    Object.assign(instance, jsonObj);
    return instance;
  }
}
