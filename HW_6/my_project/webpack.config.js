let path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
   entry: {
       main: './src/app/app.js'
   },
   output: {
       filename: '[name].[chunkhash].js',
       path: path.resolve(__dirname, 'dist')
   },
   plugins: [
       new CleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
        template: './src/index.html'
       }),
       new ExtractTextPlugin({
        filename: 'styles.[chunkhash].css',
       })
   ],
   module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
        })
    },
    {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }]
   },

   devtool: 'inline-source-map',
   devServer: {
       contentBase: './dist',
       port: 8080
   }
};
