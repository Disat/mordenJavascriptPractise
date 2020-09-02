// class Button {
//     constructor(value,data) {
//       this.value = value;
//       this.data = data;
//     }
  
//     click() {
//       console.log(this.value);
//       console.log(this.data);
      
//     }
//   }
  
//   let button = new Button("hello","sdasfsd");
  
//   setTimeout(button.click, 1000); // undefined
// //   setTimeout(button.touch, 2000);
// // button.click
// // button.click()
// // console.log("shdif");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});//注意模板的使用技巧
clock.start();
