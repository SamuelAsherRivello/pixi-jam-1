import * as PIXI from 'pixi.js';
import { GixiApplication } from '@client/gixi/GixiApplication';
import { DropShadowFilter } from 'pixi-filters';
import { ActorStatic, ActorStaticConfiguration } from '../../gixi/ActorStatic';
import { ICollisionSystemBody } from '../../gixi/base/ICollisionSystemBody';
import { Player } from './Player';
import { Enemy } from './Enemy';
import { Viewport } from 'pixi-viewport';

/**
 * Configuration
 */
export interface EnemySpawnerConfiguration extends ActorStaticConfiguration {
    enemySpawnerIsEnabled: boolean;
    perEnemytextureUrl: string;
    timeBetweenSpawnsMS: number;
    maxToSpawn: number
}

const EnemySpawnerConfigurationDefault: EnemySpawnerConfiguration = {
    perEnemytextureUrl: '',
    enemySpawnerIsEnabled: true,
    timeBetweenSpawnsMS: 2000,
    maxToSpawn: 10,
    textureUrl: '',
    texture: PIXI.Texture.EMPTY,
    canCollisionCheck: false,
    isTickable: true,
    isResizable: false
}

/**
 * Represents a coin in the game.
 * 
 */
export class EnemySpawner extends ActorStatic implements ICollisionSystemBody {


    // Properties -----------------------------------
    public get canCollisionBeChecked(): boolean {
        return true;
    }

    public override get configuration(): EnemySpawnerConfiguration {
        return this._configuration as EnemySpawnerConfiguration;
    }

    // Fields ---------------------------------------
    private timeSinceLastSpawnMS: number = 0;
    private enemies: Enemy[] = [];


    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<EnemySpawnerConfiguration>) {

        super(app, { ...EnemySpawnerConfigurationDefault, ...configuration });

        // Redeclare anything from super 
        // that you want differently here
        this.label = (EnemySpawner).name;

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

        this.spawnEnemy();

    }


    // Methods --------------------------------------
    private spawnEnemy() {


        if (!this.configuration.enemySpawnerIsEnabled) {
            return;
        }

        this.timeSinceLastSpawnMS = 0;

        const enemy: Enemy = new Enemy(this._app, { textureUrl: this.configuration.perEnemytextureUrl });
        enemy.position.set(this.position.x, this.position.y);
        enemy.zIndex = 100 - this.enemies.length;
        this._app.addToViewport(enemy);
        this.enemies.push(enemy);
    }


    // Event Handlers -------------------------------

    public override onTick(ticker: PIXI.Ticker): void {

        super.onTick(ticker);

        if (this.enemies.length >= this.configuration.maxToSpawn) {
            return;
        }

        this.timeSinceLastSpawnMS += ticker.deltaMS;
        if (this.timeSinceLastSpawnMS > this.configuration.timeBetweenSpawnsMS) {
            this.spawnEnemy();
        }
    }
}

