import path from "path";

import glob from "glob";


function getEntries() {
    let entries = {};
    let directories = glob.sync("./src/routes/**/entry.mjs");
    let names = directories.map(route => route.toLowerCase())
        .map(lowered => path.dirname(lowered))
        .map(parent => path.basename(parent));

    for (let i = 0; i < directories.length; i++) {
        let name = names[i];
        let directory = directories[i];
        let actualName = name === "routes" ?
            "index" :
            name;

        entries[actualName] = directory;
    }

    return entries;
}


export default {
    context: path.resolve("./"),
    entry: getEntries(),
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
                exclude: path.resolve("./node_modules"),
                resolve: {
                    fullySpecified: false
                },
                test: /\.mjs$/i
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
