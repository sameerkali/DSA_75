const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const sortedArr = [10, 20, 30, 40, 50];
const target = 30;

console.log(binarySearch(sortedArr, target));

// const search = (arr, target) =>{
// return arr.indexOf(target)
// }
// let array = [10,20,3,4,5,6]
// console.log(search(array, 5))
