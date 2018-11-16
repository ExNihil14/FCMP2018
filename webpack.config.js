const webpack = require('webpack');
const path = require('path');

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, '../app/index.js')
    ]
  },
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};