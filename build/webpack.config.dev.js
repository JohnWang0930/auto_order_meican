const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const projectPath = process.cwd();
const entry = './client/src/index.js';
const devtool = 'inline-source-map';
const title = '标题';
const templatePath = './build/template.html'

module.exports = {
    entry: path.resolve(projectPath, entry),
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
        })
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