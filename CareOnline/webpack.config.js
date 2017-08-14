var config = {
   entry: './index.web.js',

   output: {
      path: "/public",
      filename: "main.js"
   },

   devServer: {
      inline: true,
      port: 5000
   },

   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react-native', 'es2015']
            }
         },
          {
           test: /\.(gif|jpe?g|png|svg)$/,
           loader: 'url-loader',
           options: {
               name: '[name].[ext]'
            }
         }
      ]
   },
   resolve: {
     // Maps the 'react-native' import to 'react-native-web'.
    alias: {
      'react-native': 'react-native-web'
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js' , '.es6.js']
   }
}

module.exports = config;
