var config = require('./webpack.config.js');
var path = require('path');
var webpack = require('webpack');

config.plugins = config.plugins.concat([new webpack.HotModuleReplacementPlugin()]);

config.entry = config.entry.concat(['webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/dev-server']);

config.devServer = {
    contentBase: path.join(__dirname, 'public'),
    host: 'localhost',
    port: 8888,
    stats: 'minimal',
    hot: true,
    inline: true
}

module.exports = config;