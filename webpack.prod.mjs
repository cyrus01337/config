import { merge } from "webpack-merge";

import common from "./webpack.common.mjs";

module.exports = merge(common, {
    mode: "production"
});
