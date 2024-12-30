// Find the First Non-Repeating Character in a String
const check = (str) => {
let a = str.split('')
for(let i=0; i<a.length; i++){
    for(let j=i+1; j<a.length; j++){
       if(a[i] === a[j]){
        return a[i]
       }
    }
}
return a
}
let str = 'asdfghjklhjkl'
console.log(check(str))
