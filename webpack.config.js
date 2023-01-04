const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ['./src/*.html'],
        open: true,
    },
    plugins: [ // Watching index.html
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // publicPath: '/', Not sure when to implement this
    },
    optimization: {
        runtimeChunk: 'single',
    },
}