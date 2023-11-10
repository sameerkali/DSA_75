/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i-1]) {
            let lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    res.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo+1]) lo++;
                    while (lo < hi && nums[hi] === nums[hi-1]) hi--;
                    lo++;
                    hi--;
                } else if (nums[lo] + nums[hi] < sum) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
    
    
    return res;
};