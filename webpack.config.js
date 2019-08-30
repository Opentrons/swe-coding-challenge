// webpack base config
'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEV_MODE = process.env.NODE_ENV !== 'production'

module.exports = {
  target: 'web',

  entry: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')],

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  output: {
    filename: DEV_MODE ? 'bundle.js' : 'bundle.[contenthash].js',
  },

  mode: DEV_MODE ? 'development' : 'production',

  devtool: DEV_MODE ? 'eval-source-map' : 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-preset-env')({ stage: 0 }),
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
  },
}
