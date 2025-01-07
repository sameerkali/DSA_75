const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return the index if the target is found
      } else if (arr[mid] < target) {
        left = mid + 1; // Search the right half
      } else {
        right = mid - 1; // Search the left half
      }
    }
  
    return -1; // Return -1 if the target is not found
  };
  
  // Example Usage
  const sortedArr = [10, 20, 30, 40, 50];
  const target = 30;
  
  console.log(binarySearch(sortedArr, target)); // Output: 2
  