var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/main.js",
  output: {
    path: __dirname + "/src/public/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      //HTML
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      //JS/JSX
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      //SASS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      //FONTS
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: debug ? [
    new ExtractTextPlugin('styles.css', {
      allChunks: false
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin('styles.css', {
      allChunks: false
    })
  ],
  
};