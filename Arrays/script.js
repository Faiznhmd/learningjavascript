// const language = ["Jvascript", "Python", "C"];
// console.log(language);

// length
// console.log(language.length);
// console.log(language[1]);

// IMPORTANT THINGS
// 1. How to add elemnet an array and last of the array(Push)
// language.push("Dart");
// console.log(language);

// 2. How to Kick a Element of an last of an  array(pop)
// language.pop();
// console.log(language);

// 3. Add elemnet of the starting af an aaray (unshift)
// language.unshift("faizan");
// console.log(language);

//  4. How to kick first element of an array(shift)
// language.shift();
// console.log(language);

// 5. Show only a last elemnet of an array
// console.log(language.pop());

// -----------------loops------------------

//  ---------------1. for loop-------
// Example how to write a for loop

// for (let i = 0; i < 4; i++) {
//   console.log("$");
// }

// const actors = [
//   {
//     name: "Faizan",
//     payment: 1000,
//   },
//   {
//     name: "Ahmad",
//     payment: 2000,
//   },
//   {
//     name: "Stack",
//     payment: 3000,
//   },
// ];

// for (let i = 0; i < actors.length; i++) {
//   actors[i].payment = actors[i].payment - 500;
// }
// console.log(actors);

// 2. ----------------for each-----------

// const actors = [
//   {
//     name: "Faizan",
//     payment: 1000,
//   },
//   {
//     name: "Ahmad",
//     payment: 2000,
//   },
//   {
//     name: "Stack",
//     payment: 3000,
//   },
// ];
//  ji ke jagha kuch bhi likh skta hai

// actors.forEach((ji) => {
//   ji.payment = ji.payment - 10;
// });
// console.log(actors);

// 3.------------------ For of-----------

const actors = [
  {
    name: "Faizan",
    payment: 1000,
  },
  {
    name: "Ahmad",
    payment: 2000,
  },
  {
    name: "Stack",
    payment: 3000,
  },
];
for (let name of actors) {
  name.payment = name.payment - 10;
}
console.log(actors);

// ------------filter--------------
// const students = [
//   {
//     name: "Student 1",
//     marks: 45,
//   },
//   {
//     name: "Student 2",
//     marks: 60,
//   },
//   {
//     name: "Student 3",
//     marks: 35,
//   },
// ];
// student ko kuch bhi likh skta hai

// const failed = students.filter((student) => {
//   if (student.marks < 45) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(failed);

// another method-------

// const failed = students.filter((student) => {
//   return student.marks < 45;
// });
// console.log(failed);

// ----another method----
// const failed = students.filter((student) => student.marks < 45);
// console.log(failed);

// pehele tu filter method apply kro fir for each jaisa funciton lagao fir ek variable mai band krdo
// return true krega tu jo obj display kr rha hai wo display hoga
// return false krega tu display kuvh nai hoga

// -----------map---------- (jod deta hai)

// const users = [
//   {
//     fname: "faizan",
//     lname: "Ahamd",
//   },
//   {
//     fname: "John",
//     lname: "Doe",
//   },
// ];

// user ko kuch bhi naam de skta hai

// const finalusers = users.map((user) => {
//   return {
//     fullname: `${user.fname}${user.lname}`,
//   };
// });
// console.log(finalusers);

// -------------Reduce-------------
const movies = [
  {
    name: "Bahubali",
    budget: 100,
  },
  {
    name: "KGF",
    budget: 200,
  },
  {
    name: "NUN",
    budget: 200,
  },
];
// let total = 0;
// movies.forEach((movie) => {
//   total = total + movie.budget;
// });

// another method---------
const total = movies.reduce((acc, movie) => {
  acc = acc + movie.budget;
  return acc;
}, 0);
console.log(total);
