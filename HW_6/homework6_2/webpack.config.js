let path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const Bootrap = require('bootstrap');
// const BootstapSelect = require('bootstrap-select');

module.exports = {
   entry: {
       main: './src/app/app.js'
   },
   output: {
       filename: '[name].[chunkhash].js',
       path: path.resolve(__dirname, 'dist'),
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
        test: /\.(png|jp(e*)g|svg)$/i,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'assets/[hash]-[name].[ext]'
            } 
        }]
    }
    // ,{ // Code for copy all image file to assets folder
    //     test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    //     loader: 'file-loader?name=[name].[ext]&outputPath=assets/'
    // }
    ]
   },

   devtool: 'inline-source-map',
   devServer: {
       contentBase: './dist',
       port: 8080
   }
};
