const commonConfig = require('./webpack.common.js')
console.log(commonConfig)

const devConfig = {
  test: /\.(sa|sc|c)ss?$/,
  use: [
    "style-loader",
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[path][name]__[local]'
        } 
      }
    },
    "postcss-loader",
    "sass-loader"
  ],
}

commonConfig.module.rules.push(devConfig)

module.exports = commonConfig
