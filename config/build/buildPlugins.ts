import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { IBuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev, analize }: IBuildOptions): Array<webpack.WebpackPluginInstance> => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: analize ? 'server' : 'disabled' }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
  }

  return plugins;
};
