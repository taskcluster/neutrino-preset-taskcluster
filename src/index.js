'use strict';

const preset = require('neutrino-preset-node');
const path = require('path');
const merge = require('webpack-merge');

const config = merge(preset, {
  eslint: {
    configFile: path.join(__dirname, 'eslint.js')
  }
});

const babelLoader = config.module.loaders.find(l => l.loader.includes('babel'));

if (!babelLoader.query.plugins) {
  babelLoader.query.plugins = [];
}

babelLoader.query.plugins.push(require.resolve('babel-plugin-transform-strict-mode'));

module.exports = config;
