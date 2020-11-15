/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
  },

  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, './dist'),
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
};
