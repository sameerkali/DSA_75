// --------------------------------------------------------------------------
// Q-1: When passing methods as callbacks, the original context can be lost

const person = {
  name: "Eve",
  greet() {
    console.log("Hi, " + this.name);
  }
};

const greetFunc = person.greet;
// greetFunc(); // Undefined or error, because `this` is not bound to person.
  
// --------------------------------------------------------------------------
// Q1: Example of Closure - a function closing over a variable from its parent scope

function outer() {
  let outerVar = 10;
  function inner() {
    console.log(outerVar);
  }
  return inner;
}

const closureFunc = outer();
// closureFunc();

// --------------------------------------------------------------------------
// Q2: Returning a function that remembers the passed parameter (Closure)

function greet(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const sayHello = greet("sameer");
// sayHello();

// --------------------------------------------------------------------------
// Q3: Object with private state using closures

function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      return count;
    },
  };
}

// Usage Example:
// const counterInstance = counter();
// counterInstance.increment(); // 1
// counterInstance.increment(); // 2
// counterInstance.decrement(); // 1
// console.log(counterInstance.getCount()); // 1

// --------------------------------------------------------------------------
// Q4: Using setTimeout to delay a greeting

function delayedGreeting(name) {
  setTimeout(function () {
    console.log(`Hello, ${name}!`);
  }, 1000);
}

// Usage Example:
// delayedGreeting('Bob');
// console.log('Greetings sent!');

// --------------------------------------------------------------------------
// Q5: Creating multiple functions that share a single counter variable

function createCounter() {
  let count = 0;
  const counters = [];

  for (let i = 0; i < 3; i++) {
    counters.push(function () {
      console.log(count++);
    });
  }
console.log("counters array: ", counters )
  return counters;
}

// const counters = createCounter();
// Usage Example:
// counters[0](); // prints 0
// counters[1](); // prints 1
// counters[2](); // prints 2

// --------------------------------------------------------------------------
// Q6: Various JavaScript hoisting and scoping examples

// Example 1: Implicit global declaration if 'var', 'let' or 'const' are not used properly.
// x = 4;
// console.log(x);

// Example 2: Declarations using let, var, const (Uncomment the one you want to test)
// let x;
// var x;
// const x;

// Another Example:
const a = 10;
// console.log(a + 1);

const fuinc = () => {
  console.log(a + 2);
};

// console.log(a + 3);
// fuinc();

// Additional examples (commented out):
// Using closures:

// function closures() {
//   const a = 10;
//   function inside() {
//     console.log(a);
//   }
//   inside();
// }
// closures();

// Arrow function with nested arrow functions:
 
// const closures2 = () => {
//   const a = 10;
//   const inside = () => {
//     console.log(a);
//     const inside2 = () => {
//       console.log(a + 1);
//     };
//     inside2();
//   };
//   inside();
// };
// closures2();

// Currying examples:

// const a = (x) => {
//   return (y) => {
//     return (z) => {
//       console.log(x + y + z);
//     };
//   };
// };

// // We can call this way:
// const and = a(2);
// const anb = and(3);
// anb(5);

// // Or using currying in a single expression:
// a(1)(2)(3);

// Scope chaining example:

// const x2 = 20;
// function a1() {
//   var x1 = 10;
//   b1();
//   function b1() {
//     c1();
//     function c1() {
//       console.log(x1);
//     }
//   }
// }
// // console.log(x1); // This would throw an error because x1 is not in the global scope
// console.log(x2);
// a1();

// --------------------------------------------------------------------------
// Practice Questions:
// 20 July 2024

// 01 September 2024

// ! Question: Create a count function that works as follows:
/*
count() // 1
count() // 2
count() // 3
count.reset()
count() // 1
count() // 2
*/

// Answer Implementation:

// const count = (() => {
//   let counter = 0;
//   function incr() {
//     counter++;
//     console.log(counter);
//     return counter;
//   }
//   incr.reset = function () {
//     counter = 0;
//   };
//   return incr;
// })();

// Usage Example:
// count();
// count();
// count();
// count.reset();
// count();
// count();




// let counterValue = 0;

// function count() {
//   counterValue++;
//   console.log(counterValue);
//   return counterValue;
// }

// count.reset = function () {
//   counterValue = 0;
// };

// count();      
// count();      
// count();      
// count.reset(); 
// count();      
// count();      



function createCounter() {
let counter = 0;
function count(){
  console.log(counter)
  return counter++
}
count.reset = function(){
  counter=0
}
return count
}

const count = createCounter();

count();
count();
count();
count.reset();
count();
count();
