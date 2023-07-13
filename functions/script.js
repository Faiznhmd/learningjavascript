// function faizan() {
//   console.log(ahmad);
// }
// faizan();
// function login(username, password) {
//   console.log(`${username}  login in successfully`);
//   console.log(password);
// }
// login("john", "secret");

// ------------how to do uppercase-----------

// function upperCase(str) {
//   console.log(str.toUpperCase());
// }
// upperCase("javascript");

// 2. function upperCase(str) {
//   return str.toUpperCase();
// }
// const result = upperCase("javascript");
// console.log(result);

// ---------------rev--------------
// function upperCase(str) {
//   return str.toUpperCase("javascript");
// }
// const result = upperCase("javascript");
// console.log(result);

// function calculatearea(width, height) {
//   const area = width * height;
//   return area;
// }
// const area = calculatearea(30, 40);
// console.log(area);

//  -----------------rev----------------

// function calculatearea(width, height) {
//   const area = width * height;
//   return area;
// }
// const area = calculatearea(70, 40);
// console.log(area);

// variable ko bhar use kr skte hai console andr rhega
// but console bhar rhga tu varable ko catch nai  kr payega
//  example---

// correct
// const filename = "xyz.name";
// function download() {
//   console.log(filename);
// }
// download();

// nor correct
// function download() {
//   const filename = "xyz.name";
// }
// download();
// console.log(filename);

// -----function expression and function declaration-------

// function declaration
// function login() {

// }

// expression
// const login = function () {
//   console.log("faizan");
// };
// login();

//  --------------callback---------------

function formatText(text) {
  return text.toUpperCase();
}
const result = formatText("hello");
console.log(result);
