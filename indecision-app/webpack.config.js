//entry point -> output
// console.log(__dirname);
// console.log(path.join(__dirname, "public"));

const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        //regex match .js
        test: /\.js$/,
        //any js file inside node_modules
        exclude: /node_modules/
      },
      {
        //this will compile both css and scss files
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  //used to indicate where error is
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
