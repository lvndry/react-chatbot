const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const devMode = process.env.NODE_ENV !== "production";

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css",
});

const dotenvPlugin = new Dotenv();

module.exports = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "eslint-loader",
            options: {
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["url-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    historyApiFallback: true,
    host: "localhost",
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [htmlWebpackPlugin, miniCssExtractPlugin, dotenvPlugin],
};
