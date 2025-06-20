//___________________date____________________________
//date is a object in the javascript it calculate the milli second from the reference date jan 1 1970
//using date in complex way
let myDate=new Date();//type is object
//date format
console.log(myDate);//this will give date in the complex form
console.log(myDate.toString())// to convert the date into readble form
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
// the above one to local string is very interesting property you can pass different parameter
//1 st paremater is internationalization the customization
console.log(myDate.toLocaleString('default'));//got to the midle parenthesis and click ctrl +space to know properties you can add maore than one properties
/*respective output
Sun Jul 14 2024 10:42:52 GMT+0000 (Coordinated Universal Time)
Sun Jul 14 2024
2024-07-14T10:42:52.202Z
2024-07-14T10:42:52.202Z
7/14/2024
7/14/2024, 10:42:52 AM */

//get elements of date
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getMinutes())
console.log(myDate.getMonth())//zero base indexing
console.log(myDate.getFullYear())
console.log(myDate.getTime())// other functionss are also available
console.log(Date.now())//current date
//to convert date into second 
console.log(Math.floor(Date.now()/1000)) //now this is converted into second
//
let dayy=new Date(2023,0,23,5,3)//convert this into date //month in 0 base indexing
console.log(dayy.toLocaleString())//1/23/2023, 5:03:00 AM
dayy=new Date("01-14-2023")//mm-dd-yyyy format representation here month start from 1 base index
console.log(dayy.toLocaleDateString())
//time stamp



