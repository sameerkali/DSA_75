/*
Find the maximum sum of any contiguous subarray of size K.

Example: Input: [2, 1, 5, 1, 3, 2], K = 3; Output: 9
 */

const maxSumArr = (input, k) => {
  let maxSum = 0,
    windowSum = 0;

  for (let i = 0; i < input.length; i++) {
    windowSum += input[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= input[i - (k - 1)];
    }
  }

  return maxSum;
};

console.log(maxSumArr([2, 1, 5, 1, 3, 2], 3));
