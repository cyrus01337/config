"use strict";
const path = require("path");


module.exports = {
    context: path.resolve("./"),
    entry: {
        index: "./src/routes/entry.mjs"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                include: path.resolve("./src"),
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset/resource"
            },
            {
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false
                },
                test: /\.mjs/i
            }
        ]
    },
    output: {
        path: path.resolve("./dist")
    },
    resolve: {
        enforceExtension: false,
        extensions: ["...", ".mjs"],
        preferRelative: true
    }
};
