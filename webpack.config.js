var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, './app/app.module.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: "style!css" }, {
                test: /\.scss$/,
                'loaders': 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: { 'chart': require.resolve('chart.js') }
    },
    devtool: "#inline-source-map"
}
