/**
 * Example webpack configuration with heavy commenting.
 * The focus of this exercise to understand and play
 * with different webpack configurations.
 *
 * Webpack documentation:
 * http://webpack.github.io/docs/configuration.html
 */

// Modules.
let config, path, srcRoot, distRoot, HtmlWebpackPlugin;

// Paths.
path = require('path');
srcRoot = path.join(__dirname, 'src');
distRoot = path.join(__dirname, 'dist');

// Plugins.
HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack configuration.
config = {
    // Base directory for resolving the entry.
    context: srcRoot,

    // Entry point for the bundle.
    entry: {
        appJs: ['./js/index.js']
    },

    // Output of compiled files.
    output: {
        path: distRoot,
        libraryTarget: 'this',
        filename: 'bundle.[name].js',
        pathinfo: true
    },

    // Configuration for webpack development server.
    devServer: {
        contentBase: distRoot
    },

    // Options affecting & loading modules.
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    // Options affecting the resolving of modules.
    resolve: {
        alias: {},
        extensions: ['', '.js']
    },

    // Configuration of plugins.
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(srcRoot, 'index.html'),
            inject: true,
            chunks: ['appJs']
        })
    ]
};

module.exports = config;