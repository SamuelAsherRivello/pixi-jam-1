import { ActorStatic, ActorStaticConfiguration } from '@client/gixi/ActorStatic';
import { GixiApplication } from '@client/gixi/GixiApplication';
import { Actions, Interpolations } from 'pixi-actions';
import { DropShadowFilter } from 'pixi-filters';
import { Ticker } from 'pixi.js';
import { ICollisionSystemBody } from '../../../../gixi/base/ICollisionSystemBody';
import { TreasureHunter2DConstants } from '../../TreasureHunter2DConstants';
import { AudioSystem } from '@client/gixi/systems/AudioSystem';

/**
 * Represents a coin in the game.
 * 
 */
export class ChestTilemapObject extends ActorStatic implements ICollisionSystemBody {

    // Properties -----------------------------------
    public get canCollisionBeChecked(): boolean {
        return true;
    }

    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<ActorStaticConfiguration>) {

        if (configuration) {
            configuration.canCollisionCheck = false;
        }


        super(app, configuration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (ChestTilemapObject).name;
    }


    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        this.filters = [
            new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 })
        ];

        // Local
        // Do any additional initialization here

    }

    // Methods --------------------------------------
    public override onTick(ticker: Ticker): void {

        // Super
        super.onTick(ticker);

        // Local
        this._sprite.rotation += 0.01 * ticker.deltaTime;
    }

    private destroyAfterAnimation() {

        let action1 = TreasureHunter2DConstants.Animations.spinAndShrink(
            this._sprite,
            0,
            20,
            () => {
                // onStart
                this._app.systemManager.getItem(AudioSystem).play("./assets/audio/Chime02.mp3");
            },
            () => {

                // onComplete
                this.destroy();
            }

        );

        action1.play();

    }

    // Event Handlers -------------------------------

    //TODO: Rethink what and where this should be
    public isCollected = false;
    public collect() {

        if (this.isCollected) {
            return;
        }
        this.isCollected = true;
        this.destroyAfterAnimation();
    }

}
