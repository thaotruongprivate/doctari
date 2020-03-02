const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    plugins: [new Dotenv()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    node: {
        fs: 'empty'
    }
};
