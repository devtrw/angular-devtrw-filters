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
	
	var _ucFirst = __webpack_require__(3);
	
	var _ucFirst2 = _interopRequireDefault(_ucFirst);
	
	var ngModule = angular.module('dtrw.filters', [_hyphenatedToCamelCase2['default'].name, _orderObjectBy2['default'].name, _ucFirst2['default'].name]);
	
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
	
	var _filter = __webpack_require__(4);
	
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
	
	var ngModule = angular.module('dtrw.filters.uc-first', []);
	
	ngModule.filter('ucFirst', _filter2['default']);
	
	exports['default'] = ngModule;
	module.exports = exports['default'];

/***/ },
/* 4 */
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
	    return text.replace(/-([a-z])/g, function (g) {
	      return g[1].toUpperCase();
	    });
	  };
	}
	
	exports['default'] = hyphenatedToCamelCaseFilter;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjVhMDk1NjVmNjY3NDk2MDUzMzgiLCJ3ZWJwYWNrOi8vLy4vZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h5cGhlbmF0ZWQtdG8tY2FtZWwtY2FzZS9oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vcmRlci1vYmplY3QtYnkvb3JkZXItb2JqZWN0LWJ5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWMtZmlyc3QvdWMtZmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UvaHlwaGVuYXRlZC10by1jYW1lbC1jYXNlLWZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZGVyLW9iamVjdC1ieS9vcmRlci1vYmplY3QtYnktZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWMtZmlyc3QvdWMtZmlyc3QtZmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7a0RDdENrQyxDQUFnRTs7OzswQ0FDaEUsQ0FBOEM7Ozs7b0NBQzlDLENBQWdDOzs7O0FBRWxFLEtBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQzlDLG1DQUFzQixJQUFJLEVBQzFCLDJCQUFjLElBQUksRUFDbEIscUJBQVEsSUFBSSxDQUNiLENBQUMsQ0FBQzs7c0JBRVksUUFBUTs7Ozs7Ozs7Ozs7Ozs7O21DQ1ZKLENBQW1DOzs7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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGY1YTA5NTY1ZjY2NzQ5NjA1MzM4XG4gKiovIiwiaW1wb3J0IGh5cGhlbmF0ZWRUb0NhbWVsQ2FzZSBmcm9tICcuL2NvbXBvbmVudHMvaHlwaGVuYXRlZC10by1jYW1lbC1jYXNlL2h5cGhlbmF0ZWQtdG8tY2FtZWwtY2FzZSc7XG5pbXBvcnQgb3JkZXJPYmplY3RCeSAgICAgICAgIGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1vYmplY3QtYnkvb3JkZXItb2JqZWN0LWJ5JztcbmltcG9ydCB1Y0ZpcnN0ICAgICAgICAgICAgICAgZnJvbSAnLi9jb21wb25lbnRzL3VjLWZpcnN0L3VjLWZpcnN0JztcblxuY29uc3QgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZHRydy5maWx0ZXJzJywgW1xuICBoeXBoZW5hdGVkVG9DYW1lbENhc2UubmFtZSxcbiAgb3JkZXJPYmplY3RCeS5uYW1lLFxuICB1Y0ZpcnN0Lm5hbWVcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2ZpbHRlcnMuanNcbiAqKi8iLCJpbXBvcnQgZmlsdGVyIGZyb20gJy4vaHlwaGVuYXRlZC10by1jYW1lbC1jYXNlLWZpbHRlcic7XG5cbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2R0cncuZmlsdGVycy5oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UnLCBbXSk7XG5cbm5nTW9kdWxlLmZpbHRlcignaHlwaGVuYXRlZFRvQ2FtZWxDYXNlJywgZmlsdGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9jb21wb25lbnRzL2h5cGhlbmF0ZWQtdG8tY2FtZWwtY2FzZS9oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UuanNcbiAqKi8iLCJpbXBvcnQgZmlsdGVyIGZyb20gJy4vb3JkZXItb2JqZWN0LWJ5LWZpbHRlcic7XG5cbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2R0cncuZmlsdGVycy5vcmRlci1vYmplY3QtYnknLCBbXSk7XG5cbm5nTW9kdWxlLmZpbHRlcignb3JkZXJPYmplY3RCeScsIGZpbHRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vY29tcG9uZW50cy9vcmRlci1vYmplY3QtYnkvb3JkZXItb2JqZWN0LWJ5LmpzXG4gKiovIiwiaW1wb3J0IGZpbHRlciBmcm9tICcuL3VjLWZpcnN0LWZpbHRlcic7XG5cbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2R0cncuZmlsdGVycy51Yy1maXJzdCcsIFtdKTtcblxubmdNb2R1bGUuZmlsdGVyKCd1Y0ZpcnN0JywgZmlsdGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGU7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2NvbXBvbmVudHMvdWMtZmlyc3QvdWMtZmlyc3QuanNcbiAqKi8iLCJmdW5jdGlvbiBoeXBoZW5hdGVkVG9DYW1lbENhc2VGaWx0ZXIoKSB7XG4gIHJldHVybiB0ZXh0ID0+IHtcbiAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLy0oW2Etel0pL2csIGcgPT4gZ1sxXS50b1VwcGVyQ2FzZSgpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHlwaGVuYXRlZFRvQ2FtZWxDYXNlRmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vY29tcG9uZW50cy9oeXBoZW5hdGVkLXRvLWNhbWVsLWNhc2UvaHlwaGVuYXRlZC10by1jYW1lbC1jYXNlLWZpbHRlci5qc1xuICoqLyIsImZ1bmN0aW9uIG9yZGVyT2JqZWN0QnlGaWx0ZXIoKSB7XG4gIHJldHVybiAoaXRlbXMsIGZpZWxkLCByZXZlcnNlKSA9PiB7XG4gICAgdmFyIGZpbHRlcmVkID0gW107XG4gICAgYW5ndWxhci5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgZmlsdGVyZWQucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBpbmRleChvYmosIGkpIHtcbiAgICAgIHJldHVybiBvYmpbaV07XG4gICAgfVxuXG4gICAgZmlsdGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGNvbXBhcmF0b3I7XG4gICAgICB2YXIgcmVkdWNlZEEgPSBmaWVsZC5zcGxpdCgnLicpLnJlZHVjZShpbmRleCwgYSk7XG4gICAgICB2YXIgcmVkdWNlZEIgPSBmaWVsZC5zcGxpdCgnLicpLnJlZHVjZShpbmRleCwgYik7XG4gICAgICBpZiAocmVkdWNlZEEgPT09IHJlZHVjZWRCKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGFyYXRvciA9IChyZWR1Y2VkQSA+IHJlZHVjZWRCID8gMSA6IC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb21wYXJhdG9yO1xuICAgIH0pO1xuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBmaWx0ZXJlZC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3JkZXJPYmplY3RCeUZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2NvbXBvbmVudHMvb3JkZXItb2JqZWN0LWJ5L29yZGVyLW9iamVjdC1ieS1maWx0ZXIuanNcbiAqKi8iLCJmdW5jdGlvbiB1Y0ZpcnN0RmlsdGVyKCkge1xuICByZXR1cm4gdGV4dCA9PiB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRleHQuc2xpY2UoMSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVjRmlyc3RGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9jb21wb25lbnRzL3VjLWZpcnN0L3VjLWZpcnN0LWZpbHRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=