
var path = require("path");
var resolve = require("path").resolve;
var webpack = require("webpack");

module.exports = {
  entry: {
    main: "./lib/page.js"
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname),
    publicPath: "/"
  },
  output: {
    path: path.join(__dirname),
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
