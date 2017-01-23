var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const prod = process.env.PROD == 'prod' || false;

console.log('Production: ' + prod);

function configurate()
{
    var obj = {};

    obj.entry = ['./src/app.js'];
    obj.output = {
        path: path.join(__dirname, 'public', 'js'),
        publicPath: prod ? '/js/' : '',
        filename: 'bundle.js'
    };

    obj.module = {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.html$/, loader: "raw-loader"}
        ]
    };

    obj.plugins = [new htmlWebpackPlugin({
        template: './src/index.html',
        filename: prod ? '../index.html' : 'index.html'
    }),
    new CleanWebpackPlugin(['public'])
    ];

    return obj;
}

module.exports = configurate();