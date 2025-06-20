//_____________________Objects____________________________
//there are two ways of declearing object
//1-->liter--these are not singleton
//2-->constructor--these objects are singleton
/// object.create we will talk baout this later
///Literal
const jsUser={}//empty object
const emp={name:"megha",age:18,location:"bhagalpur",email:"meghaverma@gmail.com",isloggedin:true,project:["a","b","c"]}
//accessing
console.log(emp.name)
console.log(emp["name"])// key should be in string for accsess
///note if the key in object is explictly is written in the double or single quotation then it is not possible to access by dot operator
///you can only access using square bracket
//use  symbol with object
const mysymbol=Symbol("key1")//decleration of symbol 
//usin symbol as a key
const emp2={name:"megha",age:18,location:"bhagalpur",email:"meghaverma@gmail.com",isloggedin:true,project:["a","b","c"],[mysymbol]:"2106125"}
//accessing value where key is a symbol
console.log(emp2[mysymbol])//only way no need to quotation
//chanhing the key value
emp["name"]="varsha"
emp2.name="varsha"
//freedging the values of object
Object.freeze(emp2)//it will not not give error if you will try to change but it will not change
emp2.name="MEGHA"
console.log(emp2.name)//output varsha not changed
//adding new parameter and introducing funtion in object
emp.fun=function(){ //dont add const let anything it will cause redecleration
    console.log(`hello ${this.name}`)
}
console.log(emp.fun)//function is not executed only referece is returned
console.log(emp.fun())//function is executed
//note dot is mostly is used for accessing
//____________________constructor is used to create object________________
//singleton
const user= new Object()
console.log(user)//empty object
user.id="125"
user.fullname={first_name:"megha",last_name:"verma"}//nesting of object
user.age=18
user.isloggedin=true
console.log(user.fullname.last_name)
//you can do multiple nesting
const level1={
    level2:{level3:{level4:"lovelove"}}
}
console.log(level1.level2.level3.level4)//nesting of object
//optional channing 
console.log(level1.level2?.level3.level4)//check if level2 is exist or not 
//combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj3 = { obj1, obj2 }//two object inside obj3 it retruns object
const obj7 = Object.assign({}, obj1, obj2, obj4)//it retruns object with concatinated value curly braces is optional as it is a ggod practice
//you can add as manny object 
//note if you will not give parenthesis then concatination is done at the Obj1
//also then obj1 and obj7 is equal(===)
console.log(obj7)
const obj5= {...obj1, ...obj2}//spread operator 
console.log(obj5);
 
