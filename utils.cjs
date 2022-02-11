function resolveFallbacks(...libraries) {
    let fallbacks = {};

    for (const library of libraries) {
        fallbacks[library] = require.resolve(library);
    }

    return fallbacks;
}


module.exports = { resolveFallbacks };
