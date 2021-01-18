const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = config => {
  const isDevelopment = process.env.NODE_ENV !== 'production';

  config.devServer.historyApiFallback = { disableDotRule: true };
  config.externals.push(...['react', 'react-dom']);
  
  //react-refresh must be loaded before other loaders
  config.module.rules.unshift({
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [
            isDevelopment && [require.resolve('react-refresh/babel'), {
              skipEnvCheck: true,
            }],
          ].filter(Boolean)
        },
      },
    ],
  });
  config.plugins.push(...[
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean));

  return config;
};