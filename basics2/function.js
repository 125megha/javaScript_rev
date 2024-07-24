//in java script user does not need to mention retrun type and data type of parameter
function add(num1,num2){//parameter 
    console.log(num1+num2)
}
add(1,3)//argument
//checking for argument 
function name2(username){
    if(username==undefined){
        console.log("please enter username")
        return
    }
    return `user name is ${username}`
}
name2();
console.log(name2("megha"))
//note undefined is asumed as false
function name3(username="megha"){//assigning parameter as defaut value
    if(username==undefined){
        console.log("please enter username")
        return
    }
    return `user name is ${username}`
}
let a=name3()
console.log(a);
//______________objects dealing with function______________
function priceSum(...num1){ 
    sum=0//rest operator
    for(let it of num1){//important 
     sum+=it
       }
    return sum
}
console.log(priceSum)//
function pricePrint(val1,val2,...val3){
    return val3;
}
console.log(pricePrint(1,2,3,4,5))//val1=1,val2=2,val3=[3,4,5]
const user={
    name:"megha",
    id:125
}
function details(obj){
    console.log(`${obj.name} and ${obj.id}`)//if there will be no id in object it will show undefined not error so some time you have to check if object consist of that ver or not

}
details(user)
const myarr=[1,2,3,4,5]
function secval(num){
    return num[1];
}
console.log(secval(myarr))
// variable boundedby scope 
//let is scope bounded ,can change 
//var is not scope bounded ,can change
//const is scope bounded,connot change
// by default is var
//scope in browser and scope in vscode



