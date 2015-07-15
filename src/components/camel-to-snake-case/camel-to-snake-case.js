import filter from './camel-to-snake-case-filter';

const ngModule = angular.module('dtrw.filters.camel-to-snake-case', []);

ngModule.filter('camelToSnakeCase', filter);

export default ngModule;
