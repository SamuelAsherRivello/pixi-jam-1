import { SuperText } from "@src/scripts/client/core/super/SuperText";
import { GixiApplication } from "@src/scripts/client/gixi/GixiApplication";
import { Ticker } from "pixi.js";

export class InstructionsSuperText extends SuperText {

    // Fields ---------------------------------------

    // Initialization -------------------------------

    // Event Handlers -------------------------------
    public override onResize(app: GixiApplication): void {

        //UPDATE POSITION
        this.x = app.configuration.data.screenUIMarginX;
        this.y = app.configuration.data.screenUIMarginY;

        //HACK: UPDATE SIZE
        this.style.fontSize = 15 + 7 / app.app.renderer.resolution


        this.text = `Arrows / WASD To Move\nEnter / Spacebar For Attack\nF For Fullscreen\nR For Restart\nM For Move Fast`;

        //TEMP: SHOW DEBUGGING
        let r1 = Math.round(app.app.renderer.resolution * 100) / 100;
        let r2 = Math.round(this.resolution * 100) / 100;
        //[Resolution: ${r1}, ${r2}

    }


    public override onTick(ticker: Ticker): void {

        //Super
        super.onTick(ticker);

        //Local
    }
}
