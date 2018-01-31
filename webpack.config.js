const path = require('path');

module.exports = {
  entry: './frontend/components/root.js',
  output: {
    filename: 'bundle.js',
  },
  node: {
  fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", "*"]
  }
};
