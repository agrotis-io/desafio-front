module.exports = {
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};