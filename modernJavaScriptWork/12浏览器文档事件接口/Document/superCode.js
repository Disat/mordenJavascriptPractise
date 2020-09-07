{/* <div show-info="name"></div>
<!-- 标记这个 div 以在这显示 "age" -->
<div show-info="age"></div> */}

{/* <script>
    // 这段代码找到带有标记的元素，并显示需要的内容
    let user = {
        name: "Pete",
        age: 25
    };

    for (let div of document.querySelectorAll('[show-info]')) {
        // 在字段中插入相应的信息
        let field = div.getAttribute('show-info');
        div.innerHTML = field;
        // div.innerHTML = user[field]; // 首先 "name" 变为 Pete，然后 "age" 变为 25
    }
</script> */}

// 以上代码的核心作用就是把一个对象上的属性的属性值，赋值给这个对象的另一个属性。这些属性值还可以作为另一个对象的属性，进而来赋值

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 渲染树结构数据，这是对树结构数据最基本的操作
{/* <div id="container"></div> */}

{/* <script> */}
  let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },

    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };

  function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
  }

  function createTreeText(obj) { // standalone recursive function
    let li = '';
    let ul;
    for (let key in obj) {
      li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
      ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
  }

  createTree(container, data);
// </script>