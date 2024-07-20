//! EASY

// Question - 1
// console.log(5 + "3");

// // Question - 2
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// // Question - 3
// let a;
// // a='sec'

// console.log(a);

// // Question - 4
// console.log(typeof null);

// // Question - 5
// let b = 2;
// b += 3;
// console.log(b);

// // Question - 6
// let x = 10;
// function y() {
//     return x;
// }
// console.log(y());

// // Question - 7
// const greeting = "Hello, world!";
// console.log(greeting.length);

// // Question - 8
// console.log(2 + "2");

// // Question - 9
// let name = "Alice";
// console.log(`Hello, ${name}!`);

// // Question - 10
// console.log([1, 2, 3].indexOf(2));

//! MEDIUM

// Question - 1
// let x = function() {
//     return 10;
// }();
// console.log(x);

// Question - 2
// const obj = {
//     name: "Alice",
//     greet: function() {
//       console.log(`Hello, ${this.name}!`);
//     }
//   };
//   const greet = obj.greet;
//   greet();

// Question - 3
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.filter(num => num > 2);
// console.log(newArr);

// Question - 4
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(2, '3'));

// Question - 5
// let obj = { a: 1, b: 2 };
// let newObj = { ...obj, c: 3 };
// console.log(obj);
// console.log(newObj);

// Question - 6
// const nums = [1, 2, 3, 4];
// const result = nums.map(num => num * 2).reduce((a, b) => a + b);
// console.log(result);

// Question - 7
// function outer() {
//     let count = 0;
//     return function inner() {
//       count++;
//       return count;
//     };
//   }
//   const counter = outer();
//   console.log(counter());
//   console.log(counter());

// Question - 8
// let person = { name: "Bob" };
// Object.freeze(person);
// person.age = 30;
// console.log(person);

// Question - 9
// let numbers = [1, 2, 3, 4, 5];
// let [first, ...rest] = numbers;
// console.log(rest);

// Question - 10
// async function fetchData() {
//     return "data";
//   }
//   fetchData().then(data => console.log(data));

// Question - 11
// const sameerPromise = new Promise((resolve, reject) => {
//   Math.random() * 10 < 5 ? resolve(1) : reject(0);
// });

// sameerPromise.then(res => console.log("resolve with :", res)).catch(err => {
//   console.log("reject with :", err);
// });

//! HARD
// Question - 1
// How do you create and dispatch custom events in JavaScript?
// Question - 2
// Question - 3
// Question - 4
// Question - 5
// Question - 6
// Question - 7
// Question - 8
// Question - 9
// Question - 10

//! SCOPE CHAIN!

// Question - 1
// function outer() {
//     let x = 10;
//     function inner() {
//       console.log(x);
//     }
//     return inner;
//   }
//   const innerFunc = outer();
//   innerFunc();

// Question - 2
// function createCounter() {
//     let count = 0;
//     return function() {
//       count++;
//       return count;
//     };
//   }
//   const counter = createCounter();
//   console.log(counter());
//   console.log(counter());

// Question - 3
// function outer() {
//     let x = 1;
//     function inner() {
//       let x = 2;
//       console.log(x);
//     }
//     inner();
//     console.log(x);
//   }
//   outer();

// Question - 4
// function foo() {
//     console.log(a);
//     var a = 1;
//     console.log(a);
//   }
//   foo();

// Question - 5
// let x = 10;
// function outer() {
//   let x = 20;
//   function inner() {
//     console.log(x);
//   }
//   return inner;
// }
// const innerFunc = outer();
// innerFunc();

// Question - 6
// function outer() {
//     let x = 1;
//     return function() {
//       console.log(x);
//     };
//   }
//   const innerFunc1 = outer();
//   const innerFunc2 = outer();
//   innerFunc1();
//   innerFunc2();

// Question - 7
// function foo() {
//     console.log(a);
//     let a = 1;
//   }
//   foo();

// Question - 8
// function outer() {
//     let x = 1;
//     function inner() {
//       let y = 2;
//       console.log(x + y);
//     }
//     return inner;
//   }
//   const func = outer();
//   func();

// Question - 9
// function foo() {
//     console.log(a);
//     var a = 1;
//     function bar() {
//       console.log(a);
//       var a = 2;
//     }
//     bar();
//   }
//   foo();

// Question - 10
// function createFunction() {
//     let x = 10;
//     return function() {
//       console.log(x);
//     };
//   }
//   let func1 = createFunction();
//   let func2 = createFunction();
//   func1();
//   func2();
