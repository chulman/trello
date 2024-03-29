const merge = require('webpack-merge');
const common = require('./webpack.config');

// https://webpack.js.org/configuration/dev-server/
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
        publicPath: '/',
        historyApiFallback: true,
        port: 3000,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
    module: {
        rules: [
        ]
    }
});