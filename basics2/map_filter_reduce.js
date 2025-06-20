//filter non mutable
const numbers = [10, 25, 30, 45];

// Get numbers greater than 20
const filtered = numbers.filter(num => num > 20);

console.log(filtered);    // [25, 30, 45]
console.log(numbers);     // [10, 25, 30, 45] (unchanged)
//map  non mutable
const numbers2 = [1, 2, 3, 4];

// Multiply each number by 2
const doubled = numbers2.map(num => num * 2);

console.log(doubled);     // [2, 4, 6, 8]
console.log(numbers);     // [1, 2, 3, 4] (unchanged)

//reduce
//array.reduce((accumulator, currentValue) => {}, initialValue);
//accumulator: carries the running result.
//currentValue: current item being processed.
//initialValue: starting value of the accumulator (here it's 0).
const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15


