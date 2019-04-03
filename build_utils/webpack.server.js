const path = require("path");
const SERVER_DIR = path.resolve("./server");
const webpack_node_external = require("webpack-node-externals");

const config = env => ({
    target: "node",
    entry: path.join(SERVER_DIR, "index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../build")
    },
    externals: [webpack_node_external()]
});

module.exports = config;
