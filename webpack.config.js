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
    HtmlWebpackPlugin, CleanWebpackPlugin;

// Paths.
path = require('path');
srcRoot = path.join(__dirname, 'src');
distRoot = path.join(__dirname, 'dist');

// Modules.
webpack = require('webpack');

// Plugins.
HtmlWebpackPlugin = require('html-webpack-plugin');
CleanWebpackPlugin = require('clean-webpack-plugin');

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
            },
            // The css-loader loads the content of a CSS file,
            // while the style-loader injects the CSS into the page.
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    // Configuration of plugins.
    plugins: [
        // Clean /dist directory before building.
        // Order matters in this case. The clean plugin needs
        // to appear in the top of the plugin list.
        // https://github.com/johnagan/clean-webpack-plugin
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true, 
            dry: false,
            exclude: []
        }),

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