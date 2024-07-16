import { SuperText } from '../core/SuperText';
import { SuperApp } from '../core/SuperApp';

export class ScoreSuperText extends SuperText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(superApp: SuperApp): void {

        this.x = superApp.app.screen.width - this.width - superApp.data.UI_MARGIN_X;
        this.y = superApp.data.UI_MARGIN_Y;
    }
}
