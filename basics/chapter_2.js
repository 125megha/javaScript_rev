 "use strict"//all the javascript are according to a newer varsion
 //alert(3+3)//we are using node js not browser
 //maintain code realiablity you can use prettier extension for the indentation correction
 // prefer ecma script for documentation and mdn mozila
 //data type
  let name="megha"//string
  let age =21//number
  let yes=true//boolean
  /* 
  primitive data type
  number 
  bigint
   string with single quote and double quote
   null-->is a type of value used by the program to define empty
   undefined-->not initializes value
   symbol
  */
 /*
 object-->with curly braces for different datatype
 array -->with square bracket same data type
 function
 */
 console.log(typeof(age))//to know the type of variable
 console.log(null)//note type of null returned as object type
 console.log(undefined)//type of undefined is undefined
 //conversion of datatype
 let num="123"//type is string
 let newnum=Number(num)//type is converted into number
 num="123a"//type is string
newnum=Number(num)//this can convert but in NaN
console.log(newnum)//output NaN not a number 
console.log(typeof(newnum))//note but type of NaN is number
num=null
newnum=Number(num)//output 0 for null into number
let result=1
result=Boolean(result)
console.log(result);
//empty string ips flase 
//****************operations************* *//
let value=3
let negvalue=-value//convert into negative value
// operators
/*
+ plush 
- minus 
* multiply
/ divide
% modulo
note behavoiur of operator with number is normal
 */
//
let str1="hiii"
let str2="megha"
console.log(str1+str2)//used as concatination operator
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
//note for more visit ecma 7.1 type conversion
let score=1000
score++;//postfix increment  operator
++score;//prefix increment operator
console.log(score)
//from mdn
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//comparision operators
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)
//all the out is normal in boolean form
//check  data type of operand before comparing otherwise it can give unexpected result with different datatype
//so we generally avoid this type of conversion
console.log(null>0)//false comparision 1st convert null into 0 then compare 
console.log(null==0)//not this it checks without converting so output is false
console.log(null>=0)//true
console.log("2"===2)//strict check with datatype check









