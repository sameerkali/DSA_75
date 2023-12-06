//! Practice of 'this' keyword

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

for (let key in arr) {
  console.log(`key: ${key} and the value: ${arr[key]}`);
}

//! practice of closures

function outest() {
  var c = 30;

  function outer(b) {
    let a = 10;

    function inner() {
      console.log(a + " " + b + " " + c);
    }

    return inner;
  }

  return outer;
}

// outest()(20)();

//! practice of async await

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 is resolved");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 is resolved");
  }, 4000);
});

//*normal function

// async function checkAsync() {
//   console.log("hello world!");
//   const t1 = await p1;
//   console.log(t1);

//   const t2 = await p2;
//   console.log(t2);
// }

//*arrow function

const checkAsync = async () => {
  console.log("hello world!");
  const t1 = await p1;
  console.log(t1);

  const t2 = await p2;
  console.log(t2);
};
// checkAsync();

// in both cases the answer should be same

//! video reference in casee of revesion (async await | Namaste JavaScript - Season 02 - Ep 04) timestamp: 34:40 - 40:40

// another example
const api_url = "htts://api.github.com/users/sameerkali";

const apicall = async () => {
  try {
    const data = await fetch(api_url);
    console.log("mai hi sabse pehle aaya");
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log("error in fetch", error);
  }
};
apicall();
