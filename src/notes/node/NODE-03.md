# 常用系统模块

## http 模块

```javascript
// 1. 加载 http 核心模块
var http = require("http");
// 2. 使用 http.createServer() 方法创建一个 Web 服务器，返回一个 Server 实例
var server = http.createServer();
// 3. 监听服务端的请求
server.on("request", function(request, response) {
  console.log("收到客户端的请求了");
});
// 4. 绑定端口号，启动服务器
server.listen(3000, function() {
  console.log("服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问");
});
```

## fs 模块

### 1. 读取文件

```javascript
var fs = require("fs");

// 异步读取
fs.readFile("input.txt", function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync("input.txt");
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
```

### 2. 写入文件

```javascript
var fs = require("fs");

console.log("准备写入文件");
fs.writeFile("input.txt", "我是通 过fs.writeFile 写入文件的内容", function(
  err
) {
  if (err) {
    return console.error(err);
  }
  console.log("数据写入成功！");
  console.log("--------我是分割线-------------");
  console.log("读取写入的数据！");
  fs.readFile("input.txt", function(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("异步读取文件数据: " + data.toString());
  });
});
```

## 工具模块

| 模块   | 描述                                                        |
| :----- | :---------------------------------------------------------- |
| OS     | 提供基本的系统操作函数。                                    |
| Path   | 提供了处理和转换文件路径的工具。                            |
| Net    | 用于底层的网络通信。提供了服务端和客户端的的操作。          |
| DNS    | 用于解析域名。                                              |
| Domain | 简化异步代码的异常处理，可以捕捉处理 try catch 无法捕捉的。 |
