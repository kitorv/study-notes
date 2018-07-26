# webpack 环境配置

## 基本`webpack.config.js`配置

```javascript
const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");

module.exports = {
  //   打包模式：开发模式
  mode: "development",
  //   入口配置
  entry: {
    main: "./src/index.js"
  },
  //   出口配置
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  //   服务器配置
  devServer: {
    // 根目录
    contentBase: "./src",
    // 服务器端口
    port: 9000,
    // 服务器实时刷新
    inline: true,
    // 打包文件进度
    progress: true
  },
  //loader配置
  module: {
    rules: [
      {
        //   css文件解析
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        //   stylus文件解析
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        //   本地图片加载
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: "file-loader?name=./images/[name].[ext]"
      },
      {
        //   字体文件加载
        test: /\.(eot|svg|ttf|woff)$/,
        use: "file-loader?name=./images/[name].[ext]"
      },
      {
        //   html加载远程路径资源，图片地址
        test: /\.html$/,
        use: ["html-withimg-loader"]
      },
      {
        //   babel转码默认读取根目录的【.babelrc】文件配置
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  // 插件配置
  plugins: [
    //   提取分离html的js和其他配置
    new HtmlWebpackplugin({
      template: "./src/index.html"
    })
  ]
};
```
