const path = require('path');

module.exports = {
  target: 'web',
  node: {
    fs: 'empty',
    module: 'empty',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
