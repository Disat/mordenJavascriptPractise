// JS如何正确而优雅的使用函数，JS函数思想所在

// 回调函数
// 让我们多举几个例子，看看如何将函数作为值来传递以及如何使用函数表达式。

// 我们写一个包含三个参数的函数 ask(question, yes, no)：

// question
// 关于问题的文本
// yes
// 当回答为 “Yes” 时，要运行的脚本
// no
// 当回答为 “No” 时，要运行的脚本
// 函数需要提出 question（问题），并根据用户的回答，调用 yes() 或 no()：

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
// ask("Do you agree?", showOk, showCancel);
// 在实际开发中，这样的的函数是非常有用的。实际开发与上述示例最大的区别是，实际开发中的函数会通过更加复杂的方式与用户进行交互，而不是通过简单的 confirm。在浏览器中，这样的函数通常会绘制一个漂亮的提问窗口。但这是另外一件事了。

// ask 的两个参数值 showOk 和 showCancel 可以被称为 回调函数 或简称 回调。

// 主要思想是我们传递一个函数，并期望在稍后必要时将其“回调”。在我们的例子中，showOk 是回答 “yes” 的回调，showCancel 是回答 “no” 的回调。

// 我们可以用函数表达式对同样的函数进行大幅简写：

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
// 这里直接在 ask(...) 调用内进行函数声明。这两个函数没有名字，所以叫 匿名函数。这样的函数在 ask 外无法访问（因为没有对它们分配变量），不过这正是我们想要的。

// 这样的代码在我们的脚本中非常常见，这正符合 JavaScript 语言的思想。

// 一个函数是表示一个“行为”的值
// 字符串或数字等常规值代表 数据。

// 函数可以被视为一个 行为（action）。

// 我们可以在变量之间传递它们，并在需要时运行。
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 函数表达式 vs 函数声明

// 或者我们可以使用问号运算符 ? 来进一步对代码进行简化：

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // 现在可以了
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
用箭头函数重写
let ask = (question,yes,no) =>{ //错误示范
    // function
}

// 用箭头函数重写下面的函数表达式：

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
// 解决方案
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );