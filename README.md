# Vue+Markdown 编译静态网站

## 在线效果展示

[https://kitorv.github.io/study-notes](https://kitorv.github.io/study-notes/)

基于 vue 搭建笔记内容使用`markdown`文件编写，自动编译成网站

## 更新日志

版本更新详细说明 [CHANGELOG](/CHANGELOG.md)

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
npm install
# OR
cnpm install
```

运行项目，浏览器访问

```bash
npm run serve
# OR
vue ui
```

打包发布

```bash
npm run build
```

## 文档编写

`markdown`文件编写,用`:::snippet`和`:::`包裹内容

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

## `setting.json`文件配置

- `url`：非必填，markdown 的文件路径，不配置生成分组标题
- `name`：必填，生成菜单标题或者分组标题
- `@`默认`src`目录

```javascript
{
  "routes": [
    { "path": "", "name": "JavaScript基础" },
    {
      "path": "@/notes/javascript/JAVASCRIPT-01.md",
      "name": "简介和使用",
      "date": "2018-12-09"
    }
  ]
}
```

## 部署配置

### 1. 通用打包服务器部署

```bash
npm run build
```

打包后`dest`文件夹内容直接发布到服务器

### 2. 静态预渲染服务器部署

```bash
npm run prerender
```

打包后`dest`文件夹内容直接发布到服务器

### 3. travis 自动构建 github-pages 在线访问

1. github 项目的`setting`配置=>`GitHub Pages`选择`gh-pages branch` 生成对应的访问地址[https://kitorv.github.io/study-notes/](https://kitorv.github.io/study-notes/)
2. [https://github.com/settings/profile](https://github.com/settings/profile)

=> Developer settings

=> Personal access tokens

=> Generate new token

=> 名称：GITHUB_TOKEN

=> 勾选 repo

=> 复制 GITHUB_TOKEN

3. Github 账号登陆 [https://www.travis-ci.org](https://www.travis-ci.org)
4. 添加当前项目到 Travis 自动化部署,设置 `Environment Variables` key 设置为 `GITHUB_TOKEN` 值设置为 `Github生成的GITHUB_TOKEN`
5. 提交代码会自动构推送到 `gh-pages ` 访问
