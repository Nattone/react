const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    entry: { //entry — файл, с которого начинается сборка приложения. Их может быть несколько, тогда и сборка будет не одна. Входная точка
        app: './index.jsx',
    },
    context: path.resolve(__dirname, "static_src"), //context — папка, в которой нужно искать entry
    output: { //output содержит имя файла сборки (filename) и путь до папки, куда этот файл будет сохранен (path) (куда складывать билд)
        path: path.resolve(__dirname, "static", "build"), //__dirname — это константа node.js, определяемая автоматически в каждом файле и содержащая путь до папки, в которой лежит исполняемый файл (у нас это корневая папка)
        filename: 'app.js',
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devServer: {
        compress: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // если js, использовать babel
                include: path.resolve(__dirname, "static_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react'],
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    (argv.mode === 'production')
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
});