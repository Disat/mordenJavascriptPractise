// 一个常见的技巧是，将一个任务数据数组映射（map）到一个 promise 数组，然后将其包装到 Promise.all。

// 例如，如果我们有一个存储 URL 的数组，我们可以像这样 fetch 它们：

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// 将每个 url 映射（map）到 fetch 的 promise 中
let requests = urls.map(url => fetch(url));

// Promise.all 等待所有任务都 resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   该包装（wrapper）函数的功能和上面的代码相同：返回一个 promise，将调用传递给原始的函数 f，并在自定义的回调中跟踪结果：

function promisify(f) {
  return function (...args) { // 返回一个包装函数（wrapper-function）
    return new Promise((resolve, reject) => {
      function callback(err, result) { // 我们对 f 的自定义的回调
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // 将我们的自定义的回调附加到 f 参数（arguments）的末尾

      f.call(this, ...args); // 调用原始的函数
    });
  };
};

// 用法：
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);