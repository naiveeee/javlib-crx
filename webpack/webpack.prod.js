const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const webpack = require('webpack')
module.exports = merge(baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
