(function (module) {
  module.filter('ucFirst', function() {
    return function ucFirst(text) {
      if (typeof text !== 'string') {
        return '';
      }
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
  });
})(angular.module('dtrw.filters.uc-first'));
