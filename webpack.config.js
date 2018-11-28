const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    output: {
        filename: 'app.bundle.min.js'
    },
    mode: process.argv[2] == '--dev' ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
