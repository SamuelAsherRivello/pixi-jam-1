import * as PIXI from 'pixi.js';
import { GixiApplication } from "../GixiApplication";
import { SystemBase } from "./base/SystemBase";

/**
 * Handles keyboard input and maintains the state of keys.
 */
export class InputSystem extends SystemBase {
    // Fields ---------------------------------------
    private _keyStateDictionary: Map<number, KeyState>;

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        super(app);

        // Initialize key state dictionary
        this._keyStateDictionary = new Map();
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    public override async initializeAsync(): Promise<any> {
        if (this.isInitialized) {
            return;
        }

        // Local initialization
        this._isInitialized = true;
    }

    // Methods ------------------------------
    /**
     * Checks if the specified key is currently pressed down.
     * @param keyCode - The key code to check.
     * @returns True if the key is down, otherwise false.
     */
    public isKeyDown(keyCode: number): boolean {
        let keyState: KeyState = this.getKeyStateByKey(keyCode);
        return keyState.isDown;
    }

    /**
     * Checks if the specified key was pressed down this frame.
     * @param keyCode - The key code to check.
     * @returns True if the key is down this frame, otherwise false.
     */
    public isKeyDownThisFrame(keyCode: number): boolean {
        let keyState: KeyState = this.getKeyStateByKey(keyCode);

        // Capture one moment of true
        let isDownThisFrame = keyState.isDownThisFrame;
        keyState.isDownThisFrame = false;
        return isDownThisFrame;
    }

    /**
     * Handles the key down event and updates the key state.
     * @param keyboardEvent - The keyboard event.
     */
    private onKeyDown(keyboardEvent: KeyboardEvent): void {
        let keyState: KeyState = this.getKeyStateByKey(keyboardEvent.keyCode);
        if (!keyState.isDown) {
            keyState.isDown = true;
            keyState.isDownThisFrame = true;
        } else {
            keyState.isDownThisFrame = false;
        }
    }

    /**
     * Handles the key up event and updates the key state.
     * @param keyboardEvent - The keyboard event.
     */
    private onKeyUp(keyboardEvent: KeyboardEvent): void {
        let keyState: KeyState = this.getKeyStateByKey(keyboardEvent.keyCode);
        keyState.isDown = false;
        keyState.isDownThisFrame = false;
    }

    /**
     * Retrieves the key state for the specified key code. If the key does not exist, a new KeyState is created and returned.
     * @param keyCode - The key code to retrieve the state for.
     * @returns The KeyState for the specified key.
     */
    private getKeyStateByKey(keyCode: number): KeyState {
        let keyState: KeyState | undefined = this._keyStateDictionary.get(keyCode);
        if (keyState === undefined) {
            let newKeyState: KeyState = new KeyState();
            this._keyStateDictionary.set(keyCode, newKeyState);
            return newKeyState;
        }
        return keyState;
    }

    /**
     * Updates the state of keys for the next frame.
     */
    public update() {
        this._keyStateDictionary.forEach((keyState) => {
            keyState.isDownThisFrame = false;
        });
    }

    // Event Handlers -------------------------------
    public override onTick(ticker: PIXI.Ticker): void {
        //Use if desired
    }
}

/**
 * Represents the state of a key.
 */
class KeyState {
    constructor() {
        this.isDown = false;
        this.isDownThisFrame = false;
    }

    public isDown: boolean;
    public isDownThisFrame: boolean;
}
