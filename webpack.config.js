const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: "none",
    entry: [
        path.resolve(__dirname, "./src/javascripts/index.js"),
        path.resolve(__dirname, "./src/stylesheets/style.scss"),
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "build.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // output file name
            template: "index.html", // template file name
        }),
        new MiniCssExtractPlugin({ filename: "app.css" }),
    ],
    devtool: "source-map",
};

module.exports = config;
