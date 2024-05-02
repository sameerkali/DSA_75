// const findMaxK = nums => {
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     } else {
//       return Math.max(max, nums[i]);
//     }
//   }
//   return max;
// };

// let arr = [1, 2, 3, 4, 5, -4, -1, -30];

// console.log(findMaxK(arr));


//! second function

// const findMaxK = nums => {
   
//     return Math.max(...nums);
//   };
  
//   let arr = [1, 2, 3, 4, 5, -4, -1, -30];
  
//   console.log(findMaxK(arr));
  

//! final function

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {

    let arr = [-1];

    for(let i=0; i<nums.length; i++){
        for(let j=i+1 ; j<nums.length; j++){
            if(nums[i]===-nums[j]) arr.push(Math.abs(nums[j]))
        }
    }
    
    return Math.max(...arr);
};