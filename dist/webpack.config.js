// webpack.config.js
var resolve = require('path').resolve;
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');
module.exports = {
    entry: resolve(__dirname, 'src/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'pricing-rule.js',
        library: 'pricingrule'
    },
    plugins: [
        new UglifyJsPlugin({
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        })
    ]
};
