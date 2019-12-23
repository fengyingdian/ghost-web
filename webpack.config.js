const path = require('path');
const webpack = require('webpack');
const HtmlWebpackplugin=require('html-webpack-plugin');

module.exports = {
  entry: {
    pageA: './src/pageA/index',
    pageB: './src/pageB/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './static/js/[name]/index.[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackplugin({
      template: './src/pageA/index.html',
      filename: './pageA/index.html',
      chunks: ['pageA'],
      hash: true,
      minify: {
        // collapseWhitespace: true,
        removeAttributeQuotes: true,
      }
    }),
    new HtmlWebpackplugin({
      template: './src/pageB/index.html',
      filename: './pageB/index.html',
      chunks: ['pageB'],
      hash: true,
      minify: {
        // collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    })
  ],
  devServer: {
    contentBase: './dist',
    port: '3000',
  },
  resolve: {},
}
