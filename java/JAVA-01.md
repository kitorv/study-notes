# Java 基础-01

## JDK 安装

1.  官网下载 JDK
2.  点击安装完，拷贝安装路径到/bin（"E:\Java\jdk1.7.0"）
3.  计算机--属性--高级系统设置--高级--环境变量--用户变量新建
4.  系统变量 → 新建 JAVA_HOME 变量 ，变量值填写 jdk 的安装目录（本人是 "E:\Java\jdk1.7.0")
5.  系统变量 → 寻找 Path 变量 → 编辑
6.  在变量值最后输入: "%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;"（注意原来 Path 的变量值末尾有没有;号，如果没有，先输入；号再输入上面的代码）
7.  系统变量 → 新建 CLASSPATH 变量
8.  变量值填写:  " .;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar"（注意最前面有一点）

## 代码注释

| 注释方式           | 描述     |
| :----------------- | :------- |
| //                 | 单行注释 |
| / 注释内容 /       | 多行注释 |
| /\* 注释文档内容 / | 文档注释 |

## 基础语法示例

- int 默认初始值为 0，数字中用 \_ 分割不能放在头部和尾部，编译的时候忽略

```java
1_7=17
```

- 控制台打印输出

```java
System.out.println（"打印的内容"）
```

- 数值字符串相加

```java
string i=2+3+"a"+2+4=“5a24”;    【前面的有计算会先计算】
```

- 比较运算符，计算数字的话用二进制运算得到结果在转换为 10 进制

```java
比较运算符 ^ 相同为false 不同为true  
```

- \>\>位移运算也是把数字变为二进制，在看移动几位，在转换为十进制，（8>>2）=32

- `switch(条件)`//必须是一个返回值类型是 `byte`,`short`,`char`,`int`(数字类型)类型的表达式,java5 开始新增了一个枚举,java7 开始多了 String

## 排序

### 1. 冒泡排序

```java
int[] arr={6,3,8,2,9,1};

for(int i=0;i<arr.length-1;i++){//外层循环控制排序趟数
    for(int j=0;j<arr.length-1-i;j++){//内层循环控制每一趟排序多少次
        if(arr[j]>arr[j+1]){
            int temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
```

### 2. 选择排序

```java
int[] arr={1,3,2,45,65,33,12};
for(int i = 0; i < arr.length - 1; i++) {// 做第i趟排序
    int k = i;
    for(int j = k + 1; j < arr.length; j++){// 选最小的记录
        if(arr[j] < arr[k]){
            k = j; //记下目前找到的最小值所在的位置
        }
    }
    //在内层循环结束，也就是找到本轮循环的最小的数以后，再进行交换
    if(i != k){  //交换a[i]和a[k]
        int temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
}
```

## 基础知识

- 可变参数定义方式

```java
int ... aray
```

- 增强 for 循环， 相当于 C#的 foreach 循环

```java
for (int x : arr) { }
```

- java.util.Arrays:表示数组的工具类，提供了 数组的排序 ,查找等功能

## 属性

### 1. 普通属性

```java
private boolean real;
public boolean isReal() {return real;}
public void setReal(boolean real) {this.real = real;}
```

### 2. 布尔属性

```java
private boolean real;
public boolean isReal() {return real;}
public void setReal(boolean real) {this.real = real;}
```

## this

- `this.name=name` 等价于 `this（name）`
- `this（）`必须放在属性中而且放在第一行

## 快捷操作

- 无参构造方法
  > 在代码区域右键--source--Generate Constructors from Superclass
- 带参构造方法
  > 在代码区域右键--source--Generate Constructors using fields.. -- finish
- 成对的 getXxx()和 setXxx()
  > 在代码区域右键--source--Generate Getters and Setters...

## 包名规范

> 域名反着写.项目名.模块名.组件名

## 包的引用

### 1. 类的全限定名

```java
inport 包名.子包名.…….类名
```

### 2. 通配符 `*`

```java
inport test./*
```
