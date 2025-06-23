// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
//map is like object where keys are unique and in ordered way
const map = new Map()// declearing a map
map.set('IN', "India")// setting a map
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")// it will not set as IN jey is already present

// console.log(map);// getting the map in structure
for (const it of map) {
    // console.log(it);// it will print array of every key and value
}
//output [key , value] for every it
for (const [key, value] of map) {// here the destructuring of array to get seperate key and value 
    // console.log(key, ':-', value);
}
// key variable will hold key and value variable will hold value for every iteration
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
//this below code will not work in correct way
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }