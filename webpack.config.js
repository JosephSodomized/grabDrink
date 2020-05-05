const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [ // tutaj plugin kopiuje to co mamy w template - czyli nasz wzór - do folderu .dist jako index.html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: false
        })

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
}