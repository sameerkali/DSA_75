//! problem
// Ques 1 Given an integer array nums, find the subarray with the largest sum,
// and return its sum.
// let Input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; ----->Output: 6, [4,-1,2,1]
// let Input = [5, 4, -1, 7, 8];  ------>Output: 23, [5,4,-1,7,8]

// brute force approach

const maxSubArray = (nums) => {
  let max = 0;
  let startIndx = 0;
  let endIndx = 0;
  for (let i = 0; i < nums.length; i++) {
    // n
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      // n n-1 n-2 n-3 n-4 n-5 ....
      currentSum += nums[j];
      if (currentSum > max) {
        max = currentSum;
        startIndx = i;
        endIndx = j;
      }
    }
  }
  return {
    sum: max,
    index: nums.slice(startIndx, endIndx + 1)
  };
};
// time complexity = O(n*n) = O(n^2)
// space complexity = O(1)

let Input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(Input));

//* optimzed aproarch (kadans algorithm)

const optimized = (nums) => {
  let sum = 0;
  let mazSum = nums[0];
  for (let i = 0; i < nums.length; i++) { //n
    sum += nums[i];
    if (sum > mazSum) mazSum = sum;
    if (sum < 0) sum = 0;
  }
  return mazSum;
};

// console.log(optimized([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// time complexity = O(n) 
// space complexity = O(1)