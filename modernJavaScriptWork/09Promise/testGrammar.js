// let promise = new Promise(function(resolve, reject) {
//     setTimeout(resolve(console.log("shdi")
//     )
    
//     , 8000);
//   });
  
//   // resolve 运行 .then 中的第一个函数
// //   promise.then(
// //     (sdfsaf,b) => console.log(sdfsaf,b),
// //     error => console.log(error)
// //   );

function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),ms)
    })
  }
  
 a=  delay(3000).then(() => console.log('runs after 3 seconds'));
 b = a instanceof Promise
 console.log(b);
 