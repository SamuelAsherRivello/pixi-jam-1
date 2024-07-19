import { SuperApp } from "../SuperApp";
import * as PIXI from 'pixi.js';

export class CollisionSystem {
    private _superApp: SuperApp;

    constructor(superApp: SuperApp) {
        this._superApp = superApp;
    }

    public getCollisions(me: PIXI.Container): PIXI.Container[] {
        const collidingSprites: PIXI.Container[] = [
            ...this.getCollidingSpritesFromChildren(me, this._superApp.app.stage.children),
            ...this.getCollidingSpritesFromChildren(me, this._superApp.viewport.children),
        ];

        return collidingSprites;
    }

    // Collision Detection
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