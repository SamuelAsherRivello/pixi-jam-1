import { IMediaInstance, Sound, sound } from "@pixi/sound";
import { GixiApplication } from "../GixiApplication";
import { SystemBase } from "./SystemBase";

/**
 * Handles keyboard input and maintains the state of keys.
 */
export class AudioSystem extends SystemBase {

    // Properties -----------------------------------

    // Fields ---------------------------------------
    private _audioContextResumed: boolean = false;

    // Initialization -------------------------------
    constructor(app: GixiApplication) {
        super(app);
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
     * @param fileName 
     */
    public async play(fileName: string) {
        this.playAsync(fileName);
    }

    /**
     * Play a sound file.
     * @param fileName 
     */
    public async playAsync(fileName: string) {
        if (!this._audioContextResumed) {
            console.warn('Audio context not resumed yet. Cannot play sound.');
            return;
        }

        // Play the sound when needed
        let x: Sound = Sound.from({
            url: fileName,
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
