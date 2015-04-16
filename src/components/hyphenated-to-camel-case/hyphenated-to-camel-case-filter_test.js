describe('dtrw.filters.hyphenated-to-camel-case', function () {
  var $filter;

  beforeEach(function () {
    module('dtrw.filters.hyphenated-to-camel-case');

    inject(function ($injector) {
      $filter = $injector.get('$filter');
    });
  });

  it('should convert hyphenated strings to camel case', function () {
    assert.equal(
      $filter('hyphenatedToCamelCase')('some-hyphenated-string'),
      'someHyphenatedString'
    );
  });
});
