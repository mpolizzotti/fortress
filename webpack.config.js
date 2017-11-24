const webpack = require('webpack');
const path = require('path');

module.exports = env => {
    return {
        context: path.resolve(__dirname, 'src'),
        entry: './js/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            pathinfo: !env.prod
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
        }
    }
};
