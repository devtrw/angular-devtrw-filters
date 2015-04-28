import ngModule from './order-object-by';

describe(ngModule.name, function () { // jshint ignore:line

  // load the filter's module
  beforeEach(window.module(ngModule.name));

  // initialize a new instance of the filter before each test
  var orderObjectBy;
  var obj = {
    person_1: {
      name:   'Amelia',
      age:    30,
      pet:    'cat',
      grades: {
        math:            90,
        physics:         80,
        computerScience: 50
      }
    },
    person_2: {
      name:   'Bernardette',
      age:    20,
      pet:    'cat',
      grades: {
        math:            80,
        physics:         90,
        computerScience: 100
      }
    },
    person_3: {
      name:   'Carol',
      age:    40,
      pet:    'hedgehog',
      grades: {
        math:            100,
        physics:         50,
        computerScience: 100
      }
    }
  };
  beforeEach(inject(function ($filter) {
    orderObjectBy = $filter('orderObjectBy');
  }));

  it('should sort by the name field', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'name'),
      [obj.person_1, obj.person_2, obj.person_3]
    );
  });

  it('should sort by name field reverted', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'name', true),
      [obj.person_3, obj.person_2, obj.person_1]
    );
  });

  it('should sort by age field', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'age'),
      [obj.person_2, obj.person_1, obj.person_3]
    );
  });

  it('should sort by age field reverted', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'age', true),
      [obj.person_3, obj.person_1, obj.person_2]
    );
  });

  it('should sort by pet field', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'pet'),
      [obj.person_1, obj.person_2, obj.person_3]
    );
  });

  it('should sort by grades.math', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'grades.math'),
      [obj.person_2, obj.person_1, obj.person_3]
    );
  });

  it('should sort by grades.math reverted', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'grades.math', true),
      [obj.person_3, obj.person_1, obj.person_2]
    );
  });

  it('should sort by grades.physics', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'grades.physics'),
      [obj.person_3, obj.person_1, obj.person_2]
    );
  });

  it('should sort by grades.physics reverted', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'grades.physics', true),
      [obj.person_2, obj.person_1, obj.person_3]
    );
  });

  it('should sort by grades.computerScience', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'grades.computerScience'),
      [obj.person_1, obj.person_2, obj.person_3]
    );
  });

  it('should sort by grades.computerScience reverted', function () {
    assert.deepEqual(
      orderObjectBy(obj, 'grades.computerScience', true),
      [obj.person_3, obj.person_2, obj.person_1]
    );
  });

});
