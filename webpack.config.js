let webpack = require('webpack');

module.exports = {
  entry: './browser/index.js',
  output: {
    path: __dirname,
    filename: './browser/bundle.js'
  },
  context: __dirname,
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};