// Define the polyfill before using it
Array.prototype.findIndexs = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const result = arr.findIndexs((element) => element === 7); // Use the expected callback format
console.log(result); // Should output 2
