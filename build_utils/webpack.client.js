const path = require("path");
const SRC_DIR = path.resolve("./src");

const config = env => ({
    entry: path.join(SRC_DIR, "/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../public")
    }
});

module.exports = config;
