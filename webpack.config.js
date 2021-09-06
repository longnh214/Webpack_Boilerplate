const path = require("path");

const config = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            { test: /\.css$/, use: "css-loader" },
            {
                test: /\.scss$/,
                use: ["css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]?[hash]",
                        },
                    },
                ],
            },
        ],
    },
    devtool: "source-map",
};

module.exports = config;
