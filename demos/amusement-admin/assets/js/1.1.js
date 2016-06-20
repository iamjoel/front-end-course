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
		"./film/index.js": 13,
		"./music/song/list.js": 16,
		"./sub-menu/index.js": 9
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
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!****************************************!*\
  !*** ./assets/component/film/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var RouteComponent = __webpack_require__(/*! route-component */ 14);
	
	var Main = RouteComponent.extend({
	  template: __webpack_require__(/*! ./index.html */ 15),
	});
	module.exports  = Main;

/***/ },
/* 14 */
/*!*************************************************!*\
  !*** ./assets/js-src/helper/route-component.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(/*! vue */ 1);
	
	var RouteComponent = Vue.extend({
	  route: {
	    data (transition) {
	      // 页面切换时会执行
	      this.updatePageRoute(transition.to.path);
	    }
	  },
	  vuex: {
	    actions: {
	      updatePageRoute: function(store, route){
	        store.dispatch('updatePageRoute', route);
	        console.info('dispatch:updatePageRoute, route: ' + route);
	      }
	    }
	  }
	});
	module.exports  = RouteComponent;

/***/ },
/* 15 */
/*!******************************************!*\
  !*** ./assets/component/film/index.html ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "Film Page!";

/***/ },
/* 16 */
/*!*********************************************!*\
  !*** ./assets/component/music/song/list.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var RouteComponent = __webpack_require__(/*! route-component */ 14);
	
	var Main = RouteComponent.extend({
	  template: __webpack_require__(/*! ./index.html */ 17),
	});
	module.exports  = Main;


/***/ },
/* 17 */
/*!************************************************!*\
  !*** ./assets/component/music/song/index.html ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = "Music Page!";

/***/ }
]);
//# sourceMappingURL=1.1.js.map