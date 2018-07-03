# Node 简介以及环境安装

## Node 是什么？

- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
- Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
- Node.js 的包管理器 npm，是全球最大的开源库生态系统。

## Node 优点

- 采用事件驱动、异步编程，为网络服务而设计。
  其实 Javascript 的匿名函数和闭包特性非常适合事件驱动、异步编程。而且 JavaScript 也简单易学，
  很多前端设计人员可以很快上手做后端设计。
- Node.js 非阻塞模式的 IO 处理给 Node.js 带来在相对低系统资源耗用下的高性能与出众的负载能力，
- 非常适合用作依赖其它 IO 资源的中间层服务。
- Node.js 轻量高效，可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。
- Node 非常适合如下情况：在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。

## Node 缺点

- 可靠性低
- 单进程，单线程，只支持单核 CPU，不能充分的利用多核 CPU 服务器。一旦这个进程崩掉，那么整个 web 服务就崩掉了。

## Node 环境安装

1.  下载 Node 安装文件： [https://nodejs.org/](https://nodejs.org/en/)
2.  版本说明：LTS 稳定版（用于实际开发生产环境），Current 最新版（主要用于学习和新特性的使用尝试）
3.  已经安装再度安装，版本会自动升级为最新的安装版本
4.  单击安装文件，直接一直下一步知道安装完成
5.  打开命令行 cmd 输入`node --version`或者`node -v`指令输出 Node 的版本号即 Node 安装完成
6.  继续在命令工具继续输入`npm --version`或者`npm -v`指令输出 npm 的版本号即 npm 安装完成

## 运行第一个 JavaScript 文件

### 1. 创建 helloworld.js 文件

```JavaScript
console.log("Hello World");
```

### 2. 打开 cmd 命令控制台

### 3. 切换到 helloworld.js 的目录，命令控制台输入代码

```JavaScript
cd helloworld.js所在的文件目录
```

### 4. 输入执行命令回车执行

```JavaScript
node helloworld.js
```

### 5. 命令控制台输出

```JavaScript
Hello World
```

### 6. 第一个 node 文件运行完成
