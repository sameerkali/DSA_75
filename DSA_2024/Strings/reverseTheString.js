const rev = (str) => {
    let reversedString = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString.push(str[i]);
    }
    return reversedString.join('');
}

let str = "sameer";
console.log(rev(str)); // Output: "reemas"
