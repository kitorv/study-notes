:::snippet let 和 const

1. ES5 变量提升和函数提升

```javascript
// 1.初始化定义了tmp变量
var tmp = new Date();
// 2.定义函数函数提升可以访问里面的代码暂未执行和解析
function f() {
  // 4.函数执行先内部变量提升和函数提升，temp变量名提升覆盖外部tmp但是未定义
  console.log(tmp);
  // 5.判断条件给提升的变量tmp赋值
  if (false) {
    var tmp = "hello";
  }
}
// 3. 函数调用开始执行函数内部代码
f(); // undefined
```

2. ES5 变量覆盖和泄露为全局变量

```javascript
var s = "hello";
// 1.每次循环都赋值i
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
// 2.循环完成i没有被销毁变为全局变量
console.log(i); // 5
```

3. ES5 匿名函数模拟块级作用域

```javascript
(function() {
  //这里是块级作用域
})();
```

4. let 新增了块级作用域

```javascript
{
  let a = 10;
}
a; // 变量不在作用域报错
let a = 10; //变量不能覆盖重复定义报错
for (let i = 0; i < 10; i++) {
  // 子级可以在定义相同的名称的变量
  let i = 5;
  // ...   变量只在for循环内部定义，外部不可访问
}
```

5. const 常量的声明不可改变，基本用法行为与 let 变量一致

```javascript
const PI = 3.1415;
PI = 3; //修改常量报错
const array = [];
array.push(1); //执行通过
array = [1]; //报错
```

> const 变量存储的是内存地址，改变引用类型内部属性不会引起地址的改变

:::

:::snippet 解构

1. 数组解构

```javascript
let [a, b, c] = [1, 2, 3];
let [foo, [[bar], baz]] = [1, [[2], 3]];
let [head, ...tail] = [1, 2, 3, 4];
```

2. 数组解构默认值

```javascript
let [foo = true] = [];
let [x, y = "b"] = ["a"];
let [x, y = "b"] = ["a", undefined];
```

3. 对象解构

```javascript
let { foo, bar } = { foo: "aaa", bar: "bbb" };
```

4. 对象解构别名

```javascript
let { foo: baz } = { foo: "aaa", bar: "bbb" };
```

5. 对象解构默认值

```javascript
var { x, y = 5 } = { x: 1 };
```

6. 字符串解构

```javascript
const [a, b, c, d, e] = "hello";
```

7. 函数解构

```javascript
function add([x, y]) {
  return x + y;
}
add([1, 2]);
```

> 解构内部用的`===`做判断，设置默认值都是值等于`undefined`才会赋值，参数或者变量都可以进行解构操作

:::

:::snippet 解构用途

1. 交换变量

```javascript
let x = 1;
let y = 2;
[x, y] = [y, x];
```

2. 返回值

```javascript
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
```

3. 参数定义

```javascript
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```

4. 变量解构

```javascript
for (let [key] of map) {
  // ...
}
```

:::

:::snippet 字符串扩展

1. 字符串包含判断

| 方法       | 描述                                             |
| ---------- | ------------------------------------------------ |
| includes   | 返回布尔值，表示是否找到了参数字符串。           |
| startsWith | 返回布尔值，表示参数字符串是否在原字符串的头部。 |
| endsWith   | 返回布尔值，表示参数字符串是否在原字符串的尾部。 |

```javascript
let s = "Hello world!";
s.startsWith("Hello"); // true
s.endsWith("!"); // true
s.includes("o"); // true
```

```javascript
let s = "Hello world!";
s.startsWith("world", 6); // true
s.endsWith("Hello", 5); // true
s.includes("Hello", 6); // false
```

> endsWith 设置第二个参数，是从 0 到 n 开始计算，其他方法都是 n 到结尾计算

2. 字符串内容操作

| 方法     | 描述                                |
| -------- | ----------------------------------- |
| repeat   | 字符串内容重复 n 次返回新的字符串。 |
| padStart | 字符串头部补全。                    |
| padStart | 字符串尾部补全。                    |

```javascript
"x".repeat(3); // "xxx"
"x".padStart(5, "ab"); // 'ababx'
"x".padEnd(5, "ab"); // 'xabab'
```

3. 模板字符串

```javascript
let place = "Tom";
let msg = `Hello, ${place}`; //msg="Hello Tom"
```

4. Stirng.raw 模板字符串转义

```javascript
let tab = "\t"; // " "
let tab = String.raw`\t`; //"\t"
String.raw`Hi\\n`; // "Hi\\n"
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
String.raw({ raw: ["t", "e", "s", "t"] }, 0, 1, 2); // 't0e1s2t'
```

:::

:::snippet 正在表达式扩展

1. 增加 u 字符匹配，解决 Unicode 字符超过 \uFFFF 错误解析问题

```javascript
/^\uD83D/u.test('\uD83D\uDC2A') // false
/^\uD83D/.test('\uD83D\uDC2A') // true

var s = '𠮷';
/^.$/.test(s) // false
/^.$/u.test(s) // true

/[a-z]/i.test('\u212A') // false
/[a-z]/iu.test('\u212A') // true
```

2. Unicode 字符判断

```javascript
const r1 = /hello/;
const r2 = /hello/u;
r1.unicode; // false
r2.unicode; // true
```

3. y 修饰符，每次从上次位置开始，到了结尾位置不在从头开始

```javascript
var s = "aaa_aa_a";
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s); // ["aaa"]
r2.exec(s); // ["aaa"]

r1.exec(s); // ["aa"]
r2.exec(s); // null
```

4. 字符串匹配全部正则实现：match()、replace()、search()、split()、matchAll()

:::

:::snippet 数值扩展

1. 方法扩展

| 方法                   | 描述                                               |
| ---------------------- | -------------------------------------------------- |
| Number.isFinite()      | 数值是否有限，参数必须为数值类型，否则都为 false   |
| Number.isNaN()         | 判断是否非数值，进行 Number 转换在判断。           |
| Number.parseInt()      | 转换为 Int 类型与 parseInt 一致。                  |
| Number.parseFloat()    | 转换为 Float 类型与 parseFloat 一致。              |
| Number.isInteger()     | 数值是否整数，参数必须为数值类型，否则都为 false。 |
| Number.isSafeInteger() | 判断数值范围在-2^53 到 2^53 之间（不含两个端点）。 |

2. 常量扩展

| 方法                    | 描述                                                  |
| ----------------------- | ----------------------------------------------------- |
| Number.EPSILON          | 1 与大于 1 的浮点数差，用于精度判断是否在可计算范围内 |
| Number.MIN_SAFE_INTEGER | 最小安全数。                                          |
| Number.MAX_SAFE_INTEGER | 最大安全数。                                          |

:::

:::snippet 箭头函数

1. 箭头函数定义

```javascript
// 默认执行表达式并返回
var f = v => v;
// 执行代码块返回
var sum = (num1, num2) => {
  return num1 + num2;
};
```

2. 特点

（1）函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。

（3）不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

3. 箭头函数转码

```javascript
// ES6
function foo() {
  setTimeout(() => {
    console.log("id:", this.id);
  }, 100);
}

// ES5
function foo() {
  var _this = this;

  setTimeout(function() {
    console.log("id:", _this.id);
  }, 100);
}
```

4. this 固话，代表外层代码块的 this 对象

```javascript
function foo() {
  return () => {
    return () => {
      return () => {
        console.log("id:", this.id);
      };
    };
  };
}
var f = foo.call({ id: 1 });
var t1 = f.call({ id: 2 })()(); // id: 1
var t2 = f().call({ id: 3 })(); // id: 1
var t3 = f()().call({ id: 4 }); // id: 1
```

5. :: 双冒号运算符

```javascript
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

var method = obj::obj.foo;
// 等同于
var method = ::obj.foo;
```

:::

:::snippet 数组扩展

1. Array.from 提取新的数组

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = Array.from(array, x => x < 5); //[1,2,5,4]
let objArray = [{ a: 1, b: 2 }, { a: 2, b: 2 }, { a: 3, b: 2 }];
let newObjArray = Array.from(array, x => {
  return { n: x.a };
}); //[{n:1},{n:2},{n:3}]
```

2. Array.of 转换为数组

```javascript
Array.of(3, 11, 8); // [3,11,8]
```

3. 实例扩展方法

| 方法      | 描述                                             |
| --------- | ------------------------------------------------ |
| find      | 查找满足条件的第一个元素，未找到范围 undefined。 |
| findIndex | 查找满足条件的第一个元素索引，未找到范围 -1。    |
| fill      | 数组内容填充。                                   |
| includes  | 数组是否包含给定的值，返回 Boolean。             |
| flat      | 拉平数组。                                       |

```javascript
[1, 4, -5, 10].find(n => n < 0); //-5
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}); // 2
["a", "b", "c"].fill(7); // [7, 7, 7]
[1, 2, 3].includes(2); // true
[1, 2, [3]].flat() // [1, 2, 3]
[(1, [2, [3]])].flat(Infinity); // [1, 2, 3]
```

:::

:::snippet Object 扩展方法

| 方法            | 描述                   |
| --------------- | ---------------------- |
| Object.is()     | 判断两个对象是否相等。 |
| Object.assign() | 对象的合并             |

```javascript
Object.is("foo", "foo"); // true
Object.is(NaN, NaN); // true
Object.is({}, {}); // false
```

```javascript
const obj1 = { a: { b: 1 } };
const obj2 = Object.assign({}, obj1);
obj1.a.b = 2;
obj2.a.b; // 2

Object.assign({ a: "b" }, { [Symbol("c")]: "d" }); // { a: 'b', Symbol(c): 'd' }
```

:::
