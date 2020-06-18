//export object
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      }
    ]
  }
}