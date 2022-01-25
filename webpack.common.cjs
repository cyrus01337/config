"use strict";
const path = require("path");


function resolveFallbacks(...libraries) {
    let fallbacks = {};

    for (const library of libraries) {
        fallbacks[library] = require.resolve(library);
    }

    return fallbacks;
}


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
        fallback: resolveFallbacks(),
        preferRelative: true
    }
};
