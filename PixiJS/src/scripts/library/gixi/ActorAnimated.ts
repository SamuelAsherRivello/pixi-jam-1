import { ActorContainer, ActorContainerConfiguration } from './ActorContainer';
import { GixiApplication } from './GixiApplication';
import { IActor } from './interfaces/IActor';
import { IInitializableAsync } from './interfaces/IInitializeAsync';
import { GixiUtility } from './GixiUtility';
import * as PIXI from 'pixi.js';
import { GlowFilter } from 'pixi-filters';



//NOTE: I put this class witin the same file as ActorAnimated 
//so I can NOT export it (to hide it from direct use). Needed? Not sure.
class MultiAnimatedSprite {

    // Fields ---------------------------------------
    private _animationNameToAnimatedSprite: Map<string, PIXI.AnimatedSprite>;
    private _textureImageURL: string;
    private _spriteSheetURL: string;

    // Initialization -------------------------------
    constructor(newTextureImageURL: string, newSpriteSheetURL: string) {
        this._textureImageURL = newTextureImageURL;
        this._spriteSheetURL = newSpriteSheetURL;
        this._animationNameToAnimatedSprite = new Map();
    }

    // Methods ------------------------------
    public async initializeAndReparent(app: GixiApplication, parent: PIXI.Container) {


        const spriteSheetAtlasResponse = await fetch(this._spriteSheetURL);
        const spriteSheetAtlas = await spriteSheetAtlasResponse.json();
        await PIXI.Assets.load(this._textureImageURL);
        const texture = PIXI.Texture.from(this._textureImageURL);
        const spriteSheet = new PIXI.Spritesheet(texture, spriteSheetAtlas);
        await spriteSheet.parse();

        const size = new PIXI.Point(
            spriteSheetAtlas.meta.size.w,
            spriteSheetAtlas.meta.size.h
        )

        for (const [animationName, textures] of Object.entries(spriteSheet.animations)) {
            this._animationNameToAnimatedSprite.set(animationName, new PIXI.AnimatedSprite(textures));
        }

        this._animationNameToAnimatedSprite.forEach((value: PIXI.AnimatedSprite, key: string) => {

            //NOTE: The parent center and/or the value center may not be proper
            //TODO: Go to index.ts and try to put a coin at a specific world position and then be sure it looks good
            value.setSize(size.x, size.y);
            value.label = (MultiAnimatedSprite).name;



            value.anchor.set(0.5, 0.5);
            parent.addChild(value);
        });
    }

    public play(animationName: string, animationSpeed: number) {
        const animatedSprite: PIXI.AnimatedSprite | undefined = this._animationNameToAnimatedSprite.get(animationName);
        if (animatedSprite == undefined) {
            throw new Error("Trying to play unknown animation with animationName=" + animationName);
        }

        animatedSprite.animationSpeed = animationSpeed;
        animatedSprite.play();
    }
}


/**
 * Configuration
 */
export interface ActorAnimatedConfiguration extends ActorContainerConfiguration {
}

const ActorAnimatedConfigurationDefault: ActorAnimatedConfiguration = {
    isCollidable: true,
    isTickable: true,
    isResizable: true
}


/**
 * Represents a coin in the game.
 * 
 */
export class ActorAnimated extends ActorContainer implements IInitializableAsync, IActor {


    // Properties -----------------------------------
    public override get configuration(): ActorAnimatedConfiguration {
        return this._configuration as ActorAnimatedConfiguration;
    }

    // Fields ---------------------------------------
    protected _multiAnimatedSprite!: MultiAnimatedSprite;

    // Initialization -------------------------------
    constructor(app: GixiApplication, configuration?: Partial<ActorAnimatedConfiguration>) {

        super(app, { ...ActorAnimatedConfigurationDefault, ...configuration });

        // Redeclare anything from super 
        // that you want differently here
        this.label = (ActorAnimated).name;

        this.initializeAsync();
    }


    public override async initializeAsync() {

        // Super
        await super.initializeAsync();

        //TODO:
        //1. Populate ActorAnimatedConfiguration above
        //      with whatever is needed to pass into the constructor.
        //      (See how ActorStatic does it.)
        //2. Do some error checking here 
        //      (See how ActorStatic does it.)
        //3. Update this snippet below as needed. Done!    
        const animatedTextureURL = 'assets/images/AnimatedCoin/animated_coin.png';
        const animatedTextureJSONURL = 'assets/images/AnimatedCoin/animated_coin.json';
        this._multiAnimatedSprite = new MultiAnimatedSprite(animatedTextureURL, animatedTextureJSONURL);
        await this._multiAnimatedSprite.initializeAndReparent(this._app, this);
        this._multiAnimatedSprite.play('Gold', 0.2);


        // Local
        //Do any additional initialization here

    }

    // Methods --------------------------------------

    // Event Handlers -------------------------------

    public override onTick(ticker: PIXI.Ticker): void {

        // Super
        super.onTick(ticker);


        // Local
        //Do any additional things here

    }
}

