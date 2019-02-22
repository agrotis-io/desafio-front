const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.html$/,
        use: { loader: 'html-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    alias: {
      '@app/components': path.resolve(__dirname, '../src/components/'),
      '@app/pages': path.resolve(__dirname, '../src/pages/'),
      '@app/utils': path.resolve(__dirname, '../src/utils/'),
      '@app/reducers': path.resolve(__dirname, '../src/reducers'),
      '@app/actions': path.resolve(__dirname, '../src/actions'),
      '@app/store': path.resolve(__dirname, '../src/store'),
      '@app/api': path.resolve(__dirname, '../src/api'),
    },
  },
};
