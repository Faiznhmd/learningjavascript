// -------------synchronous javascript--------

// turant run ho jata hia synchronous js
// console.log("hi");
// console.log("faizan");

//----------- Asynchronous javascript---------
// console.log("hi");
// console.log("where");

// setTimeout(function () {
//   console.log("where are you");
// }, 3000);

// console.log("hi");

// setTimeout(function () {
//   console.log("where are you");
// }, 3000);

// console.log("where");

// asynchronous js function ko block nai krta hai means pehle (hi) print hoga fir (where) fir last (where are you) hoga its ki block ni krta hai

// another method--------
// function greeting() {
//   console.log("javascript");
// }
// setTimeout(greeting, 2000);

// -----------------------event loop---------------

//-----(call stack)= check hota hia synchronus hai ya asynchronous hai code synchronous hoga tu turant execute ho jata hai

// -----(web Apis)= aynchronous ka time chal na start ho jata hai jitna time dia hai wo wahi rhega fir exccute hoga

// ----(callback queue)= web apis ka kaam khtm hoga fir wo code callback queue mai ayega fir dekhega ki call stack khali hai tu fir ye code turant bhj dega

// firtly we console the console.log(start) and he goes to call stack and then he execute the code then he pop(nikal jata hai ) from call stack

// jo function setTimeout diye the usko jab run krega tu pehle wo call stack mai jayega fir web apis mai jayega or usko jitna time diya hai wo wahi rhega fir jo uska baad jo code tha wo run ho jayega fir settimeout wala fuinction print hoga

// ---------------CALL BACK--------------

// scenario

// Register
// send welcome Email
// login
// get user data
// display userdata

// callback ke jagah kuvh bhi name ho skta hai

// function register(callback) {
//   setTimeout(() => {
//     console.log("Register end");
//     callback();
//   }, 1000);
// }
// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log("Email end");
//     callback();
//   }, 2000);
// }
// function login(ahmad) {
//   setTimeout(() => {
//     console.log("login end");
//     ahmad();
//   }, 5000);
// }
// function getuserData() {
//   setTimeout(() => {
//     console.log("Got user data");
//   }, 1000);
// }
// function displayUserData() {
//   setTimeout(() => {
//     console.log("user data displayed");
//   }, 1000);
// }

// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getuserData();
//       displayUserData();
//     });
//   });
// });

// ab jisko jitna do wo wo pehle upper wala hoga ttu he niche run hoga jo order hai usse he run hoga

console.log("other application work");

// --------------practice example call back--------

// function fan(gg) {
//   setTimeout(() => {
//     console.log("bottle");
//     gg();
//   }, 6000);
// }

// function book() {
//   setTimeout(() => {
//     console.log("page");
//   }, 2000);
// }

// function pen() {
//   setTimeout(() => {
//     console.log("ink");
//   }, 3000);
// }
// fan(function () {
//   book();
//   pen();
// });

// ----------------Promises------------------

// function register() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Register end");
//       resolve();
//     }, 1000);
//   });
// }
// function sendEmail() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Email end");
//       resolve();
//     }, 2000);
//   });
// }
// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("login end");
//       resolve();
//     }, 5000);
//   });
// }
// function getuserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Got user data");
//       resolve();
//     }, 1000);
//   });
// }
// function displayUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("user data displayed");
//       resolve();
//     }, 1000);
//   });
// }
// register().then(sendEmail).then(login).then(getuserData).then(displayUserData);

// ----------- Promises REJECT------------
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("Error while registering...");
      console.log("Register end");
      reject();
    }, 2000);
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email end");
      resolve();
    }, 2000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
      resolve();
    }, 5000);
  });
}
function getuserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got user data");
      resolve();
    }, 1000);
  });
}
function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user data displayed");
      resolve();
    }, 1000);
  });
}
register()
  .then(sendEmail)
  .then(login)
  .then(getuserData)
  .then(displayUserData)
  .catch((err) => {
    console.log("Error: ", err);
  });
