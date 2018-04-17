const path = require('path');
const HappyPack = require('happypack');
const os = require('os'); // node 提供的系统操作模块
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeAttributeQuotes: true,
      },
    }),
    new ExtractTextPlugin('styles.[hash].css'),
    new HappyPack({ // 基础参数设置
      id: 'babel', // 上面loader?后面指定的id
      loaders: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env'],
        },
      }], // 实际匹配处理的loader
      threadPool: happyThreadPool,
      verbose: true,
    }),
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      include: [path.resolve('src')],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        }, 'postcss-loader'],
      }),
    },
    {
      test: /\.js?$/,
      include: [path.resolve('src')],
      exclude: /node_modules/,
      use: {
        loader: 'happypack/loader?id=babel',
      },
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 4096,
          name: 'img/[name].[hash].[ext]',
        },
      },
    },
    {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'video:poster'],
        },
      },
    },
    ],
  },
};
