var Vue = require('vue');
var VueRouter  = require('vue-router');

// 路由
Vue.use(VueRouter);

var router = new VueRouter();
router.map({
  '/music':{
    component: function (resolve) {
      return require('music');
    }
  },
  '/film':{
    component: Vue.extend({
        template: 'File page'
    })
  }
});


// var app = new Vue({
//   el: '#app'
// });

router.start(Vue.extend({}), '#app');
