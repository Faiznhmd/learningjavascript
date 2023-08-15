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

// ----------------Block Scopes-------------

// Block scopes is defined by {}

// Block is also known as compound statement

//  block scopes does multiple js statement into one group { }

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// b and c stored in a diff scopes

// shadowing means same named variable
// var a = 10;
// var a = 100;

// ---------------------

// var a = 100;

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);

// 100 transform  into 10 in a global memory spaces

// let b = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(b);

// let b=100  have another scope script
// and let b=20 is in block

// same for const

// const c = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(c);

// lexical scope---------------

// lexical means one side an another
const a = 10;
{
  const a = 100;
  {
    const a = 1000;
    console.log(a);
  }
}

// nearest a
