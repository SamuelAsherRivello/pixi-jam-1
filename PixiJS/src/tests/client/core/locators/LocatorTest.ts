import { Locator } from '../../../../scripts/client/core/locators/Locator';

// Define a common interface for the items
interface ISystem {
}

// Define some classes that implement the ISystem interface
class RenderSystem implements ISystem {
}

class PhysicsSystem implements ISystem {
}



class SampleItem implements ISystem {
}

beforeAll(() => {
    //console.log('LocatorTest.beforeAll()');
});

beforeEach(() => {
    //console.log('LocatorTest.beforeEach()');
});

afterEach(() => {
    //console.log('LocatorTest.afterEach()');
});

afterAll(() => {
    //console.log('LocatorTest.afterAll()');
});

test('instance is not null when default', () => {
    // Arrange
    const locator = new Locator<ISystem>();

    // Act
    const hasItem = locator.hasItem(SampleItem);

    // Assert
    expect(locator).not.toBeNull();
    expect(hasItem).toBe(false);
});

test('addItem adds item successfully using class type', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const item = new SampleItem();

    // Act
    locator.addItem(SampleItem, item);
    const hasItem = locator.hasItem(SampleItem);

    // Assert
    expect(hasItem).toBe(true);
    expect(locator.getItem(SampleItem)).toBe(item);
});

test('addItem adds item successfully using string key', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const item = new SampleItem();

    // Act
    locator.addItem('SampleItemKey', item);
    const hasItem = locator.hasItem('SampleItemKey');

    // Assert
    expect(hasItem).toBe(true);
    expect(locator.getItem('SampleItemKey')).toBe(item);
});

test('getItem throws error when item does not exist using class type', () => {
    // Arrange
    const locator = new Locator<ISystem>();

    // Act & Assert
    expect(() => locator.getItem(SampleItem)).toThrowError('Item with key SampleItem does not exist.');
});

test('getItem throws error when item does not exist using string key', () => {
    // Arrange
    const locator = new Locator<ISystem>();

    // Act & Assert
    expect(() => locator.getItem('NonExistentKey')).toThrowError('Item with key NonExistentKey does not exist.');
});

test('removeItem removes item successfully using class type', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const item = new SampleItem();
    locator.addItem(SampleItem, item);

    // Act
    locator.removeItem(SampleItem);
    const hasItem = locator.hasItem(SampleItem);

    // Assert
    expect(hasItem).toBe(false);
});

test('removeItem removes item successfully using string key', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const item = new SampleItem();
    locator.addItem('SampleItemKey', item);

    // Act
    locator.removeItem('SampleItemKey');
    const hasItem = locator.hasItem('SampleItemKey');

    // Assert
    expect(hasItem).toBe(false);
});

test('addItem throws error when adding duplicate item using class type', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const item = new SampleItem();
    locator.addItem(SampleItem, item);

    // Act & Assert
    expect(() => locator.addItem(SampleItem, item)).toThrowError('Item with key SampleItem is already added.');
});

test('addItem throws error when adding duplicate item using string key', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const item = new SampleItem();
    locator.addItem('SampleItemKey', item);

    // Act & Assert
    expect(() => locator.addItem('SampleItemKey', item)).toThrowError('Item with key SampleItemKey is already added.');
});

test('can handle multiple item types', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const renderSystem = new RenderSystem();
    const physicsSystem = new PhysicsSystem();

    // Act
    locator.addItem(RenderSystem, renderSystem);
    locator.addItem(PhysicsSystem, physicsSystem);

    // Assert
    expect(locator.hasItem(RenderSystem)).toBe(true);
    expect(locator.hasItem(PhysicsSystem)).toBe(true);
    expect(locator.getItem(RenderSystem)).toBe(renderSystem);
    expect(locator.getItem(PhysicsSystem)).toBe(physicsSystem);
});

test('removeItem works for different types', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const renderSystem = new RenderSystem();
    const physicsSystem = new PhysicsSystem();

    locator.addItem(RenderSystem, renderSystem);
    locator.addItem(PhysicsSystem, physicsSystem);

    // Act
    locator.removeItem(RenderSystem);

    // Assert
    expect(locator.hasItem(RenderSystem)).toBe(false);
    expect(locator.hasItem(PhysicsSystem)).toBe(true);
});

test('getItem returns correct type', () => {
    // Arrange
    const locator = new Locator<ISystem>();
    const renderSystem = new RenderSystem();

    locator.addItem(RenderSystem, renderSystem);

    // Act
    const item = locator.getItem(RenderSystem);

    // Assert
    expect(item).toBeInstanceOf(RenderSystem);
});
