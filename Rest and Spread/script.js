// Rest Spread denote as ...

// spread means unpack elements

//  spread=elemnents ko copy kr skte hai

// copy--------

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers];
// console.log(newNumbers);

//  two arrays merge-------(sath mai)

// const oldnumbers = [1, 2, 3];
// const newnumbers = [4, 5, 6];
// console.log([...oldnumbers, ...newnumbers]);

// comspose-----------

// const oldnumbers = [1, 2, 3];
// const newnumbers = [4, 5, 6];
// console.log([200, ...oldnumbers, ...newnumbers, 300]);

// string------------

// const name = "FaizanAhmad";
// console.log([...name]);

// objects------------

// const order = {
//   product: "dove",
//   date: "16/8/23",
//   customerName: "faizan",
// };

// const neworder = {
//   ...order,
// };
// console.log(neworder);

// merge 2 object------------

// const user = {
//   name: "faizan",
//   age: 19,
//   birth: 24 / 6 / 2003,
// };

// const address = {
//   address: "jammu",
// };

// const newuser = {
//   ...user,
//   ...address,
// };
// console.log(newuser);

// Rest opearter--------------

// ------------Destructuring----------------

// bhot sari obj hai

// agr koi particular cheez chahiye tu use krte hai fir pehle baar bar console.loog(user.name)
// console.log(user.age) krna padhta hai but destuurting mai nai

// const user = {
//   name: "john doe",
//   age: 30,
// };

// const { name, age } = user;
// console.log(age);

// destructing in array---

// const data = ["Rakesh", 30, "Enigineer"];

// const [name, age, profession] = data;
// console.log(age);

// name ke jgh rakesh , age ke jgh 30

// kuch bhi chahiye hota hai tu uska index likhna padhta hai lekin desturcting mai ni
