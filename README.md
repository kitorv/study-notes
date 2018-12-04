# 学习笔记

## 在线笔记

 [www.kitorv.com](http://www.kitorv.com)

基于 vue 搭建笔记内容使用`markdown`文件编写，自动编译成网站

## 运行环境搭建

安装依赖

```bash
npm install
```

运行项目,浏览器访问`http://localhost:8080`

```bash
npm run serve
```

打包发布

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

### `router.js`文件配置

配置 md 文件的加载路径

```javascript
children: [
    {
        path: "/home/javascript-01",name: "plan",
        component: () => import("@/notes/test.md")
    }
]
```

### `home.vue`文件配置

没有`url`地址生成标题，`url`对应`router.js`的`path`路径

```javascript
routeList: [
    { url: "", name: "Javascript基础" },
    { url: "/home/javascript-01", name: "Javascript概要" }
]
```
