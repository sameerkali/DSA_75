// const minimumDeletions = (nums) => {
//   let minimum = Number.MAX_VALUE;
//   let maximum = Number.MIN_VALUE;

//   for (let i = 0; i < nums.length; i++) {
//     if (minimum > nums[i]) minimum = nums[i];
//     if (maximum < nums[i]) maximum = nums[i];
//   }
//   const new_array = nums.filter((num) => num !== minimum && num !== maximum);
//   return new_array.length;
// };
// const array01 = [2, 10, 7, 5, 4, 1, 8, 6];
// console.log(minimumDeletions(array01));

//! method two
const minimumDeletions = (nums) => {
  let minimum = Math.max(...nums);
  let maximum = Math.min(...nums);
  let minIdx = 0,
    maxIdx = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minimum) minIdx = i;
    if (nums[i] === maximum) maxIdx = i;
  }
  //   console.log(minIdx, maxIdx);
  //treverse from left to right
  for (let j = 0; j < nums.length; j++) {
    // console.log(nums[j]);
    if (nums[j] <= minIdx) {
      nums.shift();
      count++;
    }
  }
  // if both max and min are on left side
  if (minIdx <= nums.length/2 && minIdx <= nums.length/2) {
    for (let j = 0; j < nums.length; j++) {
      // console.log(nums[j]);
      if (nums[j] <= minIdx) {
        nums.shift();
        count++;
      }
    }
  }

  // if both max and min are on right side
  if (minIdx >= nums.length/2 && minIdx >= nums.length/2) {
    for (let j = 0; j < nums.length; j++) {
      // console.log(nums[j]);
      if (nums[j] <= minIdx) {
        nums.shift();
        count++;
      }
    }
  }
  //treverse from right to left
  for (let k = nums.length; k > 0; k--) {
    // console.log(nums[k]);
    if (nums[k] >= maxIdx) {
      nums.pop();
      count++;
    }
  }
  return count;
};
// const array01 = [2, 10, 7, 5, 4, 1, 8, 6]; //testcase 01
// const array01 = [0, -4, 19, 1, 8, -2, -3, 5]; //testcase 02
const array01 = [101]; //testcase 03
console.log(minimumDeletions(array01));
