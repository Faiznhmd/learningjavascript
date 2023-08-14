// DOM Manipulation Document object model
// 1. getelementById
// 2. getElementByTagName
// 3. getElementByClassName
// 4. querySelecter
// 5. querySelecterAll

// Traverse Dom

// 1. Parent node

// const heading = document.querySelector(".heading");
// const hi = heading.parentNode;
// console.log(hi);

// 2. childNodes

// const go = document.querySelector(".parent");

// console.log(go.childNodes);

// 3. nextElmentSiblings(h3 ko get krre hai)

// const heading = document.querySelector(".heading");
// console.log(heading.nextElementSibling);

// 4. previousElementSiblings

// const subHeading = document.querySelector(".subHeading");
// console.log(subHeading.previousElementSibling);

// ------------change a word in html using js---------------

// -- ----Manipulation------

// const hi = document.querySelector(".heading");
// hi.innerHTML = "Faizan is a Web developer";
// hi.style.color = "blue";
// hi.style.fontSize = "60px";

//---------- Create Elements------
// (kuch nai tha parent mai sab kuch create kiye hau dom mai browser mian  show hoga)

// const heading = document.createElement("h1");
// heading.innerHTML = "Independence day";
// const parent = document.querySelector(".parent");
// parent.appendChild(heading);
// console.log(heading);

//------ mini projects

// DOM Events

// const heading = document.querySelector("#heading");
// const button = document.querySelector("#btn");

// button.addEventListener("click", function () {
//   heading.style.color = "red";
//   heading.style.fontSize = "70px";
//   console.log("button clicked");
// });

// project

const button = document.querySelector("#btn");
const bulb = document.querySelector("#bulb");

button.addEventListener("click", function () {
  console.log(bulb.src);
  if (bulb.src.match("off")) {
    bulb.src = "./img/bulb on.avif";
    bulb.innerHTML = "Turn on";
  } else {
    bulb.src = "./img/bulb off.png";
    bulb.innerHTML = "Turn of";
  }
});
