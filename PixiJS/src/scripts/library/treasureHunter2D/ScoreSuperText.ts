import { SuperText } from '../core/super/SuperText';
import { SuperApp } from '../core/super/SuperApp';

export class ScoreSuperText extends SuperText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(superApp: SuperApp): void {

        //UPDATE POSITION
        this.x = superApp.app.screen.width - this.width - superApp.configuration.data.ScreenUIMarginX;
        this.y = superApp.configuration.data.ScreenUIMarginY;

        //HACK: UPDATE SIZE
        this.style.fontSize = 15 + 7 / superApp.app.renderer.resolution

    }
}
