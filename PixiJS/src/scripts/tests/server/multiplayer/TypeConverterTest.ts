import { TypeConverter } from '@shared/multiplayer/Packet';
class SimpleObject {
  property1: string = '';
  property2: number = 0;
}

class ComplexObject {
  property1: string = '';
  property2: number = 0;
  nestedObject: SimpleObject = new SimpleObject();
}

class VeryComplexObject {
  property1: string = '';
  property2: number = 0;
  nestedObject: ComplexObject = new ComplexObject();
  arrayProperty: SimpleObject[] = [];
}

class ObjectWithConstructors {
  property1: string = '';
  property2: number = 0;

  constructor(property1: string, property2: number) {
    this.property1 = property1;
    this.property2 = property2;
  }
}

beforeAll(() => {
  // Setup code if needed
});

beforeEach(() => {
  // Setup code if needed
});

afterEach(() => {
  // Teardown code if needed
});

afterAll(() => {
  // Teardown code if needed
});

test('SimpleObject conversion to and from JSON', () => {
  // Arrange
  const simpleObject = new SimpleObject();
  simpleObject.property1 = 'testValue';
  simpleObject.property2 = 42;

  // Act
  const json = TypeConverter.toJson(simpleObject);
  const newSimpleObject = TypeConverter.fromJson(json, SimpleObject);

  // Assert
  expect(newSimpleObject).toBeInstanceOf(SimpleObject);
  expect(newSimpleObject.property1).toBe(simpleObject.property1);
  expect(newSimpleObject.property2).toBe(simpleObject.property2);
});

test('ComplexObject conversion to and from JSON', () => {
  // Arrange
  const complexObject = new ComplexObject();
  complexObject.property1 = 'testValue';
  complexObject.property2 = 42;
  complexObject.nestedObject.property1 = 'nestedValue';
  complexObject.nestedObject.property2 = 24;

  // Act
  const json = TypeConverter.toJson(complexObject);
  const newComplexObject = TypeConverter.fromJson(json, ComplexObject);

  // Assert
  expect(newComplexObject).toBeInstanceOf(ComplexObject);
  expect(newComplexObject.property1).toBe(complexObject.property1);
  expect(newComplexObject.property2).toBe(complexObject.property2);
  expect(newComplexObject.nestedObject.property1).toBe(complexObject.nestedObject.property1);
  expect(newComplexObject.nestedObject.property2).toBe(complexObject.nestedObject.property2);
});

test('VeryComplexObject conversion to and from JSON', () => {
  // Arrange
  const veryComplexObject = new VeryComplexObject();
  veryComplexObject.property1 = 'testValue';
  veryComplexObject.property2 = 42;
  veryComplexObject.nestedObject.property1 = 'nestedValue';
  veryComplexObject.nestedObject.property2 = 24;
  veryComplexObject.nestedObject.nestedObject.property1 = 'deepNestedValue';
  veryComplexObject.nestedObject.nestedObject.property2 = 12;
  veryComplexObject.arrayProperty = [
    { property1: 'arrayValue1', property2: 1 },
    { property1: 'arrayValue2', property2: 2 },
  ];

  // Act
  const json = TypeConverter.toJson(veryComplexObject);
  const newVeryComplexObject = TypeConverter.fromJson(json, VeryComplexObject);

  // Assert
  expect(newVeryComplexObject).toBeInstanceOf(VeryComplexObject);
  expect(newVeryComplexObject.property1).toBe(veryComplexObject.property1);
  expect(newVeryComplexObject.property2).toBe(veryComplexObject.property2);
  expect(newVeryComplexObject.nestedObject.property1).toBe(veryComplexObject.nestedObject.property1);
  expect(newVeryComplexObject.nestedObject.property2).toBe(veryComplexObject.nestedObject.property2);
  expect(newVeryComplexObject.nestedObject.nestedObject.property1).toBe(veryComplexObject.nestedObject.nestedObject.property1);
  expect(newVeryComplexObject.nestedObject.nestedObject.property2).toBe(veryComplexObject.nestedObject.nestedObject.property2);
  expect(newVeryComplexObject.arrayProperty.length).toBe(veryComplexObject.arrayProperty.length);
  expect(newVeryComplexObject.arrayProperty[0].property1).toBe(veryComplexObject.arrayProperty[0].property1);
  expect(newVeryComplexObject.arrayProperty[0].property2).toBe(veryComplexObject.arrayProperty[0].property2);
  expect(newVeryComplexObject.arrayProperty[1].property1).toBe(veryComplexObject.arrayProperty[1].property1);
  expect(newVeryComplexObject.arrayProperty[1].property2).toBe(veryComplexObject.arrayProperty[1].property2);
});

test('ObjectWithConstructors conversion to and from JSON', () => {
  // Arrange
  const objectWithConstructors = new ObjectWithConstructors('testValue', 42);

  // Act
  const json = TypeConverter.toJson(objectWithConstructors);
  const newObjectWithConstructors = TypeConverter.fromJson(json, ObjectWithConstructors);

  // Assert
  expect(newObjectWithConstructors).toBeInstanceOf(ObjectWithConstructors);
  expect(newObjectWithConstructors.property1).toBe(objectWithConstructors.property1);
  expect(newObjectWithConstructors.property2).toBe(objectWithConstructors.property2);
});
