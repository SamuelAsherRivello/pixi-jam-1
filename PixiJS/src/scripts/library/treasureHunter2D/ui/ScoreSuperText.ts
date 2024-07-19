import { SuperText } from '../../core/super/SuperText';
import { GixiApplication } from '../../gixi/GixiApplication';

export class ScoreSuperText extends SuperText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(app: GixiApplication): void {

        //UPDATE POSITION
        this.x = app.app.screen.width - this.width - app.configuration.data.ScreenUIMarginX;
        this.y = app.configuration.data.ScreenUIMarginY;

        //HACK: UPDATE SIZE
        this.style.fontSize = 15 + 7 / app.app.renderer.resolution

    }
}
