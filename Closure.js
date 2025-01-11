// Q-1
// When passing methods as callbacks, the original context can be lost

const person = {
  name: "Eve",
  greet() {
    console.log("Hi, " + this.name);
  }
};
const greetFunc = person.greet;
// greetFunc(); // Undefined or error, because `this` is not bound to person.





// Q1
function outer() {
  let outerVar = 10;
  function inner() {
    console.log(outerVar);
  }
  return inner;
}
const closureFunc = outer();
// closureFunc();

//Q2
function greet(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}
// const sayHello = greet("sameer");
// sayHello();

//Q3
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

// const counterInstance = counter();
// counterInstance.increment();
// counterInstance.increment();
// counterInstance.decrement();
// console.log(counterInstance.getCount());

//Q4
function delayedGreeting(name) {
  setTimeout(function () {
    console.log(`Hello, ${name}!`);
  }, 1000);
}

// delayedGreeting('Bob');
// console.log('Greetings sent!');

//Q5
function createCounter() {
  let count = 0;
  const counters = [];

  for (let i = 0; i < 3; i++) {
    counters.push(function () {
      console.log(count++);
    });
  }

  return counters;
}

//   const counters = createCounter();
//   counters[0]();
//   counters[1]();
//   counters[2]();

//Q6

//  x= 4
//  console.log(x);
// let x
// var x
// const x

// const a = 10
// console.log(a+1)
// const fuinc = () => {
//   console.log(a+2)
// }
// console.log(a+3)

// fuinc()

function closures() {
  const a = 10;
  function inside() {
    console.log(a);
  }
  inside();
}

// closures()

const closures2 = () => {
  const a = 10;
  const inside = () => {
    console.log(a);
    const inside2 = () => {
      console.log(a + 1);
    };
    inside2();
  };
  inside();
};

// closures2();

//curring

const a = (x) => {
  return (y) => {
    return (z) => {
      console.log(x + y + z);
    };
  };
};
//we can call this way
// const and = a(2)
// const anb = and(3)
// let zzz = anb(5)

//or using curring
// a(1)(2)(3)


// scope chanin
// const x2 = 20
function a1() {
  var x1 = 10;
  b1();
  function b1() {
    c1();
    function c1() {
      console.log(x1);
    }
  }
}
// console.log(x1);
// console.log(x2)
// a1();




//practice : 20 July 2024


//practice : 01 September 2024

//! question 
/*
count() // 1
count() // 2
count() // 3
count.reset()
count() // 1
count() // 2
*/

// answer

// const count = ( () => {
//   let counter = 0
//   function incr (){
//       counter++
//       console.log(counter)
//       return counter
//   }
//   incr.reset = function(){
//       counter=0
//   }
//       return incr
// })()

// count()
// count()
// count()
// count.reset()
// count()
// count()



