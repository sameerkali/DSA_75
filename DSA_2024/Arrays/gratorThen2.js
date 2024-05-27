
var specialArray = function(nums) {
    let sorted = nums.sort((a, b) => b - a);
    
    let hIndex = -1;
    for (let i = 1; i <= nums.length; i++) {
        if (sorted[i - 1] >= i) {
            hIndex = i;
        } else {
            if (sorted[i - 1] >= hIndex) {
                hIndex = -1;
            }
            break;
        }
    }
    return hIndex;
};

console.log(specialArray([3,6,7,7,0]))