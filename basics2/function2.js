//nested function 
//clouser child function can access parents variable
//function and expression
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


add()//important this will not give error and can run before declearing
function add(num){
    return num+1
}
add(8)
sub(8)//connot run before declearing
//__________________variable function_________________
const sub=function(num){
    return num-1
}
sub(5)
//________________arrow function____________
