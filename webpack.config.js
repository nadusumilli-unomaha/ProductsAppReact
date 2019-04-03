const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");
const loadConfig = env => require(`./build_utils/webpack.${env.mode}`)(env);
const loadPresets = env => require("./build_utils/loadPresets")(env);

const SRC_DIR = path.resolve("./src");

let config = ({ mode, presets } = { mode: "server", presets: "babel" }) =>
    webpackMerge(
        {
            mode: "development",
            entry: path.join(SRC_DIR, "index"),
            output: {
                filename: "bundle.js",
                path: path.resolve(__dirname, "public")
            }
        },
        loadConfig({ mode, presets }),
        loadPresets({ mode, presets })
    );

module.exports = config;
