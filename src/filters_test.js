describe('dtrw.filters', function () {
  var $filter;

  beforeEach(function () {
    module('dtrw.filters');

    inject(function ($injector) {
      $filter = $injector.get('$filter');
    });
  });
  it('should have the uc-first filter defined', function () {
    assert.isFunction($filter('ucFirst'));
  });
  it('should have the hyphenatedToCamelCase filter defined', function () {
    assert.isFunction($filter('hyphenatedToCamelCase'));
  });
});
