const path = require("path");
const webpack = require("webpack");

const DEBUG = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    "index": [
      path.resolve(__dirname, INPUTFILE)
    ]
  },
  devtool: DEBUG ? "inline-sourcemap" : false,
  cache: true,
  output: {
    path: path.resolve(__dirname, 'libs/'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [
      ".ts",
      ".js"
    ]
  },
  plugins: []
};

if (!DEBUG) {
  module.exports.output.filename = "[name].min.js";

  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
