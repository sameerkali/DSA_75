const getMinMax = (arr, n) => {
  let min = Number.MAX_VALUE,
    max = Number.MIN_VALUE;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > min) max = arr[i];
  }
  return [min, max];
};

let arr = [3, 2, 1, 56, 1000, 167],
  n = 6;
console.log(getMinMax(arr, n));




const getMinMax = (arr, n) => {
   let min = Math.min(...arr)
   let max = Math.max(...arr)
   return `${min} ${max}`
  };
  
  let arr = [3, 2, 1, 56, 1000, 167],
    n = 6;
  console.log(getMinMax(arr, n));