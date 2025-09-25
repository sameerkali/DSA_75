// //1
// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }
// const fn = outer();
// fn();
// fn();


// //2
// function createCounter() {
//     let counter = 0;
//     return {
//         increment: function () {
//             counter++;
//             return counter;
//         },
//     };
// }
// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());


// // 3
// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }
// const add5 = makeAdder(5);
// console.log(add5(2));
// console.log(add5(10));


// //4
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }


// //5
// function createFunctions() {
//     let functions = [];
//     for (let i = 0; i < 3; i++) {
//         functions.push(function () {
//             console.log(i);
//         });
//     }
//     return functions;
// }
// const funcs = createFunctions();
// funcs[0]();
// funcs[1]();
// funcs[2]();

// //6
// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     };
// }
// const counter = makeCounter();
// console.log(counter()); // why this call
// console.log(counter());


// //7
// function greeting(name) {
//     return function (message) {
//         console.log(`${message}, ${name}!`);
//     };
// }
// const greetJohn = greeting("John");
// greetJohn("Hello");
// greetJohn("Goodbye");
// greeting("sameer")("kaise ho")

// //8
// const secret = (function () {
//     let value = 42;
//     return {
//         getValue: function () {
//             return value;
//         },
//     };
// })();
// console.log(secret.getValue());


// //9
// function sum(x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         };
//     };
// }
// console.log(sum(1)(2)(3));

// //10
// function multiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }
// const double = multiplier(2);
// console.log(double(4));



//// This 

// //1
// function Timer() {
//     this.seconds = 0;
//     setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds);
//     }, 1000);
// }
// new Timer();

// //2
// function Timer() {
//     this.seconds = 0;
//     setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds);
//     }, 1000);
// }
// new Timer();







// Closure and 'this' Practice Questions
// Try to predict the output of each code snippet before running it

// // Question 1
// function createCounter() {
//     let count = 0;
//     return function() {
//         console.log(++count);
//     }
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// counter1(); 
// counter1(); 

// // Question 2
// const user = {
//     name: "John",
//     greet: function() {
//         setTimeout(function() {
//             console.log("Hello, " + this.name);
//         }, 1000);
//     }
// };
// user.greet(); // What will this output and why?

// // Question 3
// const user2 = {
//     name: "John",
//     greet: function() {
//         setTimeout(() => {
//             console.log("Hello, " + this.name);
//         }, 1000);
//     }
// };
// user2.greet(); // How will this differ from Question 2?

// // Question 4
// function Person(name) {
//     this.name = name;
//     setTimeout(function() {
//         console.log(this.name);
//     }, 100);
// }
// new Person("Jack"); // What will this output?

// // Question 5
// let obj = {
//     value: 0,
//     increment: function() {
//         setTimeout(() => {
//             console.log(++this.value);
//         }, 1000);
//     }
// };
// obj.increment();
// obj.value = 10; // What will be logged?

// // Question 6
// function outer() {
//     let x = 10;
//     return function inner() {
//         let y = 20;
//         return function innermost() {
//             console.log(x + y);
//         }
//     }
// }
// const fn = outer()();
// fn(); // What will this output?

// // Question 7
// const calculator = {
//     value: 0,
//     add: function(n) {
//         setTimeout(() => {
//             this.value += n;
//             console.log(this.value);
//         }, 500);
//     }
// };
// calculator.add(5);
// calculator.value = 10; // What will be logged?

// // Question 8
// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }
// const add5 = makeAdder(5);
// console.log(add5(3)); // What will this output?

// // Question 9
// const obj1 = {
//     value: 'original',
//     display: function() {
//         console.log(this.value);
//     }
// };
// const newDisplay = obj1.display;
// newDisplay(); // What will this output?

// // Question 10
// const obj2 = {
//     value: 42,
//     print: () => {
//         console.log(this.value);
//     }
// };
// obj2.print(); // What will this output?

// // Question 11
// function DelayedGreeter(name) {
//     this.name = name;
//     this.greet = () => {
//         setTimeout(() => {
//             console.log(`Hello, ${this.name}!`);
//         }, 1000);
//     }
// }
// const greeter = new DelayedGreeter("Alice");
// greeter.greet(); // What will this output?

// // Question 12
// let value = 1;
// const obj3 = {
//     value: 2,
//     method: function() {
//         const value = 3;
//         return {
//             value: 4,
//             getValue: () => {
//                 return this.value;
//             }
//         };
//     }
// };
// console.log(obj3.method().getValue()); // What will this output?

// // Question 13
// function createIncrementer() {
//     let count = 0;
//     let timer = setInterval(function() {
//         console.log(++count);
//         if(count === 3) clearInterval(timer);
//     }, 1000);
// }
// createIncrementer(); // What sequence will be logged?

// // Question 14
// const button = {
//     content: 'OK',
//     click() {
//         setTimeout(function() {
//             console.log(this.content);
//         }, 500);
//     }
// };
// button.click(); // What will this output?

// // Question 15
// function multiply(x) {
//     return function(y) {
//         return function(z) {
//             return x * y * z;
//         }
//     }
// }
// console.log(multiply(2)(3)(4)); // What will this output?

// // Question 16
// const closure = (function() {
//     let counter = 0;
//     return {
//         increment: function() {
//             counter++;
//         },
//         getCounter: function() {
//             return counter;
//         }
//     };
// })();
// closure.increment();
// closure.increment();
// console.log(closure.getCounter()); // What will this output?

// // Question 17
// const obj4 = {
//     name: 'obj4',
//     method: function() {
//         (() => {
//             console.log(this.name);
//         })();
//     }
// };
// obj4.method(); // What will this output?

// // Question 18
// function Queue() {
//     const items = [];
//     this.enqueue = function(item) {
//         items.push(item);
//     };
//     this.dequeue = function() {
//         return items.shift();
//     };
// }
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.items); // What will this output and why?

// // Question 19
// const adder = {
//     base: 1,
//     add: function(a) {
//         const f = v => v + this.base;
//         return f(a);
//     },
//     addThruCall: function(a) {
//         const f = function(v) {
//             return v + this.base;
//         };
//         return f.call(this, a);
//     }
// };
// console.log(adder.add(1)); // What will this output?
// console.log(adder.addThruCall(1)); // How will this differ?

// // Question 20
// const module = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     },
//     getXArrow: () => this.x,
//     getXDelay: function() {
//         setTimeout(() => {
//             console.log(this.x);
//         }, 1000);
//     }
// };
// console.log(module.getX()); // What will these three output?
// console.log(module.getXArrow());
// module.getXDelay();