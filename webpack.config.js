const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { //entry — файл, с которого начинается сборка приложения. Их может быть несколько, тогда и сборка будет не одна
        app: './index.js',
    },
    context: path.resolve(__dirname, "static_src"), //context — папка, в которой нужно искать entry
    output: { //output содержит имя файла сборки (filename) и путь до папки, куда этот файл будет сохранен (path)
        path: path.resolve(__dirname, "static", "build"), //__dirname — это константа node.js, определяемая автоматически в каждом файле и содержащая путь до папки, в которой лежит исполняемый файл (у нас это корневая папка)
        filename: 'app.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
    devServer: {
        compress: true,
        hot: true,
    },
};