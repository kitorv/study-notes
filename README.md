# Vue+Markdown 编译静态网站

## 在线效果展示

[www.kitorv.com](http://www.kitorv.com)

基于 vue 搭建笔记内容使用`markdown`文件编写，自动编译成网站

## 运行环境搭建

### Node 下载安装

[Node 下载](http://nodejs.cn/download)

### 包管理器

> `node`自带的`npm`部分文件可能不能下载或者比较慢建议安装`cnpm`

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 安装 Vue 环境

```bash
npm install -g @vue/cli
```

### 安装依赖

切换到代码根目录

```bash
cd 代码目录
```

安装依赖

```bash
cnpm install
```

运行项目，浏览器访问`http://localhost:8080`

```bash
npm run serve
# OR
vue ui
```

打包发布，编译成静态的 html 文件

```bash
npm run build
```

## 文档编写

### `markdown`文件编写

用`:::snippet`和`:::`包裹内容

````md
:::snippet 片段标题

```html
<template></template>
```

```css
.md-class {
  color: #333333;
}
```

```javascript
let value = 123456;
```

:::
````

## 自动编译成效果

![vue](src/assets/images/snippet-example.png)

## `setting.js`文件配置

```javascript
module.exports = {
  // github的地址
  github: "https://github.com/kitorv/study-notes",
  // 1.url：markdown的文件路径，不配置生成分组标题
  // 2.name：生成菜单标题或者分组标题，必填
  routes: [
    { path: "", name: "JavaScript基础" },
    { path: "@/notes/javascript/JAVASCRIPT-01.md", name: "简介和使用", date: "2018-12-09" }
  ]
};
```
