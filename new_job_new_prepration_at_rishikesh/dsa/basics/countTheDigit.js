const count = (n) => {
    let cnt=0
    while(n>=0){
        n = Math.floor(n/10)
        cnt++
    }
    return cnt
  };
  console.log(count(123456789));