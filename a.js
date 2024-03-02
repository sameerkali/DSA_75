// var a = [1, 2, 3, 4, 5,6,7]

// console.log(a.map((i)=> i%2))
// console.log(a.filter((i)=> i%2))

var a = 2;
function func() {
  var a = 3;

  console.log(a);
};
func();
console.log(a);
