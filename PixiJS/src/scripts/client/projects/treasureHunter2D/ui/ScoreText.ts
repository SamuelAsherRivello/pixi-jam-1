import { GixiApplication } from "@src/scripts/client/gixi/GixiApplication";
import { GixiText } from "@src/scripts/client/gixi/GixiText";

export class ScoreText extends GixiText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(app: GixiApplication): void {

        //UPDATE POSITION
        this.x = app.app.screen.width - this.width - app.configuration.data.screenUIMarginX;
        this.y = app.configuration.data.screenUIMarginY;

        //HACK: UPDATE SIZE
        this._text.style.fontSize = 15 + 7 / app.app.renderer.resolution

    }
}
