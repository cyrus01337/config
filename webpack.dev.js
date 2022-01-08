"use strict";
let { merge } = require("webpack-merge");

let common = require("./webpack.common.js");

let fallback = ["ol"];


function resolveFallbacks() {
    let fallbacks = {};

    for (const library of fallback) {
        fallbacks[library] = require.resolve(library);
    }

    return fallbacks;
}


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
    resolve: {
        fallback: resolveFallbacks()
    }
});
