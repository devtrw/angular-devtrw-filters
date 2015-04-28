import hyphenatedToCamelCase from './components/hyphenated-to-camel-case/hyphenated-to-camel-case';
import orderObjectBy         from './components/order-object-by/order-object-by';
import ucFirst               from './components/uc-first/uc-first';

const ngModule = angular.module('dtrw.filters', [
  hyphenatedToCamelCase.name,
  orderObjectBy.name,
  ucFirst.name
]);

export default ngModule;
