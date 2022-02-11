"use strict";
const { merge } = require("webpack-merge");

const common = require("../webpack.common.cjs");
const utils = require("../utils.cjs");

let rules = common.module.rules;

for (let i = 0; i < rules.length; i++) {
    // here, we numerically index in order to retrieve the entry from the rules array
    // and perform direct mutations to it by proxy through the indexed entry
    let rule = rules[i];
    let pattern = rule.test;

    if (!pattern.test(".mjs") || rule.use) continue;
    // if (pattern.test(".mjs") && !rule.use) {

    rule.test = /\.(mjs|jsx)/i;
    rule.use = {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    };

    break;
}


module.exports = merge(common, {
    module: {
        rules: [
            ...rules
        ]
    },
    resolve: {
        extensions: [...common.resolve.extensions, ".jsx"],
        fallback: utils.resolveFallbacks("prop-types", "react", "react-dom")
    }
});
