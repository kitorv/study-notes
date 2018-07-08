# EventEmitter 和模块系统

## EventEmitter

Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
EventEmitter 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

### events

events 模块只提供了一个对象： events.EventEmitter，EventEmitter 的核心就是事件触发与事件监听器功能的封装。

```javascript
// 引入 events 模块
var events = require("events");
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

- EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。
- 当添加新的监听器时，newListener 事件会触发。
- 当监听器被移除时，removeListener 事件被触发。

#### EventEmitter 的用法

- event.js 文件

```javascript
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event", function() {
  console.log("some_event 事件触发");
});
setTimeout(function() {
  event.emit("some_event");
}, 1000);
```

- 运行结果

```javascript
some_event 事件触发
```

### events 方法

| 方法                               | 描述                                                                              |
| :--------------------------------- | :-------------------------------------------------------------------------------- |
| addListener(event, listener)       | 为指定事件添加一个监听器到监听器数组的尾部。                                      |
| on(event, listener)                | 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。。                 |
| once(event, listener)              | 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 |
| removeListener(event, listener)    | 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。                  |
| removeAllListeners([event])        | 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。             |
| setMaxListeners(n)                 | 默认情况下，setMaxListeners 函数用于提高监听器的默认限制的数量。                  |
| listeners(event)                   | 返回指定事件的监听器数组。                                                        |
| emit(event, [arg1], [arg2], [...]) | 按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。         |

## 模块系统

- 为了让 Node.js 的文件可以相互调用，Node.js 提供了一个简单的模块系统
- 模块是 Node.js 应用程序的基本组成部分，文件和模块是一一对应的
- 一个 Node.js 文件就是一个模块，这个文件可能是 JavaScript 代码、JSON 或者编译过的 C/C++ 扩展

### 模块的创建和引用

#### 1. 创建在属性上的模块

- 创建一个`hello.js`文件

```javascript
exports.world = function() {
  console.log("Hello World");
};
```

- 模块的调用

```javascript
var hello = require("./hello");
hello.world();
```

#### 2. 创建整个模块对象

- 创建一个`hello.js`文件

```javascript
function Hello() {
  var name;
  this.setName = function(thyName) {
    name = thyName;
  };
  this.sayHello = function() {
    console.log("Hello " + name);
  };
}
module.exports = Hello;
```

- 模块的调用

```javascript
var Hello = require("./hello");
hello = new Hello();
hello.setName("BYVoid");
hello.sayHello();
```
