// 检查空对象
// 写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// 只需要遍历这个对象，如果对象存在任何属性则 return false。

function isEmpty(obj) {
  for (let key in obj) {
    // 如果进到循环里面，说明有属性。
    return false;
  }
  return true;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 相互关联的对象
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   在对象字面量中使用 "this"
// 这里 makeUser 函数返回了一个对象。

// 访问 ref 的结果是什么？为什么？

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // 结果是什么？
// 解决方案
// 答案：一个错误。

// 试一下：

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
// 这是因为设置 this 的规则不考虑对象定义。只有调用那一刻才重要。

// 这里 makeUser() 中的 this 的值是 undefined，因为它是被作为函数调用的，而不是通过点符号被作为方法调用。

// this 的值是对于整个函数的，代码段和对象字面量对它都没有影响。

// 所以 ref: this 实际上取的是当前函数的 this。

// 我们可以重写这个函数，并返回和上面相同的值为 undefined 的 this：

function makeUser(){
  return this; // 这次这里没有对象字面量
}

alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
// 我们可以看到 alert( makeUser().name ) 的结果和前面那个例子中 alert( user.ref.name ) 的结果相同。

// 这里有个反例：

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // John
// 现在正常了，因为 user.ref() 是一个方法。this 的值为点符号 . 前的这个对象。