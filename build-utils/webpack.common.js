const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonPaths = require("./common-paths");

const HWPConfig = (viewNames) => {
  return viewNames.map(
    (viewName) =>
      new HtmlWebpackPlugin({
        title: `My Extension Project (${viewName})`,
        filename: `${viewName}.html`,
        template: path.join(commonPaths.chromePath, `views/${viewName}.html`),
        chunks: [viewName],
      })
  );
};

module.exports = {
  entry: {
    window: [path.join(commonPaths.extensionPath, "window")],
    popup: [path.join(commonPaths.extensionPath, "popup")],
    background: [path.join(commonPaths.extensionPath, "background")],
    content: [path.join(commonPaths.extensionPath, "content")],
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].bundle.js",
    chunkFilename: "js/[id].chunk.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [...HWPConfig(["content", "popup", "window"])],
};
