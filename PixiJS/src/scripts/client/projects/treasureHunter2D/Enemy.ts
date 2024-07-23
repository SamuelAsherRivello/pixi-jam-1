import * as PIXI from 'pixi.js';
import { GixiApplication } from '@src/scripts/client/gixi/GixiApplication';
import { DropShadowFilter } from 'pixi-filters';
import { ActorStatic, ActorStaticConfiguration } from '../../gixi/ActorStatic';
import { Tilemap } from '../../gixi/tilemap/Tilemap';
import { ICollisionSystemBody } from '../../gixi/interfaces/ICollisionSystemBody';
import { Player } from './Player';

/**
 * Configuration
 */
export interface EnemyConfiguration extends ActorStaticConfiguration {
    moveSpeed: number;
}

const EnemyConfigurationDefault: EnemyConfiguration = {

    moveSpeed: 0.25,

    textureUrl: '',
    texture: PIXI.Texture.EMPTY,
    canCollisionCheck: true,
    isTickable: true,
    isResizable: true
}

/**
 * Represents a coin in the game.
 * 
 */
export class Enemy extends ActorStatic implements ICollisionSystemBody {


    // Properties -----------------------------------
    public get canCollisionBeChecked(): boolean {
        return true;
    }

    public override get configuration(): EnemyConfiguration {
        return this._configuration as EnemyConfiguration;
    }

    // Fields ---------------------------------------
    private target!: Player;

    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<EnemyConfiguration>) {

        super(app, { ...EnemyConfigurationDefault, ...configuration });

        // Redeclare anything from super 
        // that you want differently here
        this.label = (Enemy).name;

    }


    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        // OPTIONAL: Try these - https://pixijs.io/filters/
        this._sprite.filters = [
            new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 })
        ];

        // Local
        //Do any additional initialization here
        this._sprite.anchor.set(0, 0);

    }

    // Methods --------------------------------------
    private getStageContainersOfTypePlayer(): Player[] {
        return this._app.systems.collisionSystem.stageContainers.filter(child => child instanceof Player);
    }


    private moveTowardsTarget(): void {

        const targetX = this.target.x;
        const targetY = this.target.y;
        const deltaX = targetX - this.x;
        const deltaY = targetY - this.y;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance > this.configuration.moveSpeed) {
            const directionX = deltaX / distance;
            const directionY = deltaY / distance;

            this.x += directionX * this.configuration.moveSpeed;
            this.y += directionY * this.configuration.moveSpeed;
        } else {
            // If within one step, snap to target position
            this.x = targetX;
            this.y = targetY;
        }
    }

    // Event Handlers -------------------------------

    public override onTick(ticker: PIXI.Ticker): void {

        super.onTick(ticker);

        if (!this.target) {
            this.target = this.getStageContainersOfTypePlayer()[0];
        }

        if (!this.target) {
            return;
        }

        this.moveTowardsTarget();

    }

}

