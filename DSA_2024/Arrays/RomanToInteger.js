const RomanToInteger = s => {
  let I = 1;
  let V = 5;
  let X = 10;
  let L = 50;
  let C = 100;
  let D = 500;
  let M = 1000;
  let result = 0;
let convert = s.split('')
console.log(convert)
for (let i = 0; i < convert.length; i++) {
    if(convert[i] === "I"){
        result+= I
    }else if(convert[i] === "V"){
        result+= V
    }else if(convert[i] === "X"){
        result+= X
    }else if(convert[i] === "L"){
        result+= L
    }else if(convert[i] === "C"){
        result+= C
    }else if(convert[i] === "D"){
        result+= D
    }else{
        result+= M
    }
}
return result
};

RomanToInteger("MCMXCIV")