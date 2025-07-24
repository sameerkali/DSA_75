
var removeDuplicates = function (nums) {
    let l = nums.length;
    if (l === 1) return 1
    let j = 1
    for (let i = 1; i < l; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i]
            j++
        }
    }
    return j
};