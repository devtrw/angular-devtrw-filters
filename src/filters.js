import camelToSnakeCase      from './components/camel-to-snake-case/camel-to-snake-case';
import hyphenatedToCamelCase from './components/hyphenated-to-camel-case/hyphenated-to-camel-case';
import orderObjectBy         from './components/order-object-by/order-object-by';
import phone                 from './components/phone/phone';
import ucFirst               from './components/uc-first/uc-first';

const ngModule = angular.module('dtrw.filters', [
  camelToSnakeCase.name,
  hyphenatedToCamelCase.name,
  orderObjectBy.name,
  phone.name,
  ucFirst.name
]);

export default ngModule;
