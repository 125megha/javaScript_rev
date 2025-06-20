function User(name, age, isLoggedIn) {
  this.name = name;
  this.age = age;
  this.isLoggedIn = isLoggedIn;

  this.greet = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  };
}
const user1 = new User("Megha", 22, true);
const user2 = new User("Aisha", 25, false);

console.log(user1.greet()); // Hi, I'm Megha and I'm 22 years old.
console.log(user2.greet()); // Hi, I'm Aisha and I'm 25 years old.
///in modern javascript
class User {
  constructor(name, age, isLoggedIn) {
    this.name = name;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

const user3 = new User("Riya", 24, true);
console.log(user3.greet()); // Hello, I am Riya
