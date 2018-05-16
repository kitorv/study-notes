## Node简介以及环境安装
### Node是什么？
- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 
- Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 
- Node.js 的包管理器 npm，是全球最大的开源库生态系统。
### Node优点
- 采用事件驱动、异步编程，为网络服务而设计。
 其实Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程。而且JavaScript也简单易学，
很多前端设计人员可以很快上手做后端设计。
- Node.js非阻塞模式的IO处理给Node.js带来在相对低系统资源耗用下的高性能与出众的负载能力，
- 非常适合用作依赖其它IO资源的中间层服务。
- Node.js轻量高效，可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。
- Node非常适合如下情况：在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。
### Node缺点
- 可靠性低
- 单进程，单线程，只支持单核CPU，不能充分的利用多核CPU服务器。一旦这个进程崩掉，那么整个web服务就崩掉了。
- 不过以上缺点可以可以通过代码的健壮性来弥补。
### Node环境安装
1. 下载Node安装文件： [https://nodejs.org/](https://nodejs.org/en/)
2. 版本说明：LTS稳定版（用于实际开发生产环境），Current最新版（主要用于学习和新特性的使用尝试）
3. 已经安装再度安装，版本会自动升级为最新的安装版本
4. 单击安装文件，直接一直下一步知道安装完成
5. 打开命令行cmd输入`node --version`或者`node -v`指令输出Node的版本号即Node安装完成
6. 继续在命令工具继续输入`npm --version`或者`npm -v`指令输出npm的版本号即npm安装完成
### 运行第一个JavaScript文件
1. 创建helloworld.js文件
```JavaScript
console.log("Hello World");
```
2. 打开cmd命令控制台
3. 切换到helloworld.js的目录，命令控制台输入代码
```
cd helloworld.js所在的文件目录
```
4. 输入执行命令回车执行
```JavaScript
node helloworld.js
```
5. 命令控制台输出
```JavaScript
Hello World
```
6. 第一个node文件运行完成