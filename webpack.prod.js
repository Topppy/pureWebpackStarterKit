const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const ASSET_PATH = 'https://github.com/Topppy/pureWebpackStarterKit/dist/' || '/';

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  output: {
    publicPath: ASSET_PATH,
  },
  plugins: [
    new UglifyJSPlugin({
      parallel: true,
      cache: '.cache/',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
});
