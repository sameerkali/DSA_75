Array.prototype.find = function (callback) {
    // Use the standard name "find"
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) { // Only element and index as arguments
        return this[i];
      }
    }
    return undefined;
  };
  
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const result = arr.find((element) => element === 7); // Use the expected callback format
  console.log(result); // Should output 2
  