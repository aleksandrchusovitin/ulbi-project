import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildPaths } from './config/build/types/config';

export default (env: IBuildEnv) => {
  const mode = env.mode ?? 'development';
  const PORT = env.port ?? 3000;

  const isDev = mode === 'development';
  const analize = env.analize ?? false;

  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    analize,
  });
  return config;
};
