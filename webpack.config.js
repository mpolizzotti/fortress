// Import dependencies.
const webpack = require('webpack');
const _ = require('lodash');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Export configuration.
module.exports = (env) => {

    env = (_.isPlainObject(env)) ? env : {};
    env = (_.isEmpty(env)) ? {dev: true} : env;
    if (!_.has(env, 'dev') && !_.has(env, 'prod') && !_.has(env, 'test')) {
        throw new Error('Missing environment property on webpack command.');
    }

    return {
        context: path.resolve(__dirname, 'src'),
        entry: './js/app.js',
        output: {
            filename: 'bundle.[name].[hash].js',
            path: path.resolve(__dirname, 'dist'),
            pathinfo: (_.has(env, 'dev') && env.dev) ? true : false,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ],
        devServer: {
            contentBase: path.resolve(__dirname, 'dist')
        }
    };
};