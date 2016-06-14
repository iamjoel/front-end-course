// 路由配置
var routes = [
{
  'routePath': '/music'
},{
  'routePath': '/film',
  'controllerPath': 'film/index'
}];


// 将配置转化成
var routesMap = require('./helper/route-helper')(routes);

module.exports = routesMap;
