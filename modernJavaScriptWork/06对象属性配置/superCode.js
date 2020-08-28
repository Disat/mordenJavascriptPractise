let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 为 age 添加一个 getter 来解决这个问题：

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // 年龄是根据当前日期和生日计算得出的
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday 是可访问的
alert( john.age );      // ……age 也是可访问的
// 现在旧的代码也可以工作，而且我们还拥有了一个不错的附加属性。