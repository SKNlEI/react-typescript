const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

console.log('isDev环境', isDev)

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@src": path.resolve(__dirname, '../src'),
      "@views": path.resolve(__dirname, '../src/views/'),
      "@server": path.resolve(__dirname, '../src/server/'),
      "@assets": path.resolve(__dirname, '../src/assets/'),
      "@hooks": path.resolve(__dirname, '../src/hokks/'),
      "@components": path.resolve(__dirname, '../src/components/'),
      "@constant": path.resolve(__dirname, '../src/constant/'),
      "@global": path.resolve(__dirname, '../src/global/'),
      "@router": path.resolve(__dirname, '../src/router/'),
      "@store": path.resolve(__dirname, '../src/store/'),
      "@utils": path.resolve(__dirname, '../src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ].filter(Boolean)
}