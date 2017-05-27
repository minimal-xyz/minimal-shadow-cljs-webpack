
var path = require("path");
var resolve = require("path").resolve;
var webpack = require("webpack");

module.exports = {
  entry: {
    main: "./lib/page.js"
  },
  devServer: {
    stats: 'errors-only',
    contentBase: resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
