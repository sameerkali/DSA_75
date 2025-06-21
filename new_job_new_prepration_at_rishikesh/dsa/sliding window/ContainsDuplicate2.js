var containsNearbyDuplicate = function(nums, k) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (seen.hasOwnProperty(val) && i - seen[val] <= k) {
            return true;
        }
        seen[val] = i;
    }

    return false;
};
