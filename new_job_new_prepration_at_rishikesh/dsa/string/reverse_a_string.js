// const reverseStr = (str) => {
//     let reverse = ''
//     for(let i = str.length-1; i >= 0 ; i--) {
//         reverse += str[i]
//     }
//     return reverse;
// }


// let str = 'I am sameer'
// // console.log(reverseStr(str))

// const reverseStr2 = (str) => {
//     return str.split(' ').reverse().join(' ')
// }
// console.log(reverseStr2(str));





const reverse = (str) => {
    console.log(str)
    if(str === "") return


    return str.split('').reverse().join("")

}
let str = "sameer far89di"
console.log(reverse(str))