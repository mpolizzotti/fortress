/**
 * Example webpack configuration with heavy commenting.
 * The focus of this exercise to understand and play
 * with different webpack configurations.
 *
 * Webpack documentation:
 * http://webpack.github.io/docs/configuration.html
 */

// Modules.
let config, path, srcRoot, distRoot, webpack, lessLoader,
    HtmlWebpackPlugin, ExtractTextPlugin, LessAutoPrefixer,
    LessCleanCSS;

// Paths.
path = require('path');
srcRoot = path.join(__dirname, 'src');
distRoot = path.join(__dirname, 'dist');

// Modules.
webpack = require('webpack');

// Plugins.
HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack configuration.
config = {
    // Base directory for resolving the entry.
    context: srcRoot,

    // Entry point for the bundle.
    entry: {
        appJs: ['./js/app.js']
    },

    // Output of compiled files.
    output: {
        path: distRoot,
        filename: 'bundle.[name].js',
    },

    // Configuration for webpack development server.
    devServer: {
        contentBase: './dist'
    },

    // Options affecting & loading modules.
    module: {
        loaders: [
            // Use babel-loader to transpile our es6 code
            // into es5 compatible code.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    // Configuration of plugins.
    plugins: [
        // Generate index.html file.
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: path.join(srcRoot, 'index.html'),
            inject: true,
            cache: true,
            chunks: ['appJs']
        })
    ],

    // Options affecting the resolving of modules.
    resolve: {
        extensions: ['', '.js']
    }
};

module.exports = config;