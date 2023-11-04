//! promise.all() || .allSetteld() || .race() || .any()

const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p1 is sucess"), 2000);
  setTimeout(() => reject("p1 is fail"), 200);
});
const promise2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p2 is sucess"), 1000);
  setTimeout(() => reject("p2 is fail"), 600);
});
const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p3 is sucess"), 2000);
  setTimeout(() => reject("p3 is fail"), 500);
});

//* promise.all()

// Promise.all([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* promise.allSetteld()

// Promise.allSettled([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* promise.race()

// Promise.race([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* promise.any()

Promise.any([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
