var config = require('./config');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: require('path').join(__dirname, './dist'),
    filename: 'server.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
  ],
};
