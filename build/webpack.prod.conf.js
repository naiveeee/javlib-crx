const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // JS 执行入口文件
  entry: {
    "/content-scripts/main": path.resolve(__dirname, "../src/prod.js"),
    "/background/main": path.resolve(__dirname, "../src/background/main.js")
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "[name].js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(ttf|woff)$/,
        loader: "url-loader?limit=1000000"
      }
    ]
  },
  resolve: { alias: { 'vue': 'vue/dist/vue.js' } }
};
