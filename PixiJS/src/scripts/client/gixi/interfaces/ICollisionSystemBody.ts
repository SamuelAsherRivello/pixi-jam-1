/**
 * ICollisionBody Interface
 */
export interface ICollisionSystemBody {

    // Properties -----------------------------------

    // This must be true to ASK (am I colliding)
    // NOTE: THis is also in the Actor parent class so that by default all actors can do checking
    // OPTIMIZATION: A true here is more expensive than below
    canCollisionCheck: boolean;

    // This must be true to be included in results from OTHER objects doing the checking
    // NOTE: THis is handled separately so easily and non-GIXI classes can be given this 
    // ICollisionSystemBody and be included in GIXI collision checks
    // OPTIMIZATION: A true here is less expensive than above
    canCollisionBeChecked: boolean;

    // Methods --------------------------------------
}
