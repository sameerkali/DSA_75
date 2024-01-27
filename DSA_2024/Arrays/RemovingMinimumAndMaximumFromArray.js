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

const minimumDeletions = (nums) => {
  let minimum = Math.max(...nums);
  let maximum = Math.min(...nums);
  console.log(minimum, maximum);

  const new_array = nums.filter((num) => num !== minimum && num !== maximum);
  return new_array.length;
};
const array01 = [2, 10, 7, 5, 4, 1, 8, 6];
console.log(minimumDeletions(array01));
