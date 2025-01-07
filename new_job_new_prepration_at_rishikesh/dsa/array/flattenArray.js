const flattenArray = (arr) => {
let result = [];
for( let a of arr){
    if(Array.isArray(a)){
        result.push(...flattenArray(a))
    }else{
        result.push(a)
    }
}
return result

}

const nestedArray = [1, [2, [3, [4]], 5], 6];
console.log(flattenArray(nestedArray)); 