//_______________array_________________________
//collection of multipe
//multiple datatype even you can put array inside the array 
//dynamic size
//square bracket to initialize
//zero base indexing
//shallow copy whose property share the same reference point 
//deep copy whose properties does not share the same reference point 
//copy operation in the javascript array do shallow copy
//can be access by index arr_name[index];
//methods
// array decleration 
const arr1=[1,2,3,5,5];
const arr2=new Array(1,2,3,45,6)
console.log(arr2)//printing array 
console.log(arr1[1])//printing array element
arr1.push(10)//at the end 
arr1.pop()//removing from end
arr1.unshift(2)//shifting from left and add 2
arr2.shift()//shift from right and add 5 chatgpt says no parameter allowed always remove 1st element
arr1.includes(7)//boolean result
console.log(arr1.indexOf(5));//retruns index
//working on both array
console.log(arr1.join(3))//retrurn in the string format joining all the elements comma remove if you will give some parameter then seperated by the parameter 
console.log(arr1)
// important 
//slice.splice
//Returns a shallow copy of a portion of the array
//Does NOT modify the original array
//End index is not included
console.log(arr2.slice(1,3))// it return the elements of array from given range exclude the right range 
//Removes, replaces, or adds items in the array
//Modifies the original array
//Returns the removed items
console.log(arr2.splice(1,3))//it modifies the original array remove the given rage from the array and return the removed part includes the range
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//infinity menas all the level of nesting
console.log(real_another_array);
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting we wil learn about this later
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));




