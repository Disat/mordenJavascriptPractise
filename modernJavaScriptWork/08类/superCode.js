// 这个问题被称为“丢失 this”。

// 我们在 函数绑定 一章中讲过，有两种可以修复它的方式：

// 传递一个包装函数，例如 setTimeout(() => button.click(), 1000)。
// 将方法绑定到对象，例如在 constructor 中。
// 类字段提供了另一种非常优雅的语法：

class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello