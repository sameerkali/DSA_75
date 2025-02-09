const removeDuplicate = (arr) => {
    let container = new Set
    for (let i = 0; i < arr.length; i++) {
        container.add(arr[i])
    }
    return Array.from(container)
}

let arr = [1,2,3,4,5,6,7,8,1,2,3]
console.log(removeDuplicate(arr))