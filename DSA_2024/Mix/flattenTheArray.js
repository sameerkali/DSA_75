const flattenArray = a => {
    let newA = a.flat()
    // console.log(newA.flat())

    for(let i = 0; i < newA.length; i++){
        if(typeof newA[i] === 'object'){
            return newA.flat()
            flattenArray(newA)
        }
    }

    return newA
};
const a = [1, 2, 3, [4, [5, 6, [1, [3,4]]]], 7, 8];
const result = flattenArray(a);
console.log(result);
