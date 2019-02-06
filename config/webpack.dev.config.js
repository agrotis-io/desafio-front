const baseWebpackConfig = require('./webpack.config.js');

const devWebpackConfig = {
  mode: 'development',
};

module.exports = {
  ...baseWebpackConfig,
  ...devWebpackConfig,
};