import * as PIXI from 'pixi.js';

/**
 * ITickable Interface
 */
export interface ITickable {
  // Properties -----------------------------------

  // Methods --------------------------------------
  onTick(ticker: PIXI.Ticker): void;
}
