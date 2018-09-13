const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
module.exports = merge(baseConfig, {
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 500,
    ignored: /node_modules/
  }
})
