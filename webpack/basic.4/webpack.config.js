const path = require("path");

module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        clientLogLevel: "warning",
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: "localhost",
        port: 9999,
        proxy: {
            "/api": {
                target: "http://chelaile.net.cn",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};
