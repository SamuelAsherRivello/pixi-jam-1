import * as PIXI from 'pixi.js';
import { GixiApplication } from '../GixiApplication';
import { ICollisionSystemBody } from '../base/ICollisionSystemBody';
import { GixiUtility, ICollisionSystemBodyInterfaceLookup } from '../GixiUtility';
import { SystemBase } from './base/SystemBase';

/**
 * CollisionSystem is responsible for detecting collisions between PIXI containers.
 * It extends the SystemBase class and provides methods to get colliding sprites.
 */
export class CollisionSystem extends SystemBase {
  // Properties -------------------------------

  // CHEAP TO CALL
  public get stageContainers(): PIXI.Container[] {
    return this._stageContainers;
  }

  // EXPENSIVE TO CALL
  private stageContainersRefresh() {
    this._stageContainers = this.stageContainersRefreshRecursive(this._app.app.stage);
  }

  // Fields -------------------------------
  private _stageContainers!: PIXI.Container[];

  // Initialization -------------------------------
  constructor(app: GixiApplication) {
    super(app);
  }

  public override async initializeAsync(): Promise<any> {
    if (this.isInitialized) {
      return;
    }

    // Local
    this._isInitialized = true;
  }

  // Methods --------------------------------------

  /**
   * Get all sprites that are colliding with the given sprite.
   * @param me - The sprite to check collisions for.
   * @returns An array of sprites that are colliding with the given sprite.
   */
  public stageContainersCollidingWith(me: PIXI.Container): PIXI.Container[] {
    //TODO: Call this line much more rarely
    //FOr example have the app call this only when addstage/removestage/addviewport/removeviewport
    //or perhaps there is stage listener in pixi?
    this.stageContainersRefresh();

    //
    const collisions: PIXI.Container[] = this.getCollisionsInternal(me, this._stageContainers);

    return collisions;
  }

  /**
   * Recursively get all children of a container, including nested children.
   * @param container - The container to get children from.
   * @returns An array of all containers.
   */
  private stageContainersRefreshRecursive(container: PIXI.Container): PIXI.Container[] {
    const result: PIXI.Container[] = [];
    container.children.forEach((child) => {
      result.push(child as PIXI.Container);
      if (child instanceof PIXI.Container && child.children.length > 0) {
        result.push(...this.stageContainersRefreshRecursive(child));
      }
    });
    return result;
  }

  // Internal Methods -----------------------------

  /**
   * Get all sprites from the given children that are colliding with the given sprite.
   * @param me - The sprite to check collisions for.
   * @param children - The children to check collisions against.
   * @returns An array of sprites that are colliding with the given sprite.
   */
  private getCollisionsInternal(me: PIXI.Container, children: PIXI.Container[]): PIXI.Container[] {
    return children.filter((child) => {
      const hasICollisionSystemBody = GixiUtility.hasInterface<ICollisionSystemBody>(child, ICollisionSystemBodyInterfaceLookup);

      return child !== me && hasICollisionSystemBody && child.canCollisionBeChecked && this.isCollidingWith(me, child as PIXI.Container);
    }) as PIXI.Container[];
  }

  /**
   * Check if the given sprite is colliding with another sprite.
   * @param me - The sprite to check collisions for.
   * @param other - The other sprite to check collisions against.
   * @returns True if the sprites are colliding, false otherwise.
   */
  private isCollidingWith(me: PIXI.Container, other: PIXI.Container): boolean {
    const bounds1 = me.getBounds();
    const bounds2 = other.getBounds();

    return (
      bounds1.x < bounds2.x + bounds2.width &&
      bounds1.x + bounds1.width > bounds2.x &&
      bounds1.y < bounds2.y + bounds2.height &&
      bounds1.y + bounds2.height > bounds2.y
    );
  }

  public override startRunning() {
    //Super
    super.startRunning();

    //Local
  }

  public override stopRunning() {
    //Super
    super.stopRunning();

    //Local
  }

  // Event Handlers -------------------------------
  public override onTick(ticker: PIXI.Ticker): void {
    //Use if desired
  }
}
