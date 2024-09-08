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









const add = (a,b) => a+b;
console.log(add(2,4), "normal function") 





const memo_add = (a,b) => {
  let cache = {}
  return (a,b) => {
    let key = `${a},${b}`
  if(key in cache){
    console.log("data fetching from cache ")
    return cache[key]
  }else{
    cache[key] = a+b;
    console.log("adding it into cache")
    return a+b;
  }
  
  }
}

let memo = memo_add()
console.log(memo(2,2))
console.log(memo(2,2))
console.log(memo(2,2))
console.log(memo(10,3))




























