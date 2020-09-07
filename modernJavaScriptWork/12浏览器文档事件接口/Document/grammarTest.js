// document.body.style.background = 'red'; // 将背景设置为红色

// setTimeout(() => document.body.style.background = '', 3000); // 恢复回去

// document.body.myData = {
//     name: 'Caesar',
//     title: 'Imperator'
//   };
  
//   alert(document.body.myData.title)


let obj = {
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
for (let key in obj){
    console.log(key);
    
}