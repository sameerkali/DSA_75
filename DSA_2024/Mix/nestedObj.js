console.log(`Question 01: From nested object: print list of all keys in array`);

let allKeys = {
  user01: "name01",
  user02: "name02",
  user03: {
    nestedUser01: "nestedUser01",
    nestedUser02: "nestedUser02"
  }
};

const getAllKeys = obj => {
  let keys = [];
  let nestedKeys = [];

  for (let key in obj) {
    keys.push(key);

    if (typeof obj[key] === "object") {
      nestedKeys.push(getAllKeys(obj[key]));
    }
  }
  let allKeys = keys.concat(nestedKeys).flat()
  return allKeys;
};

let allKeysArray = getAllKeys(allKeys);
console.log(allKeysArray);
