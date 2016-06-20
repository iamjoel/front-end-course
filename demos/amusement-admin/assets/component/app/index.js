var Vue = require('vue');

module.exports = Vue.extend({
  template: require('./index.html'),
  data: function() {
    return {
      modules: require('setting').modules
    }
  },
  methods: {
    getPath: function (module) {
      var defalutSubModule = module.sub.filter(function (subModule) {
        return module.default === subModule.id;
      })[0];

      return '/' + module.modulePrefix + defalutSubModule.path;
    }
  },
  components: {
    'sub-menu': require('../sub-menu/index.js')
  },
  store: require('store'),
  vuex: {
    getters: {
      pageRoute: function(state){
        return state.pageRoute;
      }
    }
  }
});
