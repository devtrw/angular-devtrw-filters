import 'angular-mocks/angular-mocks';

import './components/camel-to-snake-case/camel-to-snake-case-filter_test';
import './components/hyphenated-to-camel-case/hyphenated-to-camel-case-filter_test';
import './components/order-object-by/order-object-by-filter_test';
import './components/phone/phone-filter_test';
import './components/uc-first/uc-first-filter_test';

import filters from './filters';

describe(filters.name, () => {
  var $filter;

  beforeEach(function () {
    window.module(filters.name);

    inject($injector => {
      $filter = $injector.get('$filter');
    });
  });
  it('should have the camel-to-snake-case filter defined', () => {
    assert.isFunction($filter('camelToSnakeCase'));
  });
  it('should have the uc-first filter defined', () => {
    assert.isFunction($filter('ucFirst'));
  });
  it('should have the hyphenatedToCamelCase filter defined', () => {
    assert.isFunction($filter('hyphenatedToCamelCase'));
  });
  it('should have the orderObjectBy filter', () => {
    assert.isFunction($filter('orderObjectBy'));
  });
  it('should have the phone filter', () => {
    assert.isFunction($filter('phone'));
  });
});
