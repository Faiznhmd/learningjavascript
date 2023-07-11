// variables are containers for storing data string, object

// There are 3 types to declare a varables
// 1.var= (functioal scope) means reuse
// 2.lets=(Block scope)
// 3.const=(Block scope)

// let language = "javascript";
// console.log(language);

// const is a contsant value you can not change the value again when you declare the value earlier

// ------------block scope----------

// wrong way

// if (true) {
//   let age = 24;
// }
// console.log(age);

// correct way
// if (true) {
//   let age = 25;
//   console.log(age);
// }

//-------------- functional scope-----------

// if (true) {
//   var age = 34;
// }
// console.log(age);

// -----------hoisting---------

// let is also working on hoisting but in temporal dead zone
// basically hoisting is working with var

// var greetings;
// console.log(greetings);
// var greetings = "hello";

// let and const are  also hoisted  but in temporal dead zone

// console.log(a);
// let a = 10;

// let a = 10;
// console.log(a);
// var b = 10;
// behind the scenes
// var let const all are have undefined value (a)
// let and const have in script tag
// and var have in global tag
// var decleration b have attached with global obj
// and let const have also allocated memory but they stored in diff memory spaces called script memory spaces

//  line  49 have value of (a) is undefiend
// and line 50 (a) have value 10
// indentifier points the value 10
// inditifier is (a)

// TDZ

// let variable has been hoisted and till when he gets initialize the value the time gap between initialize the value is called TDZ

//  imp things to know
// 1.you can not write the variable as same like that in let const
// but in var you can access this

// leta;
// a = 10;
// console.log(a);
// you can access this in let

// consta;
// a = 100;
// console.log(a);
// but you can not do this with const

// ------------Blocked Scope-----------
// blocked scope combined multiple js statement in one group

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
// b And c are  in block
// a are in global
// and (a) are undefined

// ----------shadowing--------=same named variabled (a)

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

//  their are a two places where variables stored blocked (b=20)and script (b=100)

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
// same as let

//--------- lexical  block scope--------- =on side another
// {
//   const a = 30;
//   {
//     const a = 90;
//     console.log(a);
//   }
// }

// {
//   const a = 30;
//   {
//     const a = 90;
//   }
//   console.log(a);
// }

// ------------question--------------
//------------ shadow question----------

// function test() {
//   let a = "hlo";

//   if (true) {
//     let a = "hello";
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// -----------decleration --------
// we can write var as we want
// var a = 3;
// var a = 3;
// var a = 3;

//  but in let and const we can't do

// let a;
// let a;
// let a;

//  -----decleration without inilisation ----------

// alright with var and let but not in const
// vara;
// leta;

// this is right in js

//  but not in const

// const a;

// re - inilisation;
// var a = 32;
// a = 56;

// let a = 78;
// a = 58;

// but not in const do not change the value
// const a = 67;
// a = 90;
