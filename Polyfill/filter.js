Array.prototype.filters = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
      result.push(this[i]);
      result.push(this[i]);
    }
  }
  return result;
};
const arr = [1, 2, 3, 4, 5, 6, 7];
const result = arr.filters((e) => e % 2 === 0);
console.log(result);


