const simpleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  };
  
  const sec_lar = arr => {
      let sorted = simpleSort(arr)
      let len = arr.length;
      return sorted[len-2]
  }
  
  
  
  const exampleArray = [64, 34, 25, 12, 22, 11, 90];
  
  
  
  
  
  console.log(sec_lar(exampleArray));
  