var Vue = require('vue');

var Music = Vue.extend({
  template: require('./index.html'),
  // route: {
  //   data (transition) {
  //     console.info(transition.to.path)
  //   }
  // },
});
module.exports  = Music;
