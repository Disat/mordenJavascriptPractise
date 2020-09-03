// 使用 generator 进行迭代
// 在前面的 Iterable object（可迭代对象） 一章中，我们创建了一个可迭代的 range 对象，它返回 from..to 的值。

// 现在，我们回忆一下代码：

let range = {
  from: 1,
  to: 5,

  // for..of range 在一开始就调用一次这个方法
  [Symbol.iterator]() {
    // ...它返回 iterator object：
    // 后续的操作中，for..of 将只针对这个对象，并使用 next() 向它请求下一个值
    return {
      current: this.from,
      last: this.to,

      // for..of 循环在每次迭代时都会调用 next()
      next() {
        // 它应该以对象 {done:.., value :...} 的形式返回值
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// 迭代整个 range 对象，返回从 `range.from` 到 `range.to` 范围的所有数字
console.log([...range]); // 1,2,3,4,5
// 我们可以通过提供一个 generator 函数作为 Symbol.iterator，来使用 generator 进行迭代：

// 下面是一个相同的 range，但紧凑得多：

let rangeG = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // [Symbol.iterator]: function*() 的简写形式
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log( [...rangeG] ); // 1,2,3,4,5
// 之所以代码正常工作，是因为 range[Symbol.iterator]() 现在返回一个 generator，而 generator 方法正是 for..of 所期望的：

// 它具有 .next() 方法
// 它以 {value: ..., done: true/false} 的形式返回值
// 当然，这不是巧合。Generator 被添加到 JavaScript 语言中是有对 iterator 的考量的，以便更容易地实现 iterator。

// 带有 generator 的变体比原来的 range 迭代代码简洁得多，并且保持了相同的功能。
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function pseudoRandom(seed) {
    let value = seed;
  
    return function() {
      value = value * 16807 % 2147483647;
      return value;
    }
  }
  
  let generator = pseudoRandom(1);
  
  alert(generator()); // 16807
  alert(generator()); // 282475249
  alert(generator()); // 1622650073