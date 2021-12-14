const path = require("path");
const HtmlWebackPlugin=require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
        ]
    },
    plugins:[
        new HtmlWebackPlugin({
            inject:true,
            template:"./public/index.html",
            filename:"./index.html"
        })
    ]

}