// //normal add function
// const add = (a, b) => a + b;
// //memoized add function
// const memo_add = (a, b) => {
//   let cache = {};
//   return (a, b) => {
//     const key = `${a},${b}`;
//     if (key in cache) {
//       console.log("fetching the data from cache");
//       return cache[key];
//     } else {
//       console.log("adding to cache, returning the data");
//       cache[key] = add(a, b);
//       return add(a, b);
//     }
//   };
// };
// // console.log(add(2, 5));
// const memoAdd = memo_add();
// console.log(memoAdd(2, 2));
// console.log(memoAdd(2, 10));
// console.log(memoAdd(2, 2));
// console.log(memoAdd(2, 10));
// console.log(memoAdd(2, 2));
// console.log(memoAdd(2, 2));

























const asliCache = {}
const add2 = (a, b) => {
  let result = a + b;
  console.log("calculate the :" + a + "and" + b);
  return result;
};

const memoAsli = (a,b) => {
  let key = `${a},${b}`
  if(!asliCache[key]){
    let result = add2(a,b)
    asliCache[key] = result
    return result
  }else{
    console.log("cached result: ", asliCache[key])
  }
}

memoAsli(2,2)
memoAsli(2,3)
memoAsli(2,2)
memoAsli(2,3)
memoAsli(2,2)
memoAsli(2,3)
memoAsli(2,2)