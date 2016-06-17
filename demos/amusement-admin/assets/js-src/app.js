var Vue = require('vue');
var VueRouter = require('vue-router');


// 路由
Vue.use(VueRouter);
var router = new VueRouter();
router.map(require('./routes'));

router.beforeEach(function(transition) {
  // transition.to.path;// 当前路由
  transition.next()
});

// 启动
router.start(require('../component/app/index'), '#app');
