/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    nums.sort((a, b) => a - b);

    let res = 0;
    let s = 0;
    while (s < nums.length) {
        let e = s;

        while (e < nums.length && nums[e] === nums[s]) {
            e++;
        }
        const count = e - s;
        if (count === 1) {
            return -1;
        }
        res += Math.floor(count / 3);

        if (count % 3 !== 0) {
            res += 1;
        }
        s = e;
    }
    return res;
};