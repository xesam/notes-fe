const path = require("path");

module.exports = {
    entry: {
        a: "./entry-1",
        b: "./entry-2"
    },
    output: {
        filename: "[name]-[id]-[hash].js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {}
};
