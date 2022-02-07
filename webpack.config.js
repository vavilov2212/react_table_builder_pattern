/* eslint-disable */
'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = function() {
  const config = {
    mode: 'development',
    context: path.join(__dirname, '/src/'),

    entry: {
      index: ['./index']
    },

    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '',
      filename: 'bundle.js',
    },

    resolve: {
      /* roots: [path.resolve('node_modules')], */
      modules: [path.resolve('node_modules')],
      extensions: ['.web.js', '.js', '.jsx', '.json']
    },

    resolveLoader: {
      roots: [path.resolve('node_modules')],
      modules: [path.resolve('node_modules')]
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: __dirname,
          options: {
            customize: require.resolve(
              'babel-preset-react-app/webpack-overrides'
            ),
            presets: [
              [
                require.resolve('babel-preset-react-app'),
                {
                  runtime: /*hasJsxRuntime ? 'automatic' : */ 'classic',
                },
              ],
            ],

            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: false,
          },
        },
        {
          test: /\.css$/,
          include: /src/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                /* sourceMap: true, */
                modules: {
                  mode: 'local',
                  localIdentName: "[name]__[local]--[hash:base64:5]"
                },
              }
            },
            /* { */
            /*   loader: MiniCssExtractPlugin.loader, */
            /*   options: { */
            /*     publicPath: '../', */
            /*     hmr: true */
            /*   }, */
            /* }, */
          ]
        },
      ]
    },

    /* devServer: { */
    /*   directory: path.join(__dirname, 'build'), */
    /* }, */

    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        inject: 'body',
        hash: true,
        favicon: 'images/favicon.png'
      }),
      /* new MiniCssExtractPlugin(), */
      /* new webpack.HotModuleReplacementPlugin() */
    ],
  }

  return config;
}

/* eslint-enable */
