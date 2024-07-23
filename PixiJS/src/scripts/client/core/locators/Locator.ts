export type LocatorContructor<T> = new (...args: any[]) => T;

/**
 * Manage a collection of items of different types from common parent type.
 * 
 * Methods can take the following types of keys:
 * - Class type: Example - `locator.hasItem(RenderSystem)`
 * - String key: Example - `locator.hasItem('renderSystemKey')`
 */
export class Locator<T> {
    // Fields ---------------------------------------
    private _items: Map<LocatorContructor<T> | string, T> = new Map();

    // Methods ------------------------------

    /**
     * Checks if an item with the specified class or string key exists in the locator.
     * @param key - The class or string key of the item to check.
     * @returns True if an item with the specified class or string key exists, false otherwise.
     */
    public hasItem<U extends T>(key: LocatorContructor<U>): boolean;
    public hasItem(key: string): boolean;
    public hasItem(key: any): boolean {
        return this._items.has(key);
    }

    /**
     * Adds an item with the specified class or string key to the locator.
     * @param key - The class or string key of the item to add.
     * @param item - The item to add.
     * @throws Error if an item with the specified class or string key is already added.
     */
    public addItem<U extends T>(key: LocatorContructor<U>, item: U): void;
    public addItem(key: string, item: T): void;
    public addItem(key: any, item: T): void {
        if (this._items.has(key)) {
            throw new Error(`Item with key ${typeof key === 'function' ? key.name : key} is already added.`);
        }
        this._items.set(key, item);
    }

    /**
     * Gets an item with the specified class or string key from the locator.
     * @param key - The class or string key of the item to get.
     * @returns The item of type U.
     * @throws Error if no item of the specified class or string key exists.
     */
    public getItem<U extends T>(key: LocatorContructor<U>): U;
    public getItem(key: string): T;
    public getItem(key: any): any {
        const item = this._items.get(key);
        if (!item) {
            throw new Error(`Item with key ${typeof key === 'function' ? key.name : key} does not exist.`);
        }
        return item;
    }

    /**
     * Removes an item with the specified class or string key from the locator.
     * @param key - The class or string key of the item to remove.
     * @throws Error if no item of the specified class or string key exists.
     */
    public removeItem<U extends T>(key: LocatorContructor<U>): void;
    public removeItem(key: string): void;
    public removeItem(key: any): void {
        if (!this._items.delete(key)) {
            throw new Error(`Item with key ${typeof key === 'function' ? key.name : key} does not exist.`);
        }
    }
}
