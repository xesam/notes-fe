const path = require("path");
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My Flux'
        })
    ]
};
