/**
 * IMPORTANT FOR FILES OUTSIDE OF /CLIENT/: Always import using `.js` even though it's a `.ts` file.
 */

/**
 *
 * BadConnectionSimulator.ts
 */
export class BadConnectionSimulator {
  // Properties -----------------------------------
  public get targetLatencyMS(): number {
    return this._targetLatencyArray[this._targetLatencyMSIndex];
  }

  public get targetPacketLoss(): number {
    return this._targetPacketLossArray[this._targetPacketLossIndex];
  }

  // Fields ---------------------------------------
  private _targetLatencyMSIndex: number = 0;
  private _targetPacketLossIndex: number = 0;
  private _targetLatencyArray: number[] = [0, 100, 500, 1000];
  private _targetPacketLossArray: number[] = [0, 0.01, 0.5, 0.9];

  // Initialization -------------------------------
  constructor() {}

  // Methods --------------------------------------
  public nextTargetLatency() {
    this._targetLatencyMSIndex = (this._targetLatencyMSIndex + 1) % this._targetLatencyArray.length;
  }

  public nextTargetPacketLoss() {
    this._targetPacketLossIndex = (this._targetPacketLossIndex + 1) % this._targetPacketLossArray.length;
  }

  public wasPacketLost(): boolean {
    return Math.random() < this.targetPacketLoss;
  }

  public async simulateLatencyAsync() {
    await new Promise((resolve) => setTimeout(resolve, this.targetLatencyMS));
  }

  // Event Handlers ------------------------------
}
