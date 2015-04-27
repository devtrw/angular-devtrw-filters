import ngModule from './uc-first';

describe(ngModule.name, () => {
  var $filter;

  beforeEach(() => {
    window.module(ngModule.name);

    inject($injector => {
      $filter = $injector.get('$filter');
    });
  });

  it('should convert the first character in a string to uppercase', () => {
    assert.equal($filter('ucFirst')('test'), 'Test');
  });

  it('should not explode on empty or undefined strings', () => {
    assert.equal($filter('ucFirst')(''), '', 'empty strings should be returned as is');
    assert.equal($filter('ucFirst')(), '', 'undefined should be returned as empty string');
  });

  it('should handle strings with numeric first chars', () => {
    assert.equal($filter('ucFirst')('1twoThree'), '1twoThree');
  });
});
