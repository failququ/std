import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/types';

export default ({ config }: {config:webpack.Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    output: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');
  // alias for storybook
  config.resolve = config.resolve ?? {};
  config.resolve.alias = { ...config.resolve.alias, '@': paths.src };

  // @ts-ignore
  config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config?.module?.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config?.module?.rules.push(buildCssLoader(true));

  config?.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
