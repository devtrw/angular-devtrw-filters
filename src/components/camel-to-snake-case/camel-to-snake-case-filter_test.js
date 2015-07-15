import ngModule from './camel-to-snake-case';

describe(ngModule.name, () => {
  var $filter;

  beforeEach(() => {
    window.module(ngModule.name);

    inject($injector => {
      $filter = $injector.get('$filter');
    });
  });

  it('should convert camel cased strings to snake case', () => {
    assert.equal(
      $filter('camelToSnakeCase')('someCamelCaseString'),
      'some_camel_case_string'
    );
    assert.equal(
      $filter('camelToSnakeCase')('someCamelCaseStringW1thNumb3rs'),
      'some_camel_case_string_w1th_numb3rs'
    );
    assert.equal(
      $filter('camelToSnakeCase')('with$ymbols-=AndS!uff'),
      'with$ymbols-=_and_s!uff'
    );
  });

  it('should accept a flag to capitalise the translated strings', () => {
    assert.equal(
      $filter('camelToSnakeCase')('someCamelCaseString', true),
      'SOME_CAMEL_CASE_STRING'
    );
    assert.equal(
      $filter('camelToSnakeCase')('someCamelCaseStringW1thNumb3rs', true),
      'SOME_CAMEL_CASE_STRING_W1TH_NUMB3RS'
    );
    assert.equal(
      $filter('camelToSnakeCase')('with$ymbols-=AndS!uff', true),
      'WITH$YMBOLS-=_AND_S!UFF'
    );
  });
});
