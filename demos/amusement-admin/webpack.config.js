var path = require('path');
var srcPrefix = './assets/js-src/';
module.exports = {
  entry: {
    'app': srcPrefix + 'app'
  },
  output: {
    'path': 'assets/js',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, "node_modules/vue/dist/vue.min.js"),
      'vue-router': path.resolve(__dirname,'node_modules/vue-router/dist/vue-router.min.js'),
      'music': path.resolve(__dirname, 'assets/module/music/index.js')
    }
  }
};
