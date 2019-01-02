# 部署配置

## 1. 通用打包服务器部署

```bash
npm run build
```

打包后`dest`文件夹内容直接发布到服务器

## 2. 静态预渲染服务器部署

```bash
npm run prerender
```

打包后`dest`文件夹内容直接发布到服务器

## 3. 在线 github 访问部署

> `vue ui`可视化操作，没生成`docs`文件夹配置
> `配置`=>`Vue CLI`=>`输出目录`=>`docs`=>`任务`=>`docs`

```bash
npm run docs
```

- 打包生成文件夹`docs`
- `docs`文件夹提交推送到 github
- github 项目的`setting`配置=>`GitHub Pages`选择`master branch/docs folder`
- 保存配置生成访问地址，直接访问
- 访问项目如果不存在，对应修改`vue.config.js`的`baseUrl`与当前路径匹配
