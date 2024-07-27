/**
 * IMPORTANT FOR FILES OUTSIDE OF /CLIENT/: Always import using `.js` even though it's a `.ts` file.
 */

export class Client {
  public socketId: string = '';
  constructor(socketId: string) {
    this.socketId = socketId;
  }
}
