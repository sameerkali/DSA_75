// var findClosestNumber = function(nums) {
//     // Infinity 
//     // Math.abs
//     let close_num = Infinity;
//     for(let i = 0; i<= nums.length; i++){
//         let compare = 0 + nums[i]
//         if(compare < close_num){
//             close_num = compare;
//         }
//     }
//     return close_num;
// };

var findClosestNumber = function(nums) {
    let closest = nums[0];
    
    for (let x of nums) {
        if (Math.abs(x) < Math.abs(closest)) {
            closest = x;
        }
    }
    
    if (closest < 0 && nums.includes(Math.abs(closest))) {
        return Math.abs(closest);
    } else {
        return closest;
    }
};

const arr  = [2,3,4,-5,6,7]
console.log(findClosestNumber(arr))