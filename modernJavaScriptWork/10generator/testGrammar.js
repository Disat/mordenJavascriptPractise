// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
//   }

//   // "generator function" 创建了一个 "generator object"
//   let generator = generateSequence();

//   console.log(generator);

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
//   }

//   function* generatePasswordCodes() {

//     // 0..9
//     yield* generateSequence(48, 57);

//     // A..Z
//     yield* generateSequence(65, 90);

//     // a..z
//     yield* generateSequence(97, 122);

//   }

//   let str = '';

//   for(let code of generatePasswordCodes()) {
//     str += String.fromCharCode(code);
//   }

//   console.log(str); // 0..9A..Za..z
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function pseudoRandom(seed) {
    let value = seed;

    return function() {
      value = value * 16807 % 2147483647;
      return value;
    }
  }

  let generator = pseudoRandom(1);

  alert(generator()); // 16807
  alert(generator()); // 282475249
  alert(generator()); // 1622650073

// let value = 1
// console.log((value = (value * 16807) % 2147483647));
// console.log();

