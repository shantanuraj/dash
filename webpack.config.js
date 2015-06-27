module.exports = {
    entry: "./public/scripts/main.js",
    output: {
        path: __dirname + '/public/build/',
        filename: "main.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};