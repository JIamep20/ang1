var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

function configurate()
{
    var obj = {};

    obj.entry = './src/app.js';
    obj.output = {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'bundle.js'
    };

    obj.module = {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    };

    obj.plugins = [new htmlWebpackPlugin({
        template: './src/index.html',
        filename: '../index.html'
    })];

    obj.devServer = {
        port: 4455,
        contentBase: 'public/',
        stats: {colors: true}
    };

    return obj;
}

module.exports = configurate();