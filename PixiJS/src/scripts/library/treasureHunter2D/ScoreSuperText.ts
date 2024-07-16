import { SuperText } from '../core/SuperText';
import { SuperApp } from '../core/SuperApp';

export class ScoreSuperText extends SuperText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(superApp: SuperApp): void {

        //UPDATE POSITION
        this.x = superApp.app.screen.width - this.width - superApp.data.SCREEN_UI_MARGIN_X;
        this.y = superApp.data.SCREEN_UI_MARGIN_Y;

        //HACK: UPDATE SIZE
        this.style.fontSize = 15 + 7 / superApp.app.renderer.resolution

    }
}
