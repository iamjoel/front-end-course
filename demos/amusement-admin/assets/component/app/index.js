var Vue = require('vue');
module.exports = Vue.extend({
  template: require('./index.html'),
  data: function() {
    return {
      menu: require('setting').menu
    }
  }
});