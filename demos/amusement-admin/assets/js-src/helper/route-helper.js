function Helper() {
  this.routes = {};
}

Helper.prototype = {
  add: function(routePath, compontPath) {
    this.routes[routePath] = {
      component: function(resolve) {
        require.ensure([], function(require) {

          /*
           * 必须这么些，如果没有字符串那前缀，会加载不到。
           * 字符串不能是变量。如果不加js，则如果
           */
          // routePath:'/music/xxx' => compontPath: /music/index/
          compontPath = compontPath || routePath.match(/^\/?([^/]*)/)[1] + '/index';
          compontPath = compontPath.replace(/\.js$/, '');
          resolve(require('../../component/' + compontPath + '.js'));
        });
      }
    }
  },
  get: function() {
    return this.routes;
  }
};

function generate(routes) {
  var routeMap = new Helper();
  routes.forEach(function(rule) {
    routeMap.add(rule.routePath, rule.controllerPath);
  });
  return routeMap.get();
}

module.exports = generate;
