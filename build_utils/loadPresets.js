const webpackMerge = require("webpack-merge");
const config = env => {
    let { presets } = env;
    let mergedPresets = [].concat(...[presets]);
    let mergedConfigs = mergedPresets.map(preset =>
        require(`./presets/webpack.${preset}`)(env)
    );

    return webpackMerge({}, ...mergedConfigs);
};

module.exports = config;
