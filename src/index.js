'use strict';

const preset = require('neutrino-preset-node');
const path = require('path');
const merge = require('webpack-merge');

const config = merge(preset, {
  eslint: {
    configFile: path.join(__dirname, 'eslint.js')
  }
});

module.exports = config;
