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
      components: path.resolve(__dirname, '../src/components/'),
      pages: path.resolve(__dirname, '../src/pages/'),
      utils: path.resolve(__dirname, '../src/utils/'),
    },
  },
};