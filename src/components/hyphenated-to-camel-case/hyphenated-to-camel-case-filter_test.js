import ngModule from './hyphenated-to-camel-case';

describe(ngModule.name, () => {
  var $filter;

  beforeEach(() => {
    window.module(ngModule.name);

    inject($injector => {
      $filter = $injector.get('$filter');
    });
  });

  it('should convert hyphenated strings to camel case', () => {
    assert.equal(
      $filter('hyphenatedToCamelCase')('some-hyphenated-string'),
      'someHyphenatedString'
    );
  });
});
