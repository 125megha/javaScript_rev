//global scope ,all the a b c variables
let a=1
var b=2//var is not bounded by scope 
const c=3
{
    const c=4
    var b =5
    let a=9
    console.log(c)//here c is 4 
    console.log(b)//5
    console.log(a)
}
console.log(c)//here c is 3
console.log(a)//1
console.log(b)//9 this become 9 because of modification under the socpe because it doeas not understand
              //scope ,under the scope modification should not come out of the scope else it will cause 
              // confusion


//confusion of developer
//clouser
//hoiesting
//function call example




