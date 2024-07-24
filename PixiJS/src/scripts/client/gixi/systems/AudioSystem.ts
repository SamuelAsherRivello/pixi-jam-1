import { Sound, sound } from "@pixi/sound";
import { GixiApplication } from "../GixiApplication";
import { SystemBase } from "./base/SystemBase";
import { ISystemBase } from "./base/SystemBase";


/**
 * Handles keyboard input and maintains the state of keys.
 */
export class AudioSystem extends SystemBase implements ISystemBase {

    // Properties -----------------------------------

    // Fields ---------------------------------------
    private _audioContextResumed: boolean = false;

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        super(app);

    }

    override async initializeAsync(): Promise<any> {

        if (this.isInitialized) {
            return;
        }

        //console.log(`${(AudioSystem).name}.initializeAsync()`)
        //Local
        this._isInitialized = true;
        this.setupAudioContextResume();

    }

    // Methods ------------------------------

    // Set up the audio context to resume after a user gesture
    private setupAudioContextResume() {
        const resumeAudioContext = () => {
            if (!this._audioContextResumed) {
                const audioContext = sound.context.audioContext;
                if (audioContext.state === 'suspended') {
                    audioContext.resume().then(() => {
                        this._audioContextResumed = true;
                        console.log('Audio context resumed');
                    }).catch((err) => {
                        console.error('Failed to resume audio context:', err);
                    });
                } else {
                    this._audioContextResumed = true;
                }
            }
        };

        // Listen for any user interaction
        window.addEventListener('click', resumeAudioContext, { once: true });
        window.addEventListener('touchstart', resumeAudioContext, { once: true });
        window.addEventListener('keydown', resumeAudioContext, { once: true });
    }

    /**
     * Play a sound file.
     * @param filename 
     */
    public async play(filename: string) {
        this.playAsync(filename);
    }

    /**
     * Play a sound file.
     * @param filename 
     */
    public async playAsync(filename: string) {
        if (!this._audioContextResumed) {
            console.warn('Audio context not resumed yet. Cannot play sound.');
            return;
        }

        // Play the sound when needed
        let x: Sound = Sound.from({
            url: filename,
            preload: true,
            autoPlay: false,
        });

        while (!x.isLoaded) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        x.speed = 1;
        x.volume = 1;
        x.play();
    }
}
