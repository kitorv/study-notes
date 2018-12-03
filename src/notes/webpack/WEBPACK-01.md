# webpack 简单打包

## 概念

webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)

## 安装和简单打包

### 1. 全局命令安装

```bash
# 全局安装`webpack`和`webpack-cli`
npm insatall webpack webpack-cli -g
```

### 2. 初始化`package.json`

```bash
# 切换到文件夹初始化
npm init
```

### 3. 局部安装

```bash
# 全局安装局部也要安装，开发环境安装`webpack`
npm install webpack -d
npm install webpack-cli -d
```

### 4. 打包

- 默认入口`entry`:`src/index.js`
- 默认出口`output`:`dist/main.js`

```bash
# 执行打包命令
webpack
```
