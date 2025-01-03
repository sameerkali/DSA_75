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
