// const flattenArray = a => {
//     let newA = a.flat()
//     // console.log(newA.flat())

//     for(let i = 0; i < newA.length; i++){
//         if(typeof newA[i] === 'object'){
//             return newA.flat()
//             flattenArray(newA)
//         }
//     }

//     return newA
// };
// const a = [1, 2, 3, [4, [5, 6, [1, [3,4]]]], 7, 8];
// const result = flattenArray(a);
// console.log(result);

//! GPT code

// const flattenArray = a => {
//   let newA = [];

//   for (let i = 0; i < a.length; i++) {
//     if (Array.isArray(a[i])) {
//       newA = newA.concat(flattenArray(a[i]))
//     } else {
//       newA.push(a[i]);
//     }
//   }

//   return newA;
// };

// const a = [1, 2, 3, [4, [5, 6, [1, [3, 4]]]], 7, 8, [2, [2, [2, [2]]]]];
// const result = flattenArray(a);
// console.log(result);



//!chakde frontend candidate solution
var count = 0;
const flattenArray = (a, arr)=>{
count++;
    for(let i=0; i<a.length; i++){
        if(Array.isArray(a[i])){
            flattenArray(a[i], arr)
        }else{
            arr.push(a[i]);
        }
    }
    return arr
}
const a = [1,{test: 'test'}, 2, 3, [4, [5, 6, [1, [3, 4]]]], 7, 8, [2, [2, [2, [2]]]]];
const result = flattenArray(a, []);
console.log(result, count);