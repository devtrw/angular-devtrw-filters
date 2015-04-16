(function (module) {
  module.filter('hyphenatedToCamelCase', function() {
    return function hyphenatedToCamelCase(hyphenatedText) {
      return hyphenatedText.replace(
        /-([a-z])/g,
        function (g) { return g[1].toUpperCase(); }
      );
    };
  });
})(angular.module('dtrw.filters.hyphenated-to-camel-case'));
