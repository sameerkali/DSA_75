//! basic example

// const goToLunch = (person) => {
//   if (person == 5) return true;
//   console.log(person);
//   return goToLunch(person + 1);
// };

// console.log("outcome", goToLunch(1));

//! convert loop into recursive functions

function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
// console.log(multiply([1, 2, 3, 4]));

function multiply(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}
// console.log(multiply([1, 2, 3, 4]));

//! factorial  n=5 -> 5*4*3*2*1

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5));
  