// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

//
function b() {
  c();
  console.log(a);
  function c() {
    console.log(a);
  }
}
var a = 10;
b();
