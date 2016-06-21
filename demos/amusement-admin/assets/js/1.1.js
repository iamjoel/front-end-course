webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!***************************************!*\
  !*** ./assets/component ^\.\/.*\.js$ ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./app/index.js": 7,
		"./film/index.js": 14,
		"./music/song/list.js": 17,
		"./sub-menu/index.js": 10
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
	webpackContext.id = 6;


/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!****************************************!*\
  !*** ./assets/component/film/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var RouteComponent = __webpack_require__(/*! route-component */ 15);
	
	var Main = RouteComponent.extend({
	  template: __webpack_require__(/*! ./index.html */ 16),
	});
	module.exports  = Main;

/***/ },
/* 15 */
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
/* 16 */
/*!******************************************!*\
  !*** ./assets/component/film/index.html ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "Film Page!";

/***/ },
/* 17 */
/*!*********************************************!*\
  !*** ./assets/component/music/song/list.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var RouteComponent = __webpack_require__(/*! route-component */ 15);
	
	var Main = RouteComponent.extend({
	  template: __webpack_require__(/*! ./list.html */ 18),
	  data: {
	    list:[]
	  },
	  ready: function () {
	    this.$http.get('/assets/component/music/song/list-data.json').then(function (data) {
	      this.$set('list', data.data);
	    });
	  }
	});
	module.exports  = Main;


/***/ },
/* 18 */
/*!***********************************************!*\
  !*** ./assets/component/music/song/list.html ***!
  \***********************************************/
/***/ function(module, exports) {

	module.exports = "<table class=\"table table-hover table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <th>歌名</th>\r\n      <th>歌手</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr v-for=\"item in list\">\r\n      <td>{{item.name}}</td>\r\n      <td>{{item.singer}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n";

/***/ }
]);
//# sourceMappingURL=1.1.js.map