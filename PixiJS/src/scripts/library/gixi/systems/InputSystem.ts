import { GixiApplication } from "../GixiApplication";
import { SystemBase } from "./SystemBase";

/**
 * Handles keyboard input and maintains the state of keys.
 */
export class InputSystem extends SystemBase {

    // Fields ---------------------------------------
    private _keyStateDictionary: Map<string, KeyState>;

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        super(app);

        //TODO: Move this and all systems to use IInitializeAsync and move this into that init
        this._keyStateDictionary = new Map();
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    // Methods ------------------------------
    /**
     * Checks if the specified key is currently pressed down.
     * @param key - The key to check.
     * @returns True if the key is down, otherwise false.
     */
    public isKeyDown(key: string): boolean {
        let keyState: KeyState = this.getKeyStateByKey(key);
        return keyState.isDown;
    }

    /**
     * Checks if the specified key was pressed down this frame.
     * @param key - The key to check.
     * @returns True if the key is down this frame, otherwise false.
     */
    public isKeyDownThisFrame(key: string): boolean {
        let keyState: KeyState = this.getKeyStateByKey(key);

        //NOTE: I tried a few ways to capture **ONE** moment of true here
        //FInally this one works - srivello
        let isDownThisFrame = keyState.isDownThisFrame;
        keyState.isDownThisFrame = false;
        return isDownThisFrame;
    }


    /**
     * Handles the key down event and updates the key state.
     * @param keyboardEvent - The keyboard event.
     */
    private onKeyDown(keyboardEvent: KeyboardEvent): void {
        let keyState: KeyState = this.getKeyStateByKey(keyboardEvent.key);
        if (!keyState.isDown) {
            keyState.isDown = true;
            keyState.isDownThisFrame = true;
        }
        else {
            keyState.isDownThisFrame = false;
        }
    }

    /**
     * Handles the key up event and updates the key state.
     * @param keyboardEvent - The keyboard event.
     */
    private onKeyUp(keyboardEvent: KeyboardEvent): void {
        let keyState: KeyState = this.getKeyStateByKey(keyboardEvent.key);
        keyState.isDown = false;
        keyState.isDownThisFrame = false;
    }

    /**
     * Retrieves the key state for the specified key. If the key does not exist, a new KeyState is created and returned.
     * @param key - The key to retrieve the state for.
     * @returns The KeyState for the specified key.
     */
    private getKeyStateByKey(key: string): KeyState {
        let keyState: KeyState | undefined = this._keyStateDictionary.get(key);
        if (keyState == undefined) {
            let newKeyState: KeyState = new KeyState();
            this._keyStateDictionary.set(key, newKeyState);
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
