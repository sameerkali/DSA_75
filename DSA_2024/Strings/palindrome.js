const isPalindrome = (w) => {
let reverse = w.split('').reverse().join('');
let forword = w.split('').join('')
return reverse === forword
}

console.log(isPalindrome("samas"))