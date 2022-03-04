"use strict";
const { merge } = require("webpack-merge");

const common = require("../webpack.common.cjs");


module.exports = merge(common, {
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false
                },
                test: /\.(mjs|jsx)$/i,
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
        extensions: [".jsx"]
    }
});
