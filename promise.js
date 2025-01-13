//! promise.all() || .allSetteld() || .race() || .any()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 is sucess"), 2000);
  // setTimeout(() => reject("p1 is fail"), 200);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 is sucess"), 1000);
  // setTimeout(() => resolve("p2 is pass"), 6);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 is sucess"), 3000);
  // setTimeout(() => reject("p3 is fail"), 200);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p4 is sucess"), 4000);
  // setTimeout(() => reject("p4 is fail"), 30);
});
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p5 is sucess"), 2000);
  // setTimeout(() => resolve("p5 is pass"), 100);
});
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p6 is failed"), 200);
  // setTimeout(() => reject("p6 is fail"), 1100);
});

//* promise.all()

// Promise.all([promise1, promise2, promise3, promise4, promise5, promise6])
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
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

//! ////////////////////////////////////////

// const uber = new Promise((resolve, reject) => {
//   const rand = Math.floor(Math.random() * 10);
//   if (rand % 2 === 0) {
//     resolve("Yesssss, it's resolved");
//   } else {
//     reject("Sorry, it's rejected");
//   }
// });

// uber
//   .then(val => {
//     console.log(val);
//   })
//   .then(()=>console.log("hayyyy"))
//   .catch(err => {
//     console.log("Error:", err);
//   })
//   .finally(console.log("finally its running"))

/*

Question: what is the difference between ".then(console.log("your message"))" &  ".then(() => console.log("your message"))"
    
  जब आप then(console.log("hayyyy")) लिखते हैं, तो आप then() को एक फ़ंक्शन नहीं पास कर रहे होते हैं, बल्कि console.log("hayyyy") 
  को कॉल करने का परिणाम पास कर रहे होते हैं। इसका अर्थ है कि console.log("hayyyy") को तुरंत निष्पादित किया जाता है, प्रॉमिस को हल किया जाता है
   या न किया जाता है। मूल रूप से, आप console.log() का वापसी मान undefined को then() विधि को पास कर रहे हैं।
  
  दूसरी तरफ, जब आप इनलाइन फ़ंक्शन का उपयोग करते हैं, जैसे then(() => console.log("hayyyy")), तो आप then() को एक फ़ंक्शन पास कर
   रहे होते हैं। यह फ़ंक्शन तुरंत नहीं निष्पादित किया जाता है, लेकिन बाद में, जब प्रॉमिस को हल किया जाता है, तो यह निष्पादित किया जाता है। इसलिए, 
   "hayyyy" को उचित समय पर छापा जाता है, प्रॉमिस हल होने के बाद।
  
  सारांश देने के लिए, इनलाइन फ़ंक्शन का उपयोग करने से console.log("hayyyy") का निष्पादन then() में स्थगित होता है,
   जबकि then(console.log("hayyyy")) का उपयोग console.log("hayyyy") को तुरंत निष्पादित कर देता है और उसका वापसी मान then() 
   को पास करता है।
    */




console.log("promise")