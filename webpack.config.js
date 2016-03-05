var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

var config = {
  debug: true,
  devtool: 'eval-source-map',
  entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './app/index.js'),
  ],
  output: {
    path: buildPath,
    publicPath: "http://localhost:8080/public/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [nodeModulesPath],
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },

  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin()]
};

module.exports = config;
