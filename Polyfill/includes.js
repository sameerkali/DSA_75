Array.prototype.includes = function (searchElement, fromIndex = 0) {
    const startIndex = fromIndex || 0;
    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true;
      }
    }
    return false;
  };
  
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const result = arr.includes(7); // Use the correct format with search element only
  console.log(result); // Should output true
  