webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!***************************************!*\
  !*** ./assets/component ^\.\/.*\.js$ ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./app/index.js": 6,
		"./film/index.js": 9,
		"./music/index.js": 10,
		"./sub-menu/index.js": 12
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!****************************************!*\
  !*** ./assets/component/film/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(/*! vue */ 1);
	
	var Music = Vue.extend({
	  template: 'Film'
	});
	module.exports  = Music;


/***/ },
/* 10 */
/*!*****************************************!*\
  !*** ./assets/component/music/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(/*! vue */ 1);
	
	var Music = Vue.extend({
	  template: __webpack_require__(/*! ./index.html */ 11),
	  // route: {
	  //   data (transition) {
	  //     console.info(transition.to.path)
	  //   }
	  // },
	});
	module.exports  = Music;


/***/ },
/* 11 */
/*!*******************************************!*\
  !*** ./assets/component/music/index.html ***!
  \*******************************************/
/***/ function(module, exports) {

	module.exports = "Muisc Page!";

/***/ }
]);
//# sourceMappingURL=1.1.js.map