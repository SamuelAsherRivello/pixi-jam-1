import { ActorAnimatedConfiguration } from '@src/scripts/client/gixi';
import { ActorAnimated } from '@src/scripts/client/gixi/ActorAnimated';
import { GixiApplication } from '@src/scripts/client/gixi/GixiApplication';
import { ICollisionSystemBody } from '@src/scripts/client/gixi/interfaces/ICollisionSystemBody';
import { Actions, Interpolations } from 'pixi-actions';
import { DropShadowFilter, GlowFilter } from 'pixi-filters';
import { TreasureHunter2DConstants } from '../../TreasureHunter2DConstants';

/**
 * Represents a coin in the game.
 * 
 */
export class CoinTilemapObject extends ActorAnimated implements ICollisionSystemBody {


    // Properties -----------------------------------
    public get canCollisionBeChecked(): boolean {
        return true;
    }


    // Fields ---------------------------------------


    // Initialization -------------------------------
    constructor(app: GixiApplication) {

        const configuration: ActorAnimatedConfiguration = {
            canCollisionCheck: false,
            isTickable: false,
            isResizable: false
        }

        super(app, configuration);

        // Redeclare anything from super 
        // that you want differently here
        this.label = (CoinTilemapObject).name;

    }

    public whatever() {
        this.isCollected = true;
        this.destroyAfterAnimation();
    }


    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        // OPTIONAL: Try these - https://pixijs.io/filters/
        this.filters = [
            //new GlowFilter({ distance: 1, outerStrength: 1, innerStrength: 1, color: 0xffff00 }),
            new DropShadowFilter({ blur: 1, alpha: 0.5, quality: 3, resolution: 2 }) //
        ];

        // Local
        //Do any additional initialization here

    }


    // Methods --------------------------------------


    public destroyAfterAnimation() {

        let action1 = TreasureHunter2DConstants.Animations.riseAndGrow(
            this,
            0,
            20,
            () => {
                // onStart
                this._app.systems.audioSystem.play("./assets/audio/Chime01.mp3");
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


