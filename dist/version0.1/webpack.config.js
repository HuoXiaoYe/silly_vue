const path = require("path")

module.exports = {
    mode:"development",
    entry: [path.resolve(__dirname, "./src/index1.js")],
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"bundle.js"

    }
}