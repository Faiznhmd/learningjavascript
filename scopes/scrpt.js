//-------- Lexical Environment--------
// function a() {
//   console.log(b);
// }
// var b = 10;
// a();

// ----------------------------------------------------------
// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// a();

//  jab console(b) apna local memory dekhaga tu usko nai milega  fir wo uska parent mai jayega

// ----------------Closures-------------
