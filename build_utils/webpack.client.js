const path = require("path");
const SRC_DIR = path.resolve("./src");

const config = env => ({
    entry: path.join(SRC_DIR, "client/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(SRC_DIR, "../public")
    }
});

module.exports = config;
