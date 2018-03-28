var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "./",
        filename: '[name].[hash].js'
    },
    devtool: 'cheap-module-source-map',
    target: 'web',

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader:['style-loader','css-loader'],
                    publicPath: '/dist/'
                })
                },
                {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=images/[name].[ext]"}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
        title:'GearUp Cloud',
        minify:{
            collapseWhitespace:true
        },
        hash:true,
        template:'./index.html',
    }),
    
    new ExtractTextPlugin({
                filename:'/styles/app.css',
                disable:true,
                allChunks:true
            })
    ]
};