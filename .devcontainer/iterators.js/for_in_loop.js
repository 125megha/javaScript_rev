const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// this is how to iterate objects
// it will give key of objects
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]
// it will print index os array only
for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// will not work as map is not iterable
// for (const key in map) {
//     console.log(key);
// }