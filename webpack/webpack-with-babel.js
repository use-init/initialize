const path = require('path');
const webpack = require("webpack");

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    'filename': [
      path.resolve(__dirname, 'filename.js')
    ]
  },
  devtool: DEBUG ? 'inline-sourcemap' : false,
  cache: true,
  output: {
    path: path.resolve(__dirname, 'libs/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: []
}

if (!DEBUG) {
  module.exports.output.filename = '[name].min.js';

  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
