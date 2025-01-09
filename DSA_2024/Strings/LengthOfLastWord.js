//! my solution
// var lengthOfLastWord = function(s) {
    
//     let word = s.split('').reverse();
//     console.log(word)
//     let count=0
//     for(let i=0; i<=word.length ; i++){
//         count++
//         if(i == " "){
//             return count
//         }
//     }
//     return null;
// };

// let word = "hii i am sameer"
// console.log(lengthOfLastWord(word));

//!chat gpt
// var lengthOfLastWord = function(s) {
    //     return s.trim().split(' ').length === 0 ? "" : s.trim().split(' ')[s.trim().split(' ').length - 1].length;
    // };
    
    
    
    //!chat gpt
// let lengthOfLastWord = s =>  s.trim().split(' ').length === 0 ? "" : s.trim().split(' ')[s.trim().split(' ').length - 1].length;

// let word = "hii i am sameer";
// console.log(lengthOfLastWord(word)); // Output: 6

//! best solution
