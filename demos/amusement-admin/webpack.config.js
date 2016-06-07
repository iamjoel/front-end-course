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
  module: {
      loaders: [
          { test: /\.html$/, loader: "html-loader" },
      ]
  },
  resolve: {
    alias: {
      // 'routes': path.resolve(__dirname, srcPrefix + 'routes'),
      vue: path.resolve(__dirname, "node_modules/vue/dist/vue.min.js"),
      'vue-router': path.resolve(__dirname,'node_modules/vue-router/dist/vue-router.min.js'),
      'music': path.resolve(__dirname, 'assets/component/music/index.js'),
      'film': path.resolve(__dirname, 'assets/component/film/index.js'),
      'setting':  path.resolve(__dirname, 'setting.js')
    }
  }
};
