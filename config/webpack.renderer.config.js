const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = config => {
  const isDevelopment = process.env.NODE_ENV !== 'production';

  config.devServer.historyApiFallback = { disableDotRule: true };
  config.externals.push(...['react', 'react-dom']);

  //react-refresh
  const jsloader = config.module.rules.findIndex(i => i.test.toString().includes('js'));
  const tsloader = config.module.rules.findIndex(i => i.test.toString().includes('ts'));

  //JavaScript
  config.module.rules[jsloader].use.options.plugins.push(...[
    isDevelopment && [require.resolve('react-refresh/babel'), {
      skipEnvCheck: true,
    }],
  ].filter(Boolean));

  ////TypeScript
  config.module.rules[tsloader].use.options = {
    getCustomTransformers: () => ({
      before: [require('react-refresh/typescript')()]
    }),
  }

  config.plugins.push(...[
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean));

  return config;
};