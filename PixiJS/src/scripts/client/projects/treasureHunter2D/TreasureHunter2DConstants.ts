import { Action, Actions, Interpolations } from "pixi-actions";
import { Container } from 'pixi.js';

/**
 * Common functionality
 */
class Animations {

  // Properties -----------------------------------

  // Fields ---------------------------------------

  // Methods --------------------------------------
  spinAndShrink(target: Container, delayMs: number, durationMs: number, onStart: () => void, onComplete: () => void): Action {

    let action = Actions.sequence(

      Actions.delay(delayMs),
      Actions.runFunc(() => {
        onStart();
      }),
      Actions.parallel(

        Actions.rotateTo(
          target,
          1,
          durationMs,
          Interpolations.smooth2),

        Actions.scaleTo(
          target,
          0,
          0,
          durationMs,
          Interpolations.smooth2),

      ),
      Actions.runFunc(() => {
        onComplete();

      }),

    );
    return action;

  }


  riseAndGrow(target: Container, delayMs: number, durationMs: number, onStart: () => void, onComplete: () => void): Action {

    let action = Actions.sequence(

      Actions.delay(delayMs),
      Actions.runFunc(() => {
        onStart();
      }),
      Actions.parallel(

        Actions.moveTo(
          target,
          target.x,
          target.y - target.height,
          durationMs,
          Interpolations.smooth2),

        Actions.scaleTo(
          target,
          2,
          2,
          durationMs,
          Interpolations.smooth2),

      ),
      Actions.runFunc(() => {
        onComplete();
      })

    );

    return action;

  }

};


/**
 * Common functionality
 */
export class TreasureHunter2DConstants {

  // Properties -----------------------------------
  public static Animations = new Animations();

  // Fields ---------------------------------------

  // Methods --------------------------------------
};