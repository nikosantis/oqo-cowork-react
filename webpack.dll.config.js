const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom'
    ]
  },
  mode: process.env.NODE_ENV,
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? 'js/[name].[hash].dll.js' : 'js/[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['js/*.dll.*']
    }),
    new Dotenv({
      path: './.env',
      safe: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}
