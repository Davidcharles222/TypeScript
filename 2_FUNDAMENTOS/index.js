"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof (x));
const y = 15.555;
console.log(y);
console.log(typeof (y));
// 2 - string
const firstName = "David";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Charles";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof (fullName));
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof (a));
a = true;
console.log(a);
// 4 - inference e annotation
let ann = "teste"; // define o tipo manualmente
let inf = "teste"; // typescript define de forma automatica
// ann = 1
// inf = 1
