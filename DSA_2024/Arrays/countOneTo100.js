const oneto100 = num => {
  let value = 0;
  for (let i = 0; i < num; i++) {
    value += i;
  }
  return value;
};
console.log(oneto100(100));
