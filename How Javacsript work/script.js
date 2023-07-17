// ### Everything  in javascript happen inside the excecution context ####

// Execution context is like a big box or a container as whole javascript code is executed

// Execution context has two component first is memory component and other is code component

// memory component = variable environment
// code component= Thread of execution

// variables are stored in a memory component in a key value paired(function, a=10,)
//  code is excecuted one line at a time

// Javascript is a synchronous single thereaded language

// single thereaded means = one command(line) at a time

// synchronous single thereaded language= one command(line) at a time in a specific order


// --------------------how javascript code is executed------------

// when we run a code a global execution context is created\
// in the first phase  (n) have a special value undefined and the function have whole code in the memory space
// second phase is code execution phase
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
square();
var square2 = square(n);
var square4 = square(4);

// -----------Call Stack-----------
// call stack is a stack and  every time in a bottom of a stack we have a global execution context

//  whenever a javascript program is run  WHOLE GEC always in bottom of a CALL STACK
