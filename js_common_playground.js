// (A) Hey, undefined just called.
const call = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  }
};
// call.says(); // Hey, mom just called.

// (B) Challenge #2
const call2 = {
  caller: "mom",
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};
// call2.says(); // Hey, undefined just called.

//Challenge #3
const call3 = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall = call3.says;

// newCall(); // Hey, undefined just called.

//* explaination :
//!  Here, we declare a new variable, newCall, and assign the says function inside the call object to newCall. And then we invoke newCall, which is a now simple function call.

//! Notice where we invoke the function. Is it inside the call object? No. We are invoking newCall() function globally, which in turn makes the 'this' keyword equal to the global object.

//! As demonstrated in Challenge#2, since the global object does not have a caller property, you get "undefined" as a result.

// Challenge #4
function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call4 = {
  caller: "mom",
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall2 = call4.anotherCaller;
//   newCall2()

/// #5

//   function foo () {
//     console.log("Simple function call");
//     console.log(this === window);
//   }
//   foo();

// #6


const arr = new Array();

for(let key in arr) {
    console.log(`key: ${key} and the value: ${arr[key]}`);
}