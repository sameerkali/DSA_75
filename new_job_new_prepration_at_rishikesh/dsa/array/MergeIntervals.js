var merge = function(intervals) {
    if (intervals.length === 0) return [];

    // Step 1: Sort intervals by starting point
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]]; // First interval in result

    for (let i = 1; i < intervals.length; i++) {
        let prev = result[result.length - 1]; // last added interval
        let curr = intervals[i];

        // If overlap → merge
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            result.push(curr);
        }
    }

    return result;
};
