"use strict";
const { merge } = require("webpack-merge");

const common = require("../webpack.common.cjs");
const utils = require("../utils.cjs");


module.exports = merge(common, {
    module: {
        rules: [
            {
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false
                },
                test: /\.(mjs|jsx)/i,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [...common.resolve.extensions, ".jsx"],
        fallback: utils.resolveFallbacks("prop-types", "react", "react-dom")
    }
});
