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

//! medium

// Question - 1
let x = function() {
    return 10;
}();
console.log(x);

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
  