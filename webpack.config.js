const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: 'firefox',
    contentBase: './dist',
  },
};