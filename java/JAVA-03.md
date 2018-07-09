# Java 基础-03

## 局部类

局部类定义在方法里面，基本方法实用结束局部类也就释放内存销毁了

## 数值类型转换

- 一般对应类型转换的计算，数值默认是转换为 int 类型，接收的类型要定义为默认 int 类型，除非自己强制转换

```java
short s = 1;
s = s + 1;   //错误的，类型自动转换为int多以报错
```

- float 的内部计算使用的是 IEEE 标准，主要采用补码的方式计算，float 的字节数 4 字节，long 类型是 8 字节，float 的数值比 long 整型大，主要在于内部的底层结构不同

## 继承中成员方法

- 子类中的方法和父类中的方法声明不一样，直接使用没有任何区别
- 子类中的方法和父类中的方法声明一样，调用规则
- 通过子类对象调用【就近原则】
  - 先找子类中，看有没有这个方法，有就调用子类的
  - 再看父类中，有没有这个方法，有就调用父类的
  - 如果没有就报错。

## switch 结构

- 表达式:可以是 `byte`,`short`,`int`,`char`?【JDK5 以后可以枚举、是 JDK7 以后可以是字符串】
- `switch` 语句的表达式可以是 `byte` 吗?可以是 `long` 吗?可以是 `String` 吗?【可以,不可以,JDK7 以后可以】

## 键盘录入

- 导包位置：在 class 的上边

```java
  import java.util.Scanner;
```

- 创建对象

```java
  Scanner sc = new Scanner(System.in);
```

- 获取键盘输入数据

```java
  int x = sc.nextInt();
```

## 自增与自减

- 放在操作数的前面：先自增或者自减，再参与操作

```java
int a = 10;
int b = ++a;
```

- 放在操作数的后面：先参与操作，再自增或者自减

```java
int a = 10;
int b = a++;
```

## 内部类

- 静态内部类不能直接访问外部类的非静态成员，创建静态内部类的对象:

```java
Outer.Inner in = new Outer.Inner();
```

- 非静态内部类访问:

```java
外部类.内部类 变量 = 外部类实例.new Inner()
```

- 内部类也可以在外部类中定义一个方法来访问内部类

## 匿名内部类

- 匿名内部类的基本实现

```java
abstract class Person { public abstract void eat(); }

public class Demo {
    public static void main(String[] args) {
        Person p = new Person() {
            public void eat() {
              System.out.println("eat something");
            }
        };
        p.eat();
    }
}
```

直接将抽象类 Person 中的方法在大括号中实现了这样便可以省略一个类的书写并且，匿名内部类还能用于接口上

- 在接口上使用匿名内部类

```java
interface Person { public void eat(); }

public class Demo {
    public static void main(String[] args) {
        Person p = new Person() {
            public void eat() {
                System.out.println("eat something");
            }
        };
        p.eat();
    }
}
```

- Thread 类的匿名内部类实现，直接实现多线程

```java
public class Demo {
    public static void main(String[] args) {
        Thread t = new Thread() {
            public void run() {
                for (int i = 1; i <= 5; i++) {
                    System.out.print(i + " ");
                }
            }
        };
        t.start();
    }
}
```

- Runnable 接口的匿名内部类实现

```java
public class Demo {
    public static void main(String[] args) {
        Runnable r = new Runnable() {
            public void run() {
                for (int i = 1; i <= 5; i++) {
                    System.out.print(i + " ");
                }
            }
        };
        Thread t = new Thread(r);
        t.start();
    }
}
```

## 枚举

- 所有枚举类都提供一个静态的 values()方法(返回该枚举类所有对象组成的数组),便于遍历所有枚举对象；

```java
Gender[] gs = Gender.values();
```

- 所有枚举类都提供一个静态的 `valueOf(String name)`方法, 返回枚举类中对象名等于 name 的对象， name 严格区分大小写

- java.lang.Enum 类下的常用方法:

```java
String name() 返回此枚举常量的名称，在其枚举声明中对其进行声明。
int ordinal() 返回枚举常量的序数（它在枚举声明中的位置，其中初始常量序数为零）
```

- 枚举也可以继承实现接口
  接口

```java
  interface ILOVEU{ void loving(); }
```

实现

```java
enum Color implements ILOVEU
{
    RED,GREEN,BLUE; //子类必须覆写抽象方法
    public void loving()
    {
        String ret = super.toString();
        switch(this)
          {
                 case RED:
                 ret = "爱RED";
                  break;
                 case GREEN:
                 ret = "爱GREEN";
                  break;
                 default:
                 ret = "爱 BLUE";
         }
         System.out.println(ret);
     }
}
```

另一种实现

```java
enum Color implements ILOVEU
{
       public void loving()
       {
           System.out.println("爱男人");  
       }
}
```

方法调用：

```java
Color blue = Color.BLUE;
blue.loving();  }
}
```

## Object 类

- Object 是类层次结构的根类，所有的类都直接或者间接的继承自 Object 类。
- Object 类的构造方法有一个，并且是无参构造，这其实就是理解当时我们说过，子类构造方法默认访问父类的构造是无参构造
- 常用方法：

  | 方法              | 描述                                                                                                                |
  | :---------------- | :------------------------------------------------------------------------------------------------------------------ |
  | String toString() | 返回对象的字符串表示，默认是由类的全路径+'@'+哈希值的十六进制表示。这个表示其实是没有意义的，一般子类都会重写该方法 |
  | Boolean equals()  | 比较两个对象是否相同。默认情况下，比较的是地址值是否相同。而比较地址值是没有意义的，所以，一般子类也会重写该方法。  |
  | String hashCode() | 返回对象的哈希值。不是实际地址值，可以理解为地址值                                                                  |
  | Class getClass()  | 返回对象的字节码文件对象，反射中我们会详细讲解                                                                      |
  | Object clone()    | 可以实现对象的克隆，包括成员变量的数据复制，但是它和两个引用指向同一个对象是有区别的                                |

- 两个注意问题；

  - 直接输出一个对象名称，其实默认调用了该对象的 toString()方法。
  - `==`和 `equals()`的区别?

    - ==【值类型和引用类型都可以比较】
      - 基本类型：比较的是值是否相同
      - 引用类型：比较的是地址值是否相同
    - equals()
      - 只能比较引用类型。默认情况下，比较的是地址值是否相同。
      - 但是，我们可以根据自己的需要重写该方法。

## Scanner 的使用(了解)

- 在 JDK5 以后出现的用于键盘录入数据的类。
- System.in：它其实是标准的输入流,对应于键盘录入
- 构造方法

```java
InputStream is = System.in;
Scanner(InputStream is)

Scanner sc = new Scanner(System.in);
```

- 基本方法格式
  - hasNextXxx() 判断是否是某种类型的
  - nextXxx() 返回某种类型的元素
- 要掌握的两个方法

```java
public int nextInt()  
public String nextLine()
```

- 需要注意的小问题
  - 同一个 Scanner 对象，先获取数值，再获取字符串会出现一个小问题。
  - 解决方案：重新定义一个 Scanner 对象，把所有的数据都用字符串获取，然后再进行相应的转换
