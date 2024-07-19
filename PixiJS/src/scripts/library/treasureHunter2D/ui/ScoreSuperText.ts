import { SuperText } from '../../core/super/SuperText';
import { GixiApplication } from '../../gixi/GixiApplication';

export class ScoreSuperText extends SuperText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(superApp: GixiApplication): void {

        //UPDATE POSITION
        this.x = superApp.app.screen.width - this.width - superApp.configuration.data.ScreenUIMarginX;
        this.y = superApp.configuration.data.ScreenUIMarginY;

        //HACK: UPDATE SIZE
        this.style.fontSize = 15 + 7 / superApp.app.renderer.resolution

    }
}
