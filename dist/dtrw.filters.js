/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _hyphenatedToCamelCase = __webpack_require__(1);
	
	var _hyphenatedToCamelCase2 = _interopRequireDefault(_hyphenatedToCamelCase);
	
	var _orderObjectBy = __webpack_require__(2);
	
	var _orderObjectBy2 = _interopRequireDefault(_orderObjectBy);
	
	var _phone = __webpack_require__(3);
	
	var _phone2 = _interopRequireDefault(_phone);
	
	var _ucFirst = __webpack_require__(4);
	
	var _ucFirst2 = _interopRequireDefault(_ucFirst);
	
	var ngModule = angular.module('dtrw.filters', [_hyphenatedToCamelCase2['default'].name, _orderObjectBy2['default'].name, _phone2['default'].name, _ucFirst2['default'].name]);
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _filter = __webpack_require__(7);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var ngModule = angular.module('dtrw.filters.hyphenated-to-camel-case', []);
	
	ngModule.filter('hyphenatedToCamelCase', _filter2['default']);
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _filter = __webpack_require__(5);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var ngModule = angular.module('dtrw.filters.order-object-by', []);
	
	ngModule.filter('orderObjectBy', _filter2['default']);
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _filter = __webpack_require__(6);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var ngModule = angular.module('dtrw.filters.phone', []);
	
	ngModule.filter('phone', _filter2['default']);
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _filter = __webpack_require__(8);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var ngModule = angular.module('dtrw.filters.uc-first', []);
	
	ngModule.filter('ucFirst', _filter2['default']);
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function orderObjectByFilter() {
	  return function (items, field, reverse) {
	    var filtered = [];
	    angular.forEach(items, function (item) {
	      filtered.push(item);
	    });
	    function index(obj, i) {
	      return obj[i];
	    }
	
	    filtered.sort(function (a, b) {
	      var comparator;
	      var reducedA = field.split('.').reduce(index, a);
	      var reducedB = field.split('.').reduce(index, b);
	      if (reducedA === reducedB) {
	        comparator = 0;
	      } else {
	        comparator = reducedA > reducedB ? 1 : -1;
	      }
	      return comparator;
	    });
	    if (reverse) {
	      filtered.reverse();
	    }
	    return filtered;
	  };
	}
	
	exports['default'] = orderObjectByFilter;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function phone() {
	  return function (text) {
	
	    if (typeof text !== 'string') {
	      return '';
	    }
	
	    if (10 === text.length) {
	      return '(' + text.slice(0, 3) + ') ' + text.slice(3, 6) + '-' + text.slice(6);
	    }
	
	    return text;
	  };
	}
	
	exports['default'] = phone;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function hyphenatedToCamelCaseFilter() {
	  return function (text) {
	    if (typeof text !== 'string') {
	      return '';
	    }
	    return text.replace(/-([^!.])/g, function (g) {
	      return g[1].toUpperCase();
	    });
	  };
	}
	
	exports['default'] = hyphenatedToCamelCaseFilter;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function ucFirstFilter() {
	  return function (text) {
	    if (typeof text !== 'string') {
	      return '';
	    }
	    return text.charAt(0).toUpperCase() + text.slice(1);
	  };
	}
	
	exports['default'] = ucFirstFilter;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjdhZWIwODM4MTA3N2MyMDExNGEiLCJ3ZWJwYWNrOi8vLy4vZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h5cGhlbmF0ZWQtdG8tY2FtZWwtY2FzZS9oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vcmRlci1vYmplY3QtYnkvb3JkZXItb2JqZWN0LWJ5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGhvbmUvcGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91Yy1maXJzdC91Yy1maXJzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZGVyLW9iamVjdC1ieS9vcmRlci1vYmplY3QtYnktZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGhvbmUvcGhvbmUtZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHlwaGVuYXRlZC10by1jYW1lbC1jYXNlL2h5cGhlbmF0ZWQtdG8tY2FtZWwtY2FzZS1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91Yy1maXJzdC91Yy1maXJzdC1maWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztrREN0Q2tDLENBQWdFOzs7OzBDQUNoRSxDQUE4Qzs7OztrQ0FDOUMsQ0FBMEI7Ozs7b0NBQzFCLENBQWdDOzs7O0FBRWxFLEtBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENB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LENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFHO01BQ3JFOztBQUVELFlBQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztFQUNIOztzQkFFYyxLQUFLOzs7Ozs7Ozs7Ozs7QUNmcEIsVUFBUywyQkFBMkIsR0FBRztBQUNyQyxVQUFPLGNBQUksRUFBSTtBQUNiLFNBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQzVCLGNBQU8sRUFBRSxDQUFDO01BQ1g7QUFDRCxZQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFdBQUM7Y0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO01BQUEsQ0FBQyxDQUFDO0lBQzNELENBQUM7RUFDSDs7c0JBRWMsMkJBQTJCOzs7Ozs7Ozs7Ozs7QUNUMUMsVUFBUyxhQUFhLEdBQUc7QUFDdkIsVUFBTyxjQUFJLEVBQUk7QUFDYixTQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUM1QixjQUFPLEVBQUUsQ0FBQztNQUNYO0FBQ0QsWUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztFQUNIOztzQkFFYyxhQUFhIiwiZmlsZSI6ImR0cncuZmlsdGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjdhZWIwODM4MTA3N2MyMDExNGFcbiAqKi8iLCJpbXBvcnQgaHlwaGVuYXRlZFRvQ2FtZWxDYXNlIGZyb20gJy4vY29tcG9uZW50cy9oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UvaHlwaGVuYXRlZC10by1jYW1lbC1jYXNlJztcbmltcG9ydCBvcmRlck9iamVjdEJ5ICAgICAgICAgZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLW9iamVjdC1ieS9vcmRlci1vYmplY3QtYnknO1xuaW1wb3J0IHBob25lICAgICAgICAgICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvcGhvbmUvcGhvbmUnO1xuaW1wb3J0IHVjRmlyc3QgICAgICAgICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvdWMtZmlyc3QvdWMtZmlyc3QnO1xuXG5jb25zdCBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdkdHJ3LmZpbHRlcnMnLCBbXG4gIGh5cGhlbmF0ZWRUb0NhbWVsQ2FzZS5uYW1lLFxuICBvcmRlck9iamVjdEJ5Lm5hbWUsXG4gIHBob25lLm5hbWUsXG4gIHVjRmlyc3QubmFtZVxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vZmlsdGVycy5qc1xuICoqLyIsImltcG9ydCBmaWx0ZXIgZnJvbSAnLi9oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UtZmlsdGVyJztcblxuY29uc3QgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZHRydy5maWx0ZXJzLmh5cGhlbmF0ZWQtdG8tY2FtZWwtY2FzZScsIFtdKTtcblxubmdNb2R1bGUuZmlsdGVyKCdoeXBoZW5hdGVkVG9DYW1lbENhc2UnLCBmaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2NvbXBvbmVudHMvaHlwaGVuYXRlZC10by1jYW1lbC1jYXNlL2h5cGhlbmF0ZWQtdG8tY2FtZWwtY2FzZS5qc1xuICoqLyIsImltcG9ydCBmaWx0ZXIgZnJvbSAnLi9vcmRlci1vYmplY3QtYnktZmlsdGVyJztcblxuY29uc3QgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZHRydy5maWx0ZXJzLm9yZGVyLW9iamVjdC1ieScsIFtdKTtcblxubmdNb2R1bGUuZmlsdGVyKCdvcmRlck9iamVjdEJ5JywgZmlsdGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9jb21wb25lbnRzL29yZGVyLW9iamVjdC1ieS9vcmRlci1vYmplY3QtYnkuanNcbiAqKi8iLCJpbXBvcnQgZmlsdGVyIGZyb20gJy4vcGhvbmUtZmlsdGVyJztcblxuY29uc3QgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZHRydy5maWx0ZXJzLnBob25lJywgW10pO1xuXG5uZ01vZHVsZS5maWx0ZXIoJ3Bob25lJywgZmlsdGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGU7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2NvbXBvbmVudHMvcGhvbmUvcGhvbmUuanNcbiAqKi8iLCJpbXBvcnQgZmlsdGVyIGZyb20gJy4vdWMtZmlyc3QtZmlsdGVyJztcblxuY29uc3QgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZHRydy5maWx0ZXJzLnVjLWZpcnN0JywgW10pO1xuXG5uZ01vZHVsZS5maWx0ZXIoJ3VjRmlyc3QnLCBmaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZTtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vY29tcG9uZW50cy91Yy1maXJzdC91Yy1maXJzdC5qc1xuICoqLyIsImZ1bmN0aW9uIG9yZGVyT2JqZWN0QnlGaWx0ZXIoKSB7XG4gIHJldHVybiAoaXRlbXMsIGZpZWxkLCByZXZlcnNlKSA9PiB7XG4gICAgdmFyIGZpbHRlcmVkID0gW107XG4gICAgYW5ndWxhci5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgZmlsdGVyZWQucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBpbmRleChvYmosIGkpIHtcbiAgICAgIHJldHVybiBvYmpbaV07XG4gICAgfVxuXG4gICAgZmlsdGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGNvbXBhcmF0b3I7XG4gICAgICB2YXIgcmVkdWNlZEEgPSBmaWVsZC5zcGxpdCgnLicpLnJlZHVjZShpbmRleCwgYSk7XG4gICAgICB2YXIgcmVkdWNlZEIgPSBmaWVsZC5zcGxpdCgnLicpLnJlZHVjZShpbmRleCwgYik7XG4gICAgICBpZiAocmVkdWNlZEEgPT09IHJlZHVjZWRCKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGFyYXRvciA9IChyZWR1Y2VkQSA+IHJlZHVjZWRCID8gMSA6IC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb21wYXJhdG9yO1xuICAgIH0pO1xuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBmaWx0ZXJlZC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3JkZXJPYmplY3RCeUZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2NvbXBvbmVudHMvb3JkZXItb2JqZWN0LWJ5L29yZGVyLW9iamVjdC1ieS1maWx0ZXIuanNcbiAqKi8iLCJmdW5jdGlvbiBwaG9uZSgpIHtcbiAgcmV0dXJuIHRleHQgPT4ge1xuXG4gICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlmICgxMCA9PT0gdGV4dC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBgKCR7dGV4dC5zbGljZSgwLCAzKX0pICR7dGV4dC5zbGljZSgzLCA2KX0tJHt0ZXh0LnNsaWNlKDYpfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBob25lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vY29tcG9uZW50cy9waG9uZS9waG9uZS1maWx0ZXIuanNcbiAqKi8iLCJmdW5jdGlvbiBoeXBoZW5hdGVkVG9DYW1lbENhc2VGaWx0ZXIoKSB7XG4gIHJldHVybiB0ZXh0ID0+IHtcbiAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLy0oW14hLl0pL2csIGcgPT4gZ1sxXS50b1VwcGVyQ2FzZSgpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHlwaGVuYXRlZFRvQ2FtZWxDYXNlRmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vY29tcG9uZW50cy9oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UvaHlwaGVuYXRlZC10by1jYW1lbC1jYXNlLWZpbHRlci5qc1xuICoqLyIsImZ1bmN0aW9uIHVjRmlyc3RGaWx0ZXIoKSB7XG4gIHJldHVybiB0ZXh0ID0+IHtcbiAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGV4dC5zbGljZSgxKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdWNGaXJzdEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2NvbXBvbmVudHMvdWMtZmlyc3QvdWMtZmlyc3QtZmlsdGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==