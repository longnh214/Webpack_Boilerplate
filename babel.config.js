module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                targets: "> 0.25%, not dead",
                corejs: { version: 3, proposals: true },
            },
        ],
    ];

    return {
        presets,
    };
};
