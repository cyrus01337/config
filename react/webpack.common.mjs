import path from "path";

import { merge } from "webpack-merge";

import common from "../webpack.common.mjs";

export default merge(common, {
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            {
                exclude: path.resolve("./node_modules"),
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
