# 学习笔记

## 在线笔记

[www.kitorv.com](http://www.kitorv.com)

基于 vue 搭建笔记内容使用`markdown`文件编写，自动编译成网站

## 运行环境搭建

安装依赖

```bash
npm install
```

运行项目，浏览器访问`http://localhost:8080`

```bash
npm run serve
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
let value = 123456
```

:::
````

自动编译成效果
![vue](src/assets/images/snippet-example.png)

### `setting.js`文件配置

配置 md 文件的加载路径,`url`为 markdown 的文件路径，没填写会生成分组标题，`name`菜单命名必填

```javascript
module.exports = {
  routes: [
    { path: "", name: "测试分组" },
    { path: "/notes/test.md", name: "测试" },
    { path: "/notes/test1.md", name: "测试1" },
    { path: "/notes/test2.md", name: "测试2" }
  ]
}
```
