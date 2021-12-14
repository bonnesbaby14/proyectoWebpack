const path = require("path");

module.exportd = {
    entry: "./src/index.js",
    output: {
        pth: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    resolve:{
        extensions:[".js"]
    }

}