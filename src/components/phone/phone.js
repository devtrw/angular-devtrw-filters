import filter from './phone-filter';

const ngModule = angular.module('dtrw.filters.phone', []);

ngModule.filter('phone', filter);

export default ngModule;

