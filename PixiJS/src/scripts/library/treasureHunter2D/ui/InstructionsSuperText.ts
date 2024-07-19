import { SuperText } from '../../core/super/SuperText';
import { GixiApplication } from '../../gixi/GixiApplication';

export class InstructionsSuperText extends SuperText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(app: GixiApplication): void {

        //UPDATE POSITION
        this.x = app.configuration.data.ScreenUIMarginX;
        this.y = app.configuration.data.ScreenUIMarginY;

        //HACK: UPDATE SIZE
        this.style.fontSize = 15 + 7 / app.app.renderer.resolution

        //TEMP: SHOW DEBUGGING
        let r1 = Math.round(app.app.renderer.resolution * 100) / 100;
        let r2 = Math.round(this.resolution * 100) / 100;
        this.text = `Arrows/WASD To Move\n[Resolution: ${r1}, ${r2}]`;

    }
}
