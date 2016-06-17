var Vue = require('vue');
var menu = require('setting').menu;

var SubMenu = Vue.extend({
  template: require('./index.html'),
  created: function() {
    var self = this;
    // 感觉这种方式不太好~~~
    window.addEventListener('hashchange', function() {
      self.subMenu = getSubMenu(menu);
    })
  },
  data: function() {
    return {
      subMenu: getSubMenu(menu)
    };
  }
});

function getSubMenu(menuData) {
  // TODO 从路由中解析出 一级模块，二级模块
  var currPath = location.hash.replace(/^#!/, '');
  var subMenu = menuData.filter(function(item) {
    return item.path === currPath;
  });
  if (subMenu && subMenu[0]) {
    subMenu = subMenu[0].sub;
  }
  return subMenu;
}

module.exports = SubMenu;
