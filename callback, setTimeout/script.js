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

function faiz(callback) {
  setTimeout(() => {
    console.log("FaizanAhmad");
    callback();
  }, 4000);
}
// faiz();

function run(callback) {
  setTimeout(() => {
    console.log("RunTime");
    callback();
  }, 3000);
}
// run();

function login(callback) {
  setTimeout(() => {
    console.log("loginEnd");
    callback();
  }, 2000);
}
// login();

function download(callback) {
  setTimeout(() => {
    console.log("DownloadFailed");
    callback();
  }, 1000);
}
// download();

faiz(function () {
  run(function () {
    login();
    download();
  });
});
console.log("hey");
