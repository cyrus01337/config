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
                include: path.resolve("./src/images"),
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset/resource"
            },
            {
                resolve: {
                    fullySpecified: false
                },
                test: /\.mjs/i
            }
        ]
    },
    output: {
        clean: true,
        path: path.resolve("./dist")
    },
    resolve: {
        enforceExtension: false,
        extensions: ["...", ".mjs"],
        preferRelative: true
    }
};
