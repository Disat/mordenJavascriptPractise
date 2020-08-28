// let animal ={
//     eats:true
// }

// let rabbit = {
//     jumps: true
//   };

// rabbit.__proto__=animal;

// console.log(rabbit.eats);

let user = {
    name: "John",
    surname: "Smith",
    
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };

  console.log(user.fullName);
  
  admin.fullName = "Alice Cooper"; // (**)

  console.log(admin.fullName);
  