// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
//
// module.exports = {
//     entry: './app/main.ts',
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".js"]
//     },
//     devServer: {
//         contentBase: './dist'
//     },
//     plugins: [
//         new CleanWebpackPlugin(['dist']),
//         new HtmlWebpackPlugin({
//             title: 'eayunUI'
//         })
//     ],
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].[hash].bundle.js',
//         chunkFilename: '[id].[hash].chunk.js'
//     }
// }

module.exports = require('./config/webpack.dev.js');