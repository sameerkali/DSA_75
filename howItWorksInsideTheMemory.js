// Q1

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());


// Q-2
// function greet(name) {
//   return function () {
//     console.log(`Hello, ${name}!`);
//   };
// }
// const sayHello = greet("sameer");
// sayHello();


// Q-3
// When passing methods as callbacks, the original context can be lost
const person = {
  name: "Eve",
  greet() {
    console.log("Hi, " + this.name);
  }
};
const greetFunc = person.greet;
// greetFunc(); // Undefined or error, because `this` is not bound to person.

