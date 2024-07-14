///number and maths
//____________________________number___________________________
//explict defination of number or any datatype
const score1=100;
const score=new Number(100);//this is explict defination of number it comes with some bulid in function
console.log(score.toString())//in the string form
console.log(score.toString().length())//length of returned string
console.log(score.toFixed(2))//precision value of number till 2 digit after decimal
const score2=new Number(123.8966);
console.log(score2.toPrecision(3))//gives the precision after rounding off the number till3 digit from left side
score2=1223.123
console.log(score2.toPrecision(3))//it will give answer in exponetial form after 3 digit
const hundereds=1000000;
console.log(hundereds.toLocaleString());//in thecommercoal form by efault us standered
console.log(hundereds.toLocaleString('en-IN'))//in the indian standared
 //min nad max value in the number
 console.log(Number.MAX_VALUE);
 console.log(Number.MIN_VALUE);
 console.log(Number.MAX_SAFE_INTEGER)
 console.log(Number.MIN_SAFE_INTEGER)
//____________________maths___________________________
console.log(Maths)//maths is a pre defined object comes with many function
// print Math in browser develper console then u will geet all the function you can explore
//some commanly used function
console.log(Math.abs(-4))//wil ci=onvert into positive value
console.log(Math.round(4.6))//to round off
console.log(Math.ceil(4.2))//to give ceil value
console.log(Math.floor(4.6))//to give floor
console.log(Math.sqrt(36))//to give squre root value
console.log(Math.pow(2,3))//to give power
const arr=[1,2,4,7,22];
console.log(Math.min(arr))//to find lowest value among all
console.log(Math.min(1,2,3,4));
console.log(Math.random())//to give random between 0 and 1
//to convert it into greater than and equal to 1
console.log((Math.random()*10)+1);
//if i want to define the range of random number
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1))+min));
let randomInt = getRandomInt(1, 10);
console.log(randomInt2); // Random integer between 1 and 10 (inclusive)
let randomFloat = getRandomFloat(1.5, 5.5);
console.log(randomFloat); // Random float between 1.5 and 5.5 (inclusive of 1.5, exclusive of 5.5)