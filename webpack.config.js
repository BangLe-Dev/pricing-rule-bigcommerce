// webpack.config.js

const {resolve} = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')


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
        extensions: [ '.tsx', '.ts', '.js' ],
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
}