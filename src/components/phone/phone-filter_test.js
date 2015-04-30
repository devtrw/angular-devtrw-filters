import ngModule from './phone';

describe(ngModule.name, () => {
  var $filter;

  beforeEach(() => {
    window.module(ngModule.name);

    inject($injector => {
      $filter = $injector.get('$filter');
    });
  });

  it('should format a 10 digit phone number', () => {
    assert.equal($filter('phone')('1234567890'), '(123) 456-7890');
  });

  it('should return input string if not 10 numbers', () => {
    assert.equal($filter('phone')('123'), '123');
    assert.equal($filter('phone')('12345678901'), '12345678901');
    assert.equal($filter('phone')(), '');
  });
});
