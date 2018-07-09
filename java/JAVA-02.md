# Java 基础-02

## 访问修饰符

| 访问权限 | 类  | 包  | 子类 | 其他包 |
| :------- | :-- | :-- | :--- | ------ |
| public   | √   | √   | √    | √      |
| protect  | √   | √   | √    | ×      |
| default  | √   | √   | ×    | ×      |
| private  | √   | ×   | ×    | ×      |

## 类

### 1. 类的继承

```java
类名A extends 类名B
```

### 2. 方法覆写

| 方法要素 | 描述                     |
| :------- | :----------------------- |
| 方法名   | 子类父类的覆写方法名一致 |
| 返回参数 | 小于父类的返回           |
| 参数     | 小于父类的参数类型       |
| 访问类型 | 大于父类的访问类型       |

```java
public void Fun（object obj）{  }

@override
public void Fun（string str）{  }
```

### 3. 如果子类要调用父类被覆盖的实例方法，可用 super 作为调用

```java
例：调用父类的方法Show();  
super.Show()
```

### 4. 调用父类的构造函数，super 必须放在第一行，和 this 一样

```java
例：调用父类的方法Show();  
super(参数)
```

### 4. 无法从静态上下文中引用非静态的 super 和 this，静态方法中只能调用静态属性字段

### 5. 静态方法不能被覆写

### 6. boolean 结果： 判断对象是否属于某个类，返回值为 bool 类型

```java
对象 instanceof  类名
```

### 7. 多态

- 当一个引用类型的变量若声明为父类的类型，但实际上引用的是子类的对象
- 此时该变量不能再访问子类中自己特有的字段和方法；
- 若子类覆写了父类的方法，那么此时通过变量访问到的方法，实际上是子类的法；

### 包装类型

- 除了 Integer 和 Character 定义的名称和对应的基本类型差异大，其他六种都是将首字母大写就可以了

## 接口

- 定义接口

```java
interface IUSB {  
    void run();（方法返回值，和方法名，参数没有任何实现）  
}
```

- 实现接口

```java
class MouseUSBImpl implements IUSB{
    重写方法的具体实现
}
```

- 一个类既有父类又有接口的时候, 先继承,再实现;

## 代码块

### 1. 局部代码块:局部位置,用于限定变量的生命周期。

- 作用：可以把多个构造方法中的共同代码放到一起，对对象进行初始化。
- 构造代码块:在类中的成员位置,用{}括起来的代码。每次调用构造方法执行前，都会先执行构造代码块。

### 2. 静态代码块:在类中的成员位置,用{}括起来的代码,只不过它用 static 修饰

- 作用：一般是对类进行初始化
- 代码块的执行次数顺序 - 静态代码块 -- 构造代码块 -- 构造方法
  - 静态代码块：只执行一次
  - 构造代码块：每次调用构造方法都执行
  - static 修饰的构造代码块, 特点: 优先于主方法的执行,只执行一次, 可以用来给静态变量赋值;

## 常用快捷键

| 快捷键            | 功能描述               |
| :---------------- | :--------------------- |
| ctrl+shift+f      | 格式化                 |
| ctrl+shift+o      | 导入包（多个提供选择） |
| ctrl+/            | 单行注释、取消单行注释 |
| ctrl+shift+/      | 多行注释               |
| ctrl+shift+\      | 取消多上注释           |
| alt+↑             | 代码上移动             |
| alt+↓             | 代码下移动             |
| F3、Ctrl+鼠标点击 | 查看源码               |

## 单例模式

保证项目中的一个类在运行期间有且只有一个实例对象：饿汉式、 懒汉式;

- 把构造方法给私有化,保证外界不能创建对象
- 自身在内部先创建一个对象,再使用 private 修饰起来,
- 向外暴露一个全局的静态的方法用于返回内部创建的对象;因为静态成员只能访问静态成员,那么此时必须把对象使用 static 修饰

## 继承中成员变量的关系

- 子类中的成员变量和父类中的成员变量名称不一样没有什么太大的关系
- 子类中的成员变量和父类中的成员变量名称,在子类方法中访问一个变量的查找【就近原则】
  - 在子类方法的局部范围找，有就使用
  - 在子类的成员范围找，有就使用
  - 在父类的成员范围找，有就使用
  - 如果还找不到，就报错。

## this 和 super 的区别

| this                               | super                                                               |
| :--------------------------------- | :------------------------------------------------------------------ |
| this 代表本类对应的引用            | super 代表父类存储空间的标识（可以理解为父类引用,可以操作父类的成员 |
| 调用成员                           | ---                                                                 |
| this.成员变量 【调用本类的成员】   | super.成员变量 【调用父类的成员】                                   |
| 调用构造函数                       | 【注意】this(参数)或者 super(参数)，必须出现在第一条语句上。        |
| this(参数) 【调用本类的构造】      | super(参数) 【调用父类的构造】                                      |
| 调用成员方法                       | ---                                                                 |
| this.成员方法名 【调用本类的成员】 | super.成员方法 【调用父类的成员方法】                               |

## 线程安全

### 1. 饿汉式【线程安全】

```java
class Singleton {
    private Singleton() {}
    private static final Singleton instance = new Singleton();
    public static Singleton getInstance() {
        return instance;
    }
}
```

### 2. 懒汉式【线程不安全】

```java
class Singleton {
    private Singleton() {}
    private static Singleton instance = null;
    public static Singleton getInstance() {
        instance=instance==null?new Singleton():instance;
        return instance;
    }
}
```

## final 修饰

final:表示最终的; 可以修饰 类,方法,变量;

- 修饰的类 表示太监类,不能被继承;基本数据类型包装类全是
- 修饰的方法 表示 不能被子类覆写 ;
- 修饰的变量:

## 适配器

一个接口有多个方法，但是我们只需要其中一些实现，让适配器去实现标准,并全部覆写方法,但是方法体为空，适配器用 abstract 修饰

```java
interface IWindow
{
  void max();//最大化
  void min();//最小化
  void close();//关闭
}
```

```java
abstract class WindosAdapter implements IWindow
{
    //让适配器去实现标准,并全部覆写方法,但是方法体为空
    public void max(){}
    public void min(){}
    public void close(){}
}
```

```java
class MyWindow extends WindosAdapter
{
    public void close()//应当覆写三个方法/我只关心 close 方法
    {
        System.out.println("关闭我的小窗口");
    }
}
```
