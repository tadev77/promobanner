const path = require('path');
const package = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: `promobanner-v${package.version}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'production',
};
