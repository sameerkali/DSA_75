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



