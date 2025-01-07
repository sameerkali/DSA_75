// const quickSort = (arr) => {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// };



// const quickSort = (arr) => {
//     if(arr.length <= 1) return arr
//     let pivot = arr[arr.length-1]    
//     let left = []
//     let right = []

//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
        
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }


const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let temp 
            if(arr[i] > arr[j]){
                temp = arr[i]
                arr[i]= arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(sort(arr));
