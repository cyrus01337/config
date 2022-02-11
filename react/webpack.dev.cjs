"use strict";
let { merge } = require("webpack-merge");

let common = require("./webpack.common.cjs");


module.exports = merge(common, {
    bail: true,
    devServer: {
        client: {
            progress: true
        },
        // needed for proxy-testing but does prove to be messy...
        devMiddleware: {
            writeToDisk: true
        },
        historyApiFallback: {
            index: "/"
        },
        port: 4000,
        proxy: {
            "**": "http://localhost:3000"
        },
        static: "./src"
    },
    devtool: "eval-source-map",
    mode: "development",
    output: {
        clean: true,
    }
});
