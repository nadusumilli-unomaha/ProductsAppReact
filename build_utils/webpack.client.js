const path = require("path");
const SRC_DIR = path.resolve("./src");
const cssPlugin = require("mini-css-extract-plugin");

const config = env => ({
    entry: path.join(SRC_DIR, "/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../public")
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    cssPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [new cssPlugin()]
});

module.exports = config;
