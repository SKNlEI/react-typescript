const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 9999,
    hot: true,
    host: '0.0.0.0',
    stats: 'errors-only',
    clientLogLevel: 'warning'
  }
})