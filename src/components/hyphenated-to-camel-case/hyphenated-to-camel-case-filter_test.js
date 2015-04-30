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
    assert.equal(
      $filter('hyphenatedToCamelCase')('some-hyphenated-1-with-numbers-0'),
      'someHyphenated1WithNumbers0'
    );
    assert.equal(
      $filter('hyphenatedToCamelCase')('with-$-symbols-=andStuff'),
      'with$Symbols=andStuff'
    );
  });
});
