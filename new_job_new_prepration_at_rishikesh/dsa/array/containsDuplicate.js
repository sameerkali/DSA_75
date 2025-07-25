var containsDuplicate = function(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
};
console.log(containsDuplicate([1,2,3,1]))

//way two (brute force)
// var containsDuplicate = function(nums) {
//     for(let i=0; i< nums.length; i++){
//      for(let j=i+1; j< nums.length; j++){
//         if(nums[i] === nums[j]) return true
//     }   
//     }
//     return false
// };