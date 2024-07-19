import { GixiApplication } from "../GixiApplication";
import * as PIXI from 'pixi.js';
import { SystemBase } from "./SystemBase";

/**
 * CollisionSystem is responsible for detecting collisions between PIXI containers.
 * It extends the SystemBase class and provides methods to get colliding sprites.
 */
export class CollisionSystem extends SystemBase {

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        super(app);
    }

    // Methods --------------------------------------

    /**
     * Get all sprites that are colliding with the given sprite.
     * @param me - The sprite to check collisions for.
     * @returns An array of sprites that are colliding with the given sprite.
     */
    public getCollisions(me: PIXI.Container): PIXI.Container[] {
        const collidingSprites: PIXI.Container[] = [
            ...this.getCollidingSpritesFromChildren(me, this._app.app.stage.children),
            ...this.getCollidingSpritesFromChildren(me, this._app.viewport.children),
        ];

        return collidingSprites;
    }

    // Internal Methods -----------------------------

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

    /**
     * Get all sprites from the given children that are colliding with the given sprite.
     * @param me - The sprite to check collisions for.
     * @param children - The children to check collisions against.
     * @returns An array of sprites that are colliding with the given sprite.
     */
    private getCollidingSpritesFromChildren(me: PIXI.Container, children: PIXI.Container[]): PIXI.Container[] {
        return children.filter((child) => {
            return (
                child instanceof PIXI.Container &&
                child !== me &&
                this.isCollidingWith(me, child as PIXI.Container)
            );
        }) as PIXI.Container[];
    }
}
