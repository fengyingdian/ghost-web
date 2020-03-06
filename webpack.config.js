const path = require('path');
// const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    pageA: './src/staticserver/pageA/index',
    pageB: './src/staticserver/pageB/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './static/js/[name]/index.[hash:8].js',
  },
  module: {
    rules: [
      // suport react components
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js', '.jsx'] },
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackplugin({
      template: './src/staticserver/pageA/index.html',
      filename: './pageA/index.html',
      chunks: ['pageA'],
      hash: true,
      minify: {
        // collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackplugin({
      template: './src/staticserver/pageB/index.html',
      filename: './pageB/index.html',
      chunks: ['pageB'],
      hash: true,
      minify: {
        // collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
  devServer: {
    contentBase: './dist',
    port: '3000',
  },
  // externals: [ nodeExternals() ],
  // resolve: {},
};
