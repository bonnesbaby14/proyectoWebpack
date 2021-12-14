const path = require("path");
const HtmlWebackPlugin=require("html-webpack-plugin");
const MinicssExtactPlugin=require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        },{
            test:/\.css|.styl$/i,
            use:[MiniCssExtractPlugin.loader,"css-loader","stylus-loader"],
            
        },
        {

        }
        ]
    },
    plugins:[
        new HtmlWebackPlugin({
            inject:true,
            template:"./public/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin(),

    ]

}