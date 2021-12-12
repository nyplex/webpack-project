const { SourceMap } = require('module')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const dev = process.env.NODE_ENV === "dev"

let config = {
    entry: './assets/js/app.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    watch: dev,
    devtool: dev ? "cheap-module-eval-source-map" : "source-map",
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', { "targets": {
                        "browsers": ["Last 2 versions", "safari >= 7", "ie >= 7"]
                    }}]
                  ]
                }
              }
            }
        ]
    },
    plugins: [
        
    ]
    
}

if(!dev) {
    config.plugins.push(new UglifyJsPlugin({
        sourceMap: true
    }))
}

module.exports = config