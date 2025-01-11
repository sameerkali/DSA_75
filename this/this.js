// When passing methods as callbacks, the original context can be lost

const person = {
    name: "Eve",
    greet() {
      console.log("Hi, " + this.name);
    }
  };
  const greetFunc = person.greet;
  greetFunc(); // Undefined or error, because `this` is not bound to person.
  