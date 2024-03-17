const convertToWave = (n, arr) => {
  if (n < 2) {
    return arr;
  }

  for (let i = 0; i < n; i += 2) {
    if (i > 0 && arr[i] < arr[i - 1]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    if (i < n - 1 && arr[i] < arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
};

// Test cases
console.log(convertToWave(5, [1, 2, 3, 4, 5])); // Output: [2, 1, 4, 3, 5]
// console.log(convertToWave(4, [1, 2, 3, 4])); // Output: [ 2, 1, 4, 3 ]
// console.log(convertToWave(6, [2, 4, 6, 8, 10, 12])); // Output: [4, 2, 8, 6, 12, 10]
// console.log(convertToWave(1, [1])); // Output: [1] (No change for single element)
// console.log(convertToWave(0, [])); // Output: [] (Empty array remains empty)
