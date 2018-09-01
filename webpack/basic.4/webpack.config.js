const path = require("path");

module.exports = {
    entry: "a.js",
    devServer: {
        clientLogLevel: "warning",
        historyApiFallback: true,
        // hot: true,
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
