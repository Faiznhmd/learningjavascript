// function faizan() {
//   console.log(ahmad);
// }
// faizan();
// function login(username, password) {
//   console.log(`${username}  login in successfully`);
//   console.log(password);
// }
// login('john', 'secret');

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

//-------- variable scope--------
// -----correct----

// const filename = "xyz.name";
// function download() {
//   console.log(filename);
// }
// download();

// ------not correct-------

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

//  --------------callback---------- function pass krte as a parameter(freedom deta hai user to apko text jaisa rkhna hai rkho)

// function format(text) {
//   return text.toUpperCase();
// }
// const result = format("hello");
// console.log(result);

// function formatText(text, formatCb) {
//   return typeof formatCb === "functoin" ? formatCb(text) : text.toUpperCase();
// }
// const result = formatText("faizan", function (text) {
//   return text.charAt(0).toUpperCase + text.slice(1);
// });
// console.log(result);

// -----IIFE(imediately invoked function expresion)-------

// (function aspire() {
//   console.log("setUpDone");
// })();

// ----------Arrow function--------

// const login = () => {
//   console.log("hii there");
// };
// login();

// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// const result = sum(4, 5);
// console.log(result);

// -------------How function work behind the scene--------
// same variable name so js beahve

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }
// when the control is taken in 123 line now the function is executed

// when javascript run a global gobalexecution context is created

// and GEC have 2 components memory and code components

// memory component is also called variable environment

// now before execution a single line of code memory is pushed in a first phase memory phase

// memory allocated to x a(), b() and all of this contain undefined in a first phase and a , b allocated to a exact function code

// when we run a first line of code undefined change into 1

// when function a is invoked and a brand new executionm

// context is ceated  another  execution context is
// created and separate manner funciton x has separate excution context mini place enviroment where this small function is excuted

// when we console a program console find a value in his ,local memory space and then he print the value on his console

// then whole excecution context is vanished the memory is gone and the cal stack is also gone
