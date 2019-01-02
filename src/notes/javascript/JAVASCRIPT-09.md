

## 基本包装类型

### 1. Boolean 类型

- 与基本的基本类型 Boolean 基本一致，差别不大
- 相当一 Boolean 转换没什么太大区别
- 实例化

```JavaScript
var falseObject = new Boolean(false);
var result = falseObject && true;
alert(result); //true
var falseValue = false;
result = falseValue && true;
alert(result); //false

alert(typeof falseObject); //object
alert(typeof falseValue); //boolean
alert(falseObject instanceof Boolean); //true
alert(falseValue instanceof Boolean); //false
```

### 2. Number 类型

- Number 是与数字值对应的引用类型

```JavaScript
var numberObject = new Number(10);
NumberTypeExample01
```

- 重写了 valueOf()、toLocaleString()和 toString()

```JavaScript
var num = 10;
alert(num.toString()); //"10"
alert(num.toString(2)); //"1010"
alert(num.toString(8)); //"12"
alert(num.toString(10)); //"10"
alert(num.toString(16)); //"a"
```

- 精度格式化

```JavaScript
var num = 10;
alert(num.toFixed(2)); //"10.00"

var num = 10.005;
alert(num.toFixed(2)); //"10.01"

var num = 10;
alert(num.toExponential(1)); //"1.0e+1"

var num = 99;//总的数字长度
alert(num.toPrecision(1)); //"1e+2"
alert(num.toPrecision(2)); //"99"
alert(num.toPrecision(3)); //"99.0"
```

- 类型判断

```JavaScript
var numberObject = new Number(10);
var numberValue = 10;
alert(typeof numberObject); //"object"
alert(typeof numberValue); //"number"
alert(numberObject instanceof Number); //true
alert(numberValue instanceof Number); //false
```

### 3. String 类型

#### 3-1. 包装类型的方法与属性跟基本类型一致

```JavaScript
var stringObject = new String("hello world");
var stringValue = "hello world";
alert(stringValue.length); //"11"
```

#### 3-2. 字符方法

- charAt 方法

```JavaScript
var stringValue = "hello world";
alert(stringValue.charAt(1)); //"e"
```

- charCodeAt 方法

```JavaScript
var stringValue = "hello world";
alert(stringValue.charCodeAt(1)); //输出"101"
```

- 取值方法

```JavaScript
var stringValue = "hello world";
alert(stringValue[1]); //"e" IE7返回undefined
```

#### 3-3. 字符串操作方法

- concat 方法

```JavaScript
var stringValue = "hello ";
var result = stringValue.concat("world");
alert(result); //"hello world"
alert(stringValue); //"hello"
```

- slice()、substr()和 substring()

```JavaScript
var stringValue = "hello world";
alert(stringValue.slice(3)); //"lo world"
alert(stringValue.substring(3)); //"lo world"
alert(stringValue.substr(3)); //"lo world"
alert(stringValue.slice(3, 7)); //"lo w"
alert(stringValue.substring(3,7)); //"lo w"
alert(stringValue.substr(3, 7)); //"lo worl"
```

```JavaScript
var stringValue = "hello world";
alert(stringValue.slice(-3)); //"rld"    -3=>8
alert(stringValue.substring(-3)); //"hello world"  -3=>0
alert(stringValue.substr(-3)); //"rld"  -3=>8
alert(stringValue.slice(3, -4)); //"lo w"  3，-4=>从3开始，倒数截取4位
alert(stringValue.substring(3, -4)); //"hel" 3，-4=>从3开始，倒数截取3位
alert(stringValue.substr(3, -4)); //""（空字符串）  -4=>0
```

#### 3-4. 字符串位置方法

- indexOf 方法

```JavaScript
var stringValue = "hello world";
alert(stringValue.indexOf("o")); //4
alert(stringValue.indexOf("o", 6)); //7
```

- lastIndexOf 方法

```JavaScript
var stringValue = "hello world";
alert(stringValue.lastIndexOf("o")); //7
alert(stringValue.lastIndexOf("o", 6)); //4
```

#### 3-5. 去除空格

- trim 方法

```JavaScript
var stringValue = " hello world ";
var trimmedStringValue = stringValue.trim();
alert(stringValue); //" hello world "
alert(trimmedStringValue); //"hello world"
```

#### 3-6. 大小写转换

```JavaScript
alert(stringValue.toLocaleUpperCase()); //"HELLO WORLD"
alert(stringValue.toUpperCase()); //"HELLO WORLD"
alert(stringValue.toLocaleLowerCase()); //"hello world"
alert(stringValue.toLowerCase()); //"hello world"
```

#### 3-7. 字符串的模式匹配方法

- matches 方法

```JavaScript
var text = "cat, bat, sat, fat";
var matches = text.match(/.at/);//与pattern.exec(text)相同

alert(matches.index); //0
alert(matches[0]); //"cat"
alert(pattern.lastIndex); //0
```

- search 方法

```JavaScript
var text = "cat, bat, sat, fat";
var pos = text.search(/at/);
alert(pos); //1
```

- replace 方法

```JavaScript
var text = "cat, bat, sat, fat";
var result = text.replace("at", "ond");
alert(result); //"cond, bat, sat, fat"
result = text.replace(/at/g, "ond");
alert(result); //"cond, bond, sond, fond"

var text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
alert(result); //word (cat), word (bat), word (sat), word (fat)
```

- split 方法

```JavaScript
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(","); //["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2); //["red", "blue"]
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]
```

- localeCompare 方法

```JavaScript
var stringValue = "yellow";
alert(stringValue.localeCompare("brick")); //1
alert(stringValue.localeCompare("yellow")); //0
alert(stringValue.localeCompare("zoo")); //-1
```

- fromCharCode 方法

```JavaScript
alert(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"
```

#### 3-8. 字符串的 HTML

- 可以直接生成 HTML 标签代码
- 一般尽量不适用这些方法

## 单体内置对象

### 1. Global 对象

- URI 编码方法

```JavaScript
var uri = "http://www.wrox.com/illegal value.htm#start";
//"http://www.wrox.com/illegal%20value.htm#start"
alert(encodeURI(uri));
//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
alert(encodeURIComponent(uri));
```

- eval 方法

```JavaScript
eval("alert('hi')");=>alert("hi");//相当于转为这个代码执行
```

### 2. Global 对象的属性

- 例如 undefined、NaN、Error、Date 等都属于 Global 的属性

### 3. window 对象

- web 浏览器的窗体属性

```JavaScript
var color = "red";
function sayColor(){
alert(window.color);
}
window.sayColor(); //"red"
```

### 4. Math 对象

- Math 对象的属性：Math.PI、Math.LN10 等数学中的常量
- Math 对象的方法：Math.max()，Math.min()，Math.ceil()等常用数学方法
- Math 获取随机数：random 方法，获取 0-1 之间的随机数
- 其他的方法使用在参照 API
