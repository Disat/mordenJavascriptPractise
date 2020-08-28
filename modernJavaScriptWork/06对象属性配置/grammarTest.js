// let obj = {
//     "a":1
// }

// let descriptor= Object.getOwnPropertyDescriptor(obj,"a")

// console.log(descriptor);
// console.log(typeof descriptor);

let user = { };
let admin = {
    "name":"admin"
}

Object.defineProperty(user, "name", {
  value: "John",
  writable: true,
  configurable: false,
  enumerable:true
});

user.name = "Lip"
console.log(user);
// console.log(admin);

