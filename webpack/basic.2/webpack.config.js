const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // JavaScript 执行入口文件
    entry: "./main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
                // use: ExtractTextPlugin.extract({
                //     use: ["css-loader"]
                // })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name]_[contenthash:8].css"
        })
    ]
};
