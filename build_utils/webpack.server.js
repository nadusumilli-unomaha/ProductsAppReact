const path = require("path");
const SRC_DIR = path.resolve("./src");
const webpack_node_external = require("webpack-node-externals");

const config = env => ({
    target: "node",
    entry: path.join(SRC_DIR, "index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(SRC_DIR, "../build")
    },
    externals: [webpack_node_external()]
});

module.exports = config;
