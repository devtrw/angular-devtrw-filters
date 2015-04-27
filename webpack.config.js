var webpack = require('webpack');
var deepExtend = require('deep-extend');

var baseConfig = {
  context: __dirname + '/src',
  entry:   './filters.js',
  output:  {
    path:     __dirname + '/dist',
    filename: 'dtrw.filters.js'
  },
  stats:   {
    colors:  true,
    reasons: true
  },
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],
  module:  {
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate!babel!jshint', exclude: /node_modules/}
    ]
  },
  jshint:  {
    failOnHint: true,
    emitErrors: true
  }
};

var devConfig = {
  devtool: 'inline-source-map'
};

var prodConfig = {
  output:  {
    filename: 'dtrw.filters.min.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({exclude: /node_modules/})
  ],
  devtool: 'source-map'
};

var configContexts = {
  development: devConfig,
  production:  prodConfig,
  test:        deepExtend({}, devConfig)
};

var context = process.env.NODE_ENV || 'development';
var contextConfig = deepExtend({}, baseConfig, configContexts[context]);

console.log('Webpack config is in ' + context + ' context');
module.exports = contextConfig;
