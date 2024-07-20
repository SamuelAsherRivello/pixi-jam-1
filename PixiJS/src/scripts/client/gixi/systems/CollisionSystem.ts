import { GixiApplication } from "../GixiApplication";
import * as PIXI from 'pixi.js';
import { SystemBase } from "./base/SystemBase";
import { ActorContainer } from "../ActorContainer";
import { Viewport } from "pixi-viewport";

/**
 * CollisionSystem is responsible for detecting collisions between PIXI containers.
 * It extends the SystemBase class and provides methods to get colliding sprites.
 */
export class CollisionSystem extends SystemBase {

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        super(app);
    }

    override async initializeAsync(): Promise<any> {

        if (this.isInitialized) {
            return;
        }


        //console.log(`${(CollisionSystem).name}.initializeAsync()`)

        //Local
        this._isInitialized = true;

    }

    // Methods --------------------------------------

    /**
     * Get all sprites that are colliding with the given sprite.
     * @param me - The sprite to check collisions for.
     * @returns An array of sprites that are colliding with the given sprite.
     */
    public getCollisions(me: PIXI.Container): PIXI.Container[] {
        const collisions: PIXI.Container[] = [
            ...this.getCollidingSpritesFromChildren(me, this._app.app.stage.children),
            ...this.getCollidingSpritesFromChildren(me, this._app.viewport.children),
        ];

        // console.log("this : " + me.label)

        // if (me.label == "Player") {
        //     console.log("length : " + collisions.length)
        // };

        return collisions;
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
            const isCollidable =
                child instanceof ActorContainer
                    ? child.configuration.isCollidable
                    : true;

            return (
                child instanceof Viewport &&        //TODO: Remove this check. Handle elsewhere
                child instanceof PIXI.Graphics &&   //TODO: Remove this check. Handle elsewhere
                child instanceof PIXI.Container &&
                child !== me &&
                this.isCollidingWith(me, child as PIXI.Container) &&
                isCollidable
            );
        }) as PIXI.Container[];
    }
}
