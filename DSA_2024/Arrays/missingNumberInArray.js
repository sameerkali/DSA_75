const missingNumber  = (array,n)=> {
    for(let i = 0; i <= array.length-1; i++){
        if(array[i] === n) return i
    }
    
    return -1
}


let arr = [1,2,3,5]
let n = 5

console.log(missingNumber(arr, n))

