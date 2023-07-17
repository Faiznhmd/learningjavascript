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

// =-----------------------event loop---------------

//-----(call stack)= check hota hia synchronus hai ya asynchronous hai code synchronous hoga tu turant execute ho jata hai

// -----(web Apis)= aynchronous ka time chal na start ho jata hai jitna time dia hai wo wahi rhega fir exccute hoga

// ----(callback queue)= web apis ka kaam khtm hoga fir wo code callback queue mai ayega fir dekhega ki call stack khali hai tu fir ye code turant bhj dega

// firtly we console the console.log(start) and he goes to call stack and then he execute the code then he pop(nikal jata hai ) from call stack

// jo function setTimeout diye the usko jab run krega tu pehle wo call stack mai jayega fir web apis mai jayega or usko jitna time diya hai wo wahi rhega fir jo uska baad jo code tha wo run ho jayega fir settimeout wala fuinction print hoga
