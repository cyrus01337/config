import { merge } from "webpack-merge";

import common from "./webpack.common.mjs";


export default merge(common, {
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
