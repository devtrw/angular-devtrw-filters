import filter from './uc-first-filter';

const ngModule = angular.module('dtrw.filters.uc-first', []);

ngModule.filter('ucFirst', filter);

export default ngModule;

