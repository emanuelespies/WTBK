/* eslint @typescript-eslint/no-var-requires: "off" */
const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    singleRun: true,
    colors: true,
    port: 8081,
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: ['spec.bundle.js'],
    preprocessors: {
      'spec.bundle.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: { stats: 'errors-only' },
    plugins: [
      require('karma-webpack'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine'),
    ],
  });
};
