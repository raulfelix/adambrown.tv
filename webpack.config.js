var webpack = require('webpack');
var paths = require('./gulppaths');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');

module.exports = {
  cache: true,
  devtool: 'source-map',

  entry: {
    app:    paths.js + '/main.js',
    vendor: paths.js + '/vendor.js'
  },

  output: {
    path: paths.compiled + '/js',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  plugins: [
    new CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),
    new OccurenceOrderPlugin()
  ]
};