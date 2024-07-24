import { GixiApplication } from '@client/gixi/GixiApplication';
import { ActorStatic } from '../../gixi/ActorStatic';
import { Graphics, TextOptions, TextStyle } from 'pixi.js';
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

        const textStyle = new TextStyle();
        textStyle.fontSize = 12;
        textStyle.fill = '#ffffff';
        textStyle.align = 'center';

        const textOptions: TextOptions = {
            text: this.displayMessage,
            style: textStyle,
            resolution: 2 // TODO: Fix. Text is not too sharp. Is it this value?
        };

        const text: Text = new Text(textOptions);
        text.x = - text.width / 2
        text.y = - text.height / 2
        this.addChild(text);

    }

    // Methods --------------------------------------

    // Event Handlers -------------------------------
}

