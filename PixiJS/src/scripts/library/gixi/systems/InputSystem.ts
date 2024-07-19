import { GixiApplication } from "../GixiApplication";

/**
 * Handles keyboard input and maintains the state of keys.
 * 
 * Inspiration: <see cref="https://google.github.io/styleguide/tsguide.html#naming" />
 */
export class InputSystem {

    // Properties -----------------------------------
    // No public properties defined

    // Fields ---------------------------------------
    private _keyStateDictionary: Map<string, KeyState>;
    private _app: GixiApplication;

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        this._app = app;
        this._keyStateDictionary = new Map();
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
     * Handles the key down event and updates the key state.
     * @param keyboardEvent - The keyboard event.
     */
    public onKeyDown(keyboardEvent: KeyboardEvent): void {
        let keyState: KeyState = this.getKeyStateByKey(keyboardEvent.key);
        keyState.isDown = true;
    }

    /**
     * Handles the key up event and updates the key state.
     * @param keyboardEvent - The keyboard event.
     */
    public onKeyUp(keyboardEvent: KeyboardEvent): void {
        let keyState: KeyState = this.getKeyStateByKey(keyboardEvent.key);
        keyState.isDown = false;
    }

    // Event Handlers -------------------------------
    // No event handlers defined

    // Private Methods ------------------------------
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
}

/**
 * Represents the state of a key.
 */
class KeyState {
    constructor() {
        this.isDown = false;
    }

    public isDown: boolean;
}