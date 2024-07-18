import { SuperApp } from "../SuperApp";
import { SuperSprite } from "../SuperSprite";
import * as PIXI from 'pixi.js';

export class CollisionSystem {
    private _superApp: SuperApp;

    constructor(superApp: SuperApp) {
        this._superApp = superApp;
    }

    public getCollisions(me: SuperSprite): SuperSprite[] {
        const collidingSprites: SuperSprite[] = [
            ...this.getCollidingSpritesFromChildren(me, this._superApp.app.stage.children),
            ...this.getCollidingSpritesFromChildren(me, this._superApp.viewport.children),
        ];

        return collidingSprites;
    }

    // Collision Detection
    private isCollidingWith(me: SuperSprite, other: SuperSprite): boolean {
        const bounds1 = me.getBounds();
        const bounds2 = other.getBounds();

        return (
            bounds1.x < bounds2.x + bounds2.width &&
            bounds1.x + bounds1.width > bounds2.x &&
            bounds1.y < bounds2.y + bounds2.height &&
            bounds1.y + bounds2.height > bounds2.y
        );
    }

    private getCollidingSpritesFromChildren(me: SuperSprite, children: PIXI.Container[]): SuperSprite[] {
        return children.filter((child) => {
            return (
                child instanceof SuperSprite &&
                child !== me &&
                this.isCollidingWith(me, child as SuperSprite)
            );
        }) as SuperSprite[];
    }
}