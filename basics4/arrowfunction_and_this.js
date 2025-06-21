const user={
    username:"megha",
    price:78,
    location:"bihar",
    greet:function(){
        console.log(`hey there its ${this.username}`)
        console.log(this)//returns reference of this object
    }
}
user.greet()
user.username="varsha"
user.greet();
console.log(this)///retrun empty object as it is running in node
//but you will print this in the browser it will retrun the object of the browser
//this doesnot work as a same way as with object
const chai=function(){
    let username="megha"
    console.log(`${this.username} wants chai`)
}
//this is arraow function  
const coffee =()=>{
  let username="megha"
    console.log(`${this.username} wants chai`)  
}
chai()
coffee()
//both above function this.username will not work as expected

// explict return arrow function
const add=(num1,num2)=>{
return num1+num2
}
add(1,2)
//implict return arrow function
//const multiply=(num1,num2)=>num1*num2  //no need to write curly braces and return if one line operation
// can be 
const multiply=(num1,num2)=>(num1*num2)
multiply(6,5)
//in immplicit retrun if you want to return object
const hello=()=>({name:"megha",age :21})// without parenthesis it will return undefined
hello();

