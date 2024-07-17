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
    return function() {
        console.log(`Hello, ${name}!`);
    };
}
const sayHello = greet('Alice');
// sayHello();


//Q3
function counter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
        console.log(count);
      },
      decrement: function() {
        count--;
        console.log(count);
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  // const counterInstance = counter();
  // counterInstance.increment();
  // counterInstance.increment();
  // counterInstance.decrement();
  // console.log(counterInstance.getCount());
  



//Q4
function delayedGreeting(name) {
    setTimeout(function() {
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
      counters.push(function() {
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





 x= 4
 console.log(x);
// let x
// var x 
// const x