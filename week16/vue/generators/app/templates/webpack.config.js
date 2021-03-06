const VueLoaderPlugin = require("vue-loader/lib/plugin") //installed via npm
const CopyPlugin = require("copy-webpack-plugin") //installed via npm
const webpack = require("webpack") //to access built-in plugins

module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/*.html", to: "[name].[ext]" }],
    }),
  ],
}