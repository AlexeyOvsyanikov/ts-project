const { resolve } = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: 'ts-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: resolve(__dirname, ''),
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  mode: 'production',
};
