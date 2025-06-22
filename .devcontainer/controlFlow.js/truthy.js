const userEmail = []

if (userEmail) {
    console.log("Got user email");// this statement will run because empty array is true value
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values
// "0", 'false', " ", [], {}, function(){}
//to check empty array
let arr =[]
function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

// ✅ Example
console.log(isEmptyArray([]));         // true
console.log(isEmptyArray([1, 2, 3]));  // false
//to check empty object
let obj={}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
// ✅ Example
console.log(isEmptyObject({}));         // true
console.log(isEmptyObject({ name: "Megha" })); // false
// to check if it is truly object
//obj.constructor === Object;
// nullish coalscing operator(??)
// Nullish Coalescing Operator (??): null undefined
// to check value with null or undefine it will always return value
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator
// condition ? true : false genetal syntax
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
