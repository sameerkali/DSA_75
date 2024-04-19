//! promise.all() || .allSetteld() || .race() || .any()

const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p1 is sucess"), 2000);
  setTimeout(() => reject("p1 is fail"), 200);
});
const promise2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p2 is sucess"), 1000);
  setTimeout(() => resolve("p2 is pass"), 6);
});
const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p3 is sucess"), 2000);
  setTimeout(() => reject("p3 is fail"), 200);
});
const promise4 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p4 is sucess"), 2000);
  setTimeout(() => reject("p4 is fail"), 30);
});
const promise5 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p5 is sucess"), 2000);
  setTimeout(() => resolve("p5 is pass"), 100);
});
const promise6 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p6 is sucess"), 2000);
  setTimeout(() => reject("p6 is fail"), 1100);
});

//* promise.all()

Promise.all([promise1, promise2, promise3,promise4, promise5, promise6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  /* first fail one */

//* promise.allSetteld()

// Promise.allSettled([promise1, promise2, promise3,promise4, promise5, promise6])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
  /* tell the status of all after executing all */

//* promise.race()

// Promise.race([promise1, promise2, promise3,promise4, promise5, promise6])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
  /* tell the fastest one no metter what is the response */

//* promise.any()

// Promise.any([promise1, promise2, promise3,promise4, promise5, promise6])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  /* return first sucess promise */
