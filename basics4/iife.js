 //IIFE--->Immediately Invoked Function Expressions
 //why the function which needs to be immediately execute
 //to prevent pollution from global scope variable in the function
 //how to write

 (function chai(){// this is named iife
  console.log("get me chai")
 })();
 // iife needs to end to run any other iife to end we apply semicolon at the end 
 //both normal function and arrow function can be written
 ((name)=>{console.log(`${name}bring me a tea`)})("megha") // this is not named iife