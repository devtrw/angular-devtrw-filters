import filter from './hyphenated-to-camel-case-filter';

const ngModule = angular.module('dtrw.filters.hyphenated-to-camel-case', []);

ngModule.filter('hyphenatedToCamelCase', filter);

export default ngModule;
