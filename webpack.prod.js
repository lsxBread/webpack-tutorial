const commonConfig = require('./webpack.common.js')

const prodConfig = {
  test: /\.(sa|sc|c)ss?$/,
  use: [
    "style-loader",
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[hash:base64]'
        } 
      }
    },
    "postcss-loader",
    "sass-loader"
  ],
}

commonConfig.module.rules.push(prodConfig)

module.exports = commonConfig 