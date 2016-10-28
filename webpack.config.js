/**
 * Example webpack configuration with heavy commenting.
 * The focus of this exercise to understand and play
 * with different webpack configurations.
 *
 * Webpack documentation:
 * http://webpack.github.io/docs/configuration.html
 */

// Modules.
let config, path, srcRoot, distRoot,
    HtmlWebpackPlugin, CleanWebpackPlugin, ExtractTextPlugin;

// Paths.
path = require('path');
srcRoot = path.join(__dirname, 'src');
distRoot = path.join(__dirname, 'dist');

// Plugins.
HtmlWebpackPlugin = require('html-webpack-plugin');
CleanWebpackPlugin = require('clean-webpack-plugin');
ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            // Embeds inline css within the <head> of the document.
            // The css-loader loads the content of a CSS file, while
            // the style-loader injects the CSS into the page.
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: path.resolve(srcRoot, 'style/inline'),
                loader: 'style-loader!css-loader'
            },
            // Emdeds inline less within the <head> of the document.
            // This configuration leverages the less-loader inconjunction
            // with the style-loader and css-loader.
            {
                test: /\.less$/,
                exclude: /node_modules/,
                include: path.resolve(srcRoot, 'style/inline'),
                loader: 'style-loader!css-loader!less-loader'
            },
            // Adds css as an external resource. This configuration leverages
            // the extract-text-webpack-plugin.
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: path.resolve(srcRoot, 'style/external'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            // Adds less as an external resource. This configuration leverages
            // the extract-text-webpack-plugin.
            {
                test: /\.less$/,
                exclude: /node_modules/,
                include: path.resolve(srcRoot, 'style/external'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            // Bootstrap javascript components depend on jQuery.
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            // Bootstrap uses different fonts. Need to configure webpack with
            // the ability to load files. This is done with the file-loader
            // https://github.com/webpack/file-loader
            {
                test: /\.woff2?|\.ttf|\.eot|\.svg/,
                loader: 'file-loader'
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
        }),

        new ExtractTextPlugin('app.css')
    ],

    // Options affecting the resolving of modules.
    resolve: {
        extensions: ['', '.js']
    }
};

module.exports = config;