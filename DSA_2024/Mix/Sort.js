// const simpleSort = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };

// const exampleArray = [64, 34, 25, 12, 22, 11, 90];
// console.log(simpleSort(exampleArray));

const simpleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp;
      if(arr[i]>arr[j]){
        temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }

    }
  }
  return arr
};

const exampleArray = [64, 34, 25, 12, 22, 11, 90];
console.log(simpleSort(exampleArray));
