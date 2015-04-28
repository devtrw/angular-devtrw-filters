import 'angular-mocks/angular-mocks';

import './components/hyphenated-to-camel-case/hyphenated-to-camel-case-filter_test';
import './components/order-object-by/order-object-by-filter_test';
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
  it('should have the uc-first filter defined', () => {
    assert.isFunction($filter('ucFirst'));
  });
  it('should have the hyphenatedToCamelCase filter defined', () => {
    assert.isFunction($filter('hyphenatedToCamelCase'));
  });
  it('should have the orderObjectBy filter', () => {
    assert.isFunction($filter('orderObjectBy'));
  });
});
