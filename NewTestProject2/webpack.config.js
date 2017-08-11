const webpack = require('webpack');

module.exports = {
  entry: {
    main: './index.web.js',
  },
  output: {
      path: "/public",
      filename: "main.js"
   },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};
