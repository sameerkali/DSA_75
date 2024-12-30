// const palindrome = (s) => {
//   if (s === " ") return true;
//   let ans = s.replace(" ", ""),
//     start = 0,
//     end = ans.length,
//     sam = "";
//   for (let i = 0; i < end; i++) {
//     if (ans[start] === ans[end]) {
//       sam += ans[start];
//     } else {
//       sam = "";
//     }
//   }
//   if (ans === sam) return true;
//   else return false;
// };

// let str = "asasa";
// console.log(palindrome(str));





























const palindrome = (str) => {
let a = str.toLowerCase().replace(/ /g, '')
return a.split('').reverse().join('') === a
}

let str = "sam a s"
console.log(palindrome(str))