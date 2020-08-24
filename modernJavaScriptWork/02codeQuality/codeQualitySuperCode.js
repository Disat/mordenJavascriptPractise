// 嵌套的层级
// 例如，在循环中，有时候使用 continue 指令以避免额外的嵌套是一个好主意。

// 例如，不应该像下面这样添加嵌套的 if 条件：

for (let i = 0; i < 10; i++) {
  if (cond) {
    // ... // <- 又一层嵌套
  }
}
// 我们可以这样写：

for (let i = 0; i < 10; i++) {
  if (!cond) continue;
//   ...  // <- 没有额外的嵌套
}
// 使用 if/else 和 return 也可以做类似的事情。

// 例如，下面的两个结构是相同的。

// 第一个：

function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}
// 第二个：

function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
// 但是第二个更具可读性，因为 n < 0 这个“特殊情况”在一开始就被处理了。一旦条件通过检查，代码执行就可以进入到“主”代码流，而不需要额外的嵌套。
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 配方：分解函数
// 有时候，用一个函数来代替一个代码片段是更好的，就像这样：

function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // 检测 i 是否是一个质数（素数）
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}
// 更好的变体，使用一个分解出来的函数 isPrime：

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
// 现在我们可以很容易地理解代码了。函数自己就变成了一个注释。这种代码被称为 自描述型 代码。