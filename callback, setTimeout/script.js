// 1

// -------------setTimeout--------------

// function register() {
//   setTimeout(() => {
//     console.log("hello");
//   }, 2000);
// }
// register();

// function Email() {
//   setTimeout(() => {
//     console.log("EmailEnd");
//   }, 3000);
// }

// Email();

// ------------callback-----------

// function faiz(callback) {
//   setTimeout(() => {
//     console.log("FaizanAhmad");
//     callback();
//   }, 4000);
// }
// faiz();

// function run(callback) {
//   setTimeout(() => {
//     console.log("RunTime");
//     callback();
//   }, 3000);
// }
// run();

// function login(callback) {
//   setTimeout(() => {
//     console.log("loginEnd");
//     callback();
//   }, 2000);
// }
// login();

// function download(callback) {
//   setTimeout(() => {
//     console.log("DownloadFailed");
//     callback();
//   }, 1000);
// }
// download();

// faiz(function () {
//   run(function () {
//     login(function () {
//       download();
//     });
//   });
// });

// console.log("hey");

//---------- Promises------

function faiz() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("FaizanAhmad");
      resolve();
    }, 4000);
  });
}

function run() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("RunTime");
      resolve();
    }, 3000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("loginEnd");
      resolve();
    }, 2000);
  });
}

function download() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DownloadFailed");
      resolve();
    }, 1000);
  });
}

faiz().then(run).then(login).then(download);

console.log("hey");
