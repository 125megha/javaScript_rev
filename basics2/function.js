//in java script user does not need to mention retrun type and data type of parameter
function add(num1,num2){//parameter 
    console.log(num1+num2)
}
add(1,3)//argument
//checking for argument 
function name(username){
    if(username==undefined){
        console.log("please enter username")
    }
    return `user name is ${username}`
}
name();
