const sumOfAll = (n) => {
    let sum = 0
    while(n > 0){
        sum += n%10;
        n = Math.floor(n/10)
    }
    return sum;
  };
  console.log(sumOfAll(12345));