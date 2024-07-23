import { GixiApplication } from '@src/scripts/client/gixi/GixiApplication';
import { ActorStatic } from '../../gixi/ActorStatic';
import { Graphics } from 'pixi.js';
import { Text } from 'pixi.js';

/**
 * Represents a coin in the game.
 * 
 */
export class DebugMarker extends ActorStatic {


    // Properties -----------------------------------


    // Fields ---------------------------------------
    private displayMessage: string;

    // Initialization -------------------------------
    constructor(app: GixiApplication, displayMessage: string) {

        super(app);
        this.displayMessage = displayMessage;

        // Redeclare anything from super 
        // that you want differently here
        this.label = (DebugMarker).name;

    }



    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        // Local
        const graphics = new Graphics()
            .rect(0, 0, 32, 32)
            .fill({
                color: 0xffffff,
                alpha: 0.5
            });

        graphics.x = - graphics.width / 2
        graphics.y = - graphics.height / 2
        this.addChild(graphics);

        const text: Text = new Text(this.displayMessage, { align: 'center', fontSize: 12, fill: 0xffffff });
        text.x = - text.width / 2
        text.y = - text.height / 2
        this.addChild(text);

    }

    // Methods --------------------------------------

    // Event Handlers -------------------------------
}

