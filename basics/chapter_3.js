//note 
//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
//both symbol id and anotherid is with same value but unique
console.log(id === anotherId);

 const bigNumber = 3456543576654356754n
 console.log(bigNumber)
// Reference (Non primitive)
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "megha",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof anotherId);
console.log(typeof(myFunction))
console.log(typeof(heros))
console.log(typeof(myObj))
//typeof for function is function
//typeof for object is object 
//typeof for array is object
//typeof symbol is symbol
// https://262.ecma-international.org/5.1/#sec-11.4.3
//*********************Memory**************/
/*primitive uses stack memory to variable but nonprimitive and reference type uses the heap memory
  stack memory retruns the copy from the memory 
  but heap memory retruns the reference to that memory location
*/
let num=5;
let num2=num;
num2=7;
console.log(num,num2);
//note num2 intilized with copy of num and after the num2 is modified
//so it doesnot affect the num
let arr1=["a","b","c"];
let arr2=arr1;
arr2=["a","b","c"]
console.log(arr1,arr2);
//arr1 returns the reference of memory to arr2 and arr2 changes to that location
//so the arr1 and arr2 both are refering to the same memory location and modification will affect both 
/*parseInt() is a JavaScript function used to convert a string into an integer.

✅ Syntax:
javascript
Copy
Edit
parseInt(string, radix);
string: The value to convert (usually a string).

radix (optional): The base of the number system (e.g., 10 for decimal, 2 for binary, 16 for hexadecimal).

✅ Examples:
javascript
Copy
Edit
parseInt("123");        // → 123
parseInt("123.45");     // → 123 (it only returns the whole number)
parseInt("00123");      // → 123
parseInt("10", 2);      // → 2 (binary "10" = decimal 2)
parseInt("0xF");        // → 15 (hexadecimal)
parseInt("abc123");     // → NaN (not a number)
⚠️ Important Notes:
It ignores whitespace at the beginning of the string.

It stops parsing at the first non-numeric character.

If the first character is not a number, it returns NaN.

*/