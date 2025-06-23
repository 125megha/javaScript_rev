//for each is inbuild function of array
// it has multiple parameters one of the important is the each vlaue of the array
//syntax--->nameofarray.forEach(a call back function)
// simply you can write function inside foreach function 
// for each is iterative high order function
// parameters of the the call back function is 
//forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
// it can run even on any one arguments
// these argument are render automatically inside callback function by for each loop
// call back function will have no name
let arr =["apple", "banana","grapes","pineapple"]
arr.forEach(function(val){console.log(val)})
arr.forEach((val)=>{console.log(val)})// you can write callback function also

function print(val){
    console.log(val)
}
arr.forEach(print)// you just have to pass the reference




