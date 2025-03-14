import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { BuildPaths } from "./types/types";

export function buildPlugins( paths: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.html),
    }),
    new webpack.ProgressPlugin(),
  ]
}