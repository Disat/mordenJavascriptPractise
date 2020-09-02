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