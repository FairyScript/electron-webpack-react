module.exports = {
  //fix reload
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  },
  //fix react
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
  }
};