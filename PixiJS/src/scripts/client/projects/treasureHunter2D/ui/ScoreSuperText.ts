import { SuperText } from "@src/scripts/client/core/super/SuperText";
import { GixiApplication } from "@src/scripts/client/gixi/GixiApplication";

export class ScoreSuperText extends SuperText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(app: GixiApplication): void {

        //UPDATE POSITION
        this.x = app.app.screen.width - this.width - app.configuration.data.screenUIMarginX;
        this.y = app.configuration.data.screenUIMarginY;

        this.text = "hello world";

        //HACK: UPDATE SIZE
        this.style.fontSize = 15 + 7 / app.app.renderer.resolution

    }
}
