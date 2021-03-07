const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

const config = {
  target: "node",
  mode: process.env.APP_STAGE === "prod" ? "production" : "development",
  entry: "./src/index.ts",
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  externals: [nodeExternals()],
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new NodemonPlugin({
      script: "./build/server.js",
      watch: path.resolve("./build"),
    }),
  ],
};

module.exports = config;
