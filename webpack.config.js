var path = require('path');
var resolve = require('path').resolve;
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './lib/page.js'
  },
  devServer: {
    stats: 'errors-only',
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      // {
      //   test: /\.js$/,
      //   loader: 'source-map-loader',
      //   options: { enforce: 'pre' }
      // }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
