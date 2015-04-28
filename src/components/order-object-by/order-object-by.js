import filter from './order-object-by-filter';

const ngModule = angular.module('dtrw.filters.order-object-by', []);

ngModule.filter('orderObjectBy', filter);

export default ngModule;
