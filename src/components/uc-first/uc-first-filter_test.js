describe('dtrw.filters.uc-first', function () {
  var $filter;

  beforeEach(function () {
    module('dtrw.filters.uc-first');

    inject(function ($injector) {
      $filter = $injector.get('$filter');
    });
  });

  it('should convert the first character in a string to uppercase', function () {
    assert.equal($filter('ucFirst')('test'), 'Test');
  });

  it('should not explode on empty or undefined strings', function () {
    assert.equal($filter('ucFirst')(''), '', 'empty strings should be returned as is');
    assert.equal($filter('ucFirst')(), '', 'undefined should be returned as empty string');
  });

  it('should handle strings with numeric first chars', function () {
    assert.equal($filter('ucFirst')('1twoThree'), '1twoThree');
  });
});
