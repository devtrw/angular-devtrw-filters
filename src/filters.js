import hyphenatedToCamelCase from './components/hyphenated-to-camel-case/hyphenated-to-camel-case';
import ucFirst               from './components/uc-first/uc-first';

const ngModule = angular.module('dtrw.filters', [
  hyphenatedToCamelCase.name,
  ucFirst.name
]);

export default ngModule;
