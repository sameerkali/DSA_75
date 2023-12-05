Array.prototype.reduce = function (callback, initialValue = undefined) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (accumulator === undefined) {
        accumulator = this[i]; // Set initial value for first element
      } else {
        accumulator = callback(accumulator, this[i], i, this); // Use all four arguments
      }
    }
    return accumulator;
  };
  
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const result = arr.reduce((acc, num) => acc + num, 0); // Sum all elements
  console.log(result); // Should output 28
  