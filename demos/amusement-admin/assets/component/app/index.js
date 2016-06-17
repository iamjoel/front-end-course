var Vue = require('vue');

module.exports = Vue.extend({
  template: require('./index.html'),
  data: function() {
    return {
      subMenus: '',
      menu: require('setting').menu
    }
  },
  components: {
    'sub-menu': require('../sub-menu/index.js')
  }
});
