var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var Clean = require('clean-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

process.env.BABEL_ENV = TARGET;

var common = {
  entry: PATHS.app,
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      },
      { 
      	test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/, 
      	loader: 'url-loader?limit=8192'
      },
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Erfara'
    })
  ]
};

if(TARGET === 'devStart' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce the amount of output
      stats: 'errors-only',

      // parse host and port from env so this is easy
      // to customize
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.DefinePlugin({
        // This tells React to build in development mode
        'process.env.NODE_ENV': JSON.stringify('development'),
        // This is for the facebook SDK; otherwise it tries to resolve xmlhttprequest to a node_module
        IN_BROWSER: true,
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
      // new Clean(['build']), (this line cleans everything that isn't webpack generated)
      new webpack.DefinePlugin({
        // This tells React to build in production mode which is smaller
        'process.env.NODE_ENV': JSON.stringify('production'),
        // This is for the facebook SDK; otherwise it tries to resolve xmlhttprequest to a node_module
        IN_BROWSER: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
