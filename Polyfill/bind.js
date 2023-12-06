// Polyfill for the bind method

Function.prototype.binds = function (context) {
  // Store the reference to the current function
  const fn = this;

  // Get the additional arguments passed to bind
  const args = Array.prototype.slice.call(arguments, 1);

  // Return a new function that, when called, will execute the original function with the specified context and arguments
  return function () {
    const combinedArgs = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(context, combinedArgs);
  };
};

// Example usage of the polyfill
function greet(greeting) {
  console.log(greeting + " " + this.name);
}

const person = { name: "John" };
const greetJohn = greet.binds( person, "Hello");
greetJohn(); // Output: Hello John
