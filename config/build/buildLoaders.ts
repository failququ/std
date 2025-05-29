import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const babelLoader = buildBabelLoader({ ...options, isTsx: true });

  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: {
  //     loader: 'ts-loader',
  //     options: {
  //       transpileOnly: true,
  //     },
  //   },
  //   exclude: /node_modules/,
  // };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,

    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    // babelLoader,
    // tsLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
}
