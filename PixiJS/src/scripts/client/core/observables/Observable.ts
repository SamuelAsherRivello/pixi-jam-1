import { EventEmitter } from 'events';

interface IEvent<TPrevious, TCurrent> {
    on(listener: (previousValue: TPrevious, currentValue: TCurrent) => void): void;
    off(listener: (previousValue: TPrevious, currentValue: TCurrent) => void): void;
    invoke(previousValue: TPrevious, currentValue: TCurrent): void;
}

class RmcEvent<TPrevious, TCurrent> implements IEvent<TPrevious, TCurrent> {
    private eventEmitter = new EventEmitter();
    private eventName = 'valueChanged';

    on(listener: (previousValue: TPrevious, currentValue: TCurrent) => void): void {
        this.eventEmitter.on(this.eventName, listener);
    }

    off(listener: (previousValue: TPrevious, currentValue: TCurrent) => void): void {
        this.eventEmitter.off(this.eventName, listener);
    }

    invoke(previousValue: TPrevious, currentValue: TCurrent): void {
        this.eventEmitter.emit(this.eventName, previousValue, currentValue);
    }

    refresh(previousValue: TPrevious, currentValue: TCurrent): void {
        this.invoke(previousValue, currentValue);
    }
}

export class Observable<TValue> {
    public readonly OnValueChanged: IEvent<TValue | undefined, TValue>;

    private _currentValue: TValue;
    private _previousValue: TValue | undefined;

    constructor(initialValue?: TValue) {
        this.OnValueChanged = new RmcEvent<TValue | undefined, TValue>();
        if (initialValue !== undefined) {
            this._currentValue = initialValue;
            this._previousValue = initialValue;
        } else {
            throw new Error("Initial value must be provided");
        }
    }

    get Value(): TValue {
        return this._currentValue;
    }

    set Value(newValue: TValue) {
        this._currentValue = this.OnValueChanging(this._currentValue, newValue);
        this.OnValueChanged.invoke(this._previousValue, this._currentValue);
        this._previousValue = this._currentValue;
    }

    protected OnValueChanging(previousValue: TValue, newValue: TValue): TValue {
        return newValue;
    }

    public refreshValueChanged(): void {
        (this.OnValueChanged as RmcEvent<TValue | undefined, TValue>).refresh(this._previousValue, this._currentValue);
    }
}

// Example Usage
const observable = new Observable<number>(10);
observable.OnValueChanged.on((prev, curr) => {
    console.log(`Value changed from ${prev} to ${curr}`);
});

observable.Value = 20; // Output: Value changed from 10 to 20
observable.refreshValueChanged(); // Output: Value changed from 10 to 20
