/* eslint @typescript-eslint/no-var-requires: "off" */
const webpack = require('webpack');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  settings: {
    'import/resolver': webpack,
  },
  env: {
    node: true,
  },
};
