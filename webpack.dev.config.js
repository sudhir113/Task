var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist/');
const APP_DIR = path.resolve(__dirname, './src/');

module.exports = function () {
    const isDev = process.env.NODE_ENV === 'development';

    let config = {
        entry: [
            "react-hot-loader/patch",
            "webpack-dev-server/client?http://localhost:3000",
            "webpack/hot/only-dev-server",
            "./src/index.js"
        ],
        output: {
            path: path.join(__dirname, "dist"),
      publicPath: "/",
      filename: "app.[hash].js"
        },
        devtool: "eval-source-map",
        target: 'web',

        resolve: {
            extensions: ['.js']
        },

        module : {
            loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader:['css-loader','sass-loader'],
                    publicPath: '/dist/'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=images/[name].[ext]"
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: ['file-loader']
              },
              {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      mimetype: 'application/font-woff'
                    }
                  }
                ]
              },
              {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      mimetype: 'application/octet-stream'
                    }
                  }
                ]
              },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                DEV: isDev
            }),

            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': "jquery",
            'window.$': 'jquery'

        }),
            new HtmlWebpackPlugin({
                title:'Product Page',
                minify:{
                    collapseWhitespace:true
                },
                hash:true,
                template:'./index.html',
            }),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
            new ExtractTextPlugin({
                filename:'app.css',
                disable:true,
                allChunks:true
            })
        ]
    };

    if (isDev) {
        config.devServer = {
            publicPath: "/",
            hot: true,
            port: 3000,
            host: 'localhost',
            historyApiFallback: true,
            contentBase: './',
            open:true,
            compress:true,
            inline:true
        };
    }
    return config;
}