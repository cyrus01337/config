import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from "webpack-merge";

import common from "./webpack.common.mjs";
import prod from "../webpack.prod.mjs";

export default merge(common, prod, {
    entry: "./src/index.mjs",
    experiments: {
        outputModule: true,
        topLevelAwait: true
    },
    output: {
        library: {
            type: "module"
        }
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});
