//normal add function
const add = (a, b) => a + b;
//memoized add function
const memo_add = (a, b) => {
  let cache = {};
  return (a, b) => {
    const key = `${a},${b}`;
    if (key in cache) {
      console.log("fetching the data from cache");
      return cache[key];
    } else {
      console.log("adding to cache, returning the data");
      const result = add(a, b);
      cache[key] = result;
      return result;
    }
  };
};
// console.log(add(2, 5));
const memoAdd = memo_add();
console.log(memoAdd(2, 2));
console.log(memoAdd(2, 10));
console.log(memoAdd(2, 2));
console.log(memoAdd(2, 10));
console.log(memoAdd(2, 2));
console.log(memoAdd(2, 2));