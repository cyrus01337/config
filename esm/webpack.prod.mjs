import path from "path";

import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
    entry: "./src/index.mjs",
    experiments: {
        outputModule: true,
        topLevelAwait: true
    },
    externals: ["glob"],
    mode: "production",
    module: {
        rules: [
            {
                exclude: path.resolve("./node_modules"),
                resolve: {
                    fullySpecified: false
                },
                test: /\.mjs$/i,
            }
        ]
    },
    output: {
        library: {
            type: "module"
        },
        path: path.resolve("./dist")
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ["...", ".mjs"]
    },
    stats: {
        errorDetails: true
    },
    target: "es2021"
};
