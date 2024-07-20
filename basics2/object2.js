const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)//acessing data from the array of objects
const User = {}

User.id = "123abc"
User.name = "Sammy"
User.isLoggedIn = false

console.log(User);
console.log(Object.keys(User));//it will retrun all the keys of of object
console.log(Object.values(User));//it will retrun all the values of of object
console.log(Object.entries(User));//it will retrun array of key and value for each pair
console.log(User.hasOwnProperty('isLoggedIn'));//retruns boolean it is used to if the key exist or not
//to check more funkction of object go to the browser and make object enter and check prototype
///desctructuring of object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor general acessing
const {courseInstructor,price} = course//in this case name is changed
const {courseInstructor: instructor,price:p} = course//in this case name is not changed
console.log(courseInstructor);
console.log(instructor);
console.log(price)
//_________api_____________
//keys and values both are expliclty defined as string in json 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//json formatter is used to understand json data
/*[
    {},
    {},
    {}
]*/