const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

const projectPath = process.cwd();
const entry = './client/src/index.js';
const devtool = 'inline-source-map';
const title = '标题';
const templatePath = './build/template.html'

module.exports = {
    entry: [
        path.resolve(projectPath, entry),
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&noInfo=true',
    ],
    devtool,
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(projectPath, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title,
            template: templatePath,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};