import { Observable } from '../../../../scripts/client/core/observables/Observable';

class SampleObservable<TValue> extends Observable<TValue> {}

class CustomObservable<TValue> extends Observable<TValue> {
  protected OnValueChanging(previousValue: TValue, newValue: TValue): TValue {
    if (newValue === 20) {
      return previousValue; // Reject the change if the new value is 20
    }
    return ((newValue as any) + 1) as TValue; // Add 1 to the new value
  }
}

beforeAll(() => {
  //console.log('TemplateClass.beforeAll()');
});

beforeEach(() => {
  //console.log('TemplateClass.beforeEach()');
});

afterEach(() => {
  //console.log('TemplateClass.afterEach()');
});

afterAll(() => {
  //console.log('TemplateClass.afterAll()');
});

test('instance is not null when default', () => {
  // Arrange
  const initialValue = 10;
  const observable = new SampleObservable<number>(initialValue);

  // Act
  const value = observable.Value;

  // Assert
  expect(observable).not.toBeNull();
  expect(value).toBe(initialValue);
});

test('value change triggers OnValueChanged event', () => {
  // Arrange
  const initialValue = 10;
  const newValue = 20;
  const observable = new SampleObservable<number>(initialValue);
  const mockCallback = jest.fn();
  observable.OnValueChanged.on(mockCallback);

  // Act
  observable.Value = newValue;

  // Assert
  expect(mockCallback).toHaveBeenCalledWith(initialValue, newValue);
  expect(observable.Value).toBe(newValue);
});

test('OnValueChangedRefresh triggers event with current value', () => {
  // Arrange
  const initialValue = 10;
  const observable = new SampleObservable<number>(initialValue);
  const mockCallback = jest.fn();
  observable.OnValueChanged.on(mockCallback);

  // Act
  observable.refreshValueChanged();

  // Assert
  expect(mockCallback).toHaveBeenCalledWith(initialValue, initialValue);
});

test('OnValueChanging method is called when value changes', () => {
  // Arrange
  const initialValue = 10;
  const newValue = 15;
  const observable = new CustomObservable<number>(initialValue);

  // Act
  observable.Value = newValue;

  // Assert
  expect(observable.Value).toBe(newValue + 1);
});

test('OnValueChanging method can reject value changes', () => {
  // Arrange
  const initialValue = 10;
  const rejectedValue = 20;
  const observable = new CustomObservable<number>(initialValue);

  // Act
  observable.Value = rejectedValue;

  // Assert
  expect(observable.Value).toBe(initialValue);
});
