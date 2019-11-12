const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);

const port = 3000;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.listen(port, function () {
    console.log(`app listening on port ${port}!\n`);
});
