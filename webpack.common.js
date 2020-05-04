const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "./src/build"),
    filename: "main.js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })]
}