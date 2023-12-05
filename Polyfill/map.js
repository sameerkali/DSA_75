Array.prototype.sap = function (callback) {
  // i name sap because of testind code
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const result = arr.sap((a) => a * 2);
console.log(result);
