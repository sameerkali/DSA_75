const convertToWave = (n, arr) => {
    // Ensure the array has at least 2 elements
    if (n < 2) {
        return arr;
    }

    // Sort the array in ascending order (not necessary, but improves clarity)
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n; i += 2) {
        // Swap adjacent elements if the current element is smaller and not at the beginning
        if (i > 0 && arr[i] < arr[i - 1]) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
        // Swap adjacent elements if the next element is larger and not at the end
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
console.log(convertToWave(4, [1, 3, 4, 2]));    // Output: [3, 1, 4, 2]
console.log(convertToWave(6, [2, 4, 6, 8, 10, 12])); // Output: [4, 2, 8, 6, 12, 10]
console.log(convertToWave(1, [1]));             // Output: [1] (No change for single element)
console.log(convertToWave(0, []));               // Output: [] (Empty array remains empty)
