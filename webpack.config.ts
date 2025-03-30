import path from 'path';
import webpack from 'webpack';

import { BuildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/types';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };
  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:5111';

  const config: webpack.Configuration = BuildWebpackConfig(
    {
      mode, paths, isDev, port: PORT, apiUrl,
    },
  );

  return config;
};
