function a() {
  setTimeout(() => {
    console.log("Two");
  }, 1000);
}
function b() {
  setTimeout(() => {
    console.log("One");
    a();
  }, 2000);
}

b();
//a()
