var findLHS = function(nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let maxLen = 0;
    for (const [num, count] of map.entries()) {
        if (map.has(num + 1)) {
            maxLen = Math.max(maxLen, count + map.get(num + 1));
        }
    }

    return maxLen;
};
