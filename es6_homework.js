//import
import { age } from "./export.js";
//import tests
console.log(age(1995, 2023));
console.log("test");

//in-line arrow function
const power = (x = 1, y = 1) => Math.pow(x, y);
//arrow function tests
console.log(power(2, 3));
console.log(power());

//object
const person1 = {
  name: "Bill",
  userAge: 87,
  location: "Cardiff",
  child: {
    name: "Mary",
    userAge: 55,
    location: "Swansea",
    grandChild: {
      name: "Tim",
      userAge: 23,
      location: "London",
    },
  },
};

//object destructuring
const {
  name = "user",
  userAge = 0,
  location = "unknown",
} = person1.child.grandChild;

console.log(name, userAge, location);

//array
const pets = ["cat", "dog", "hamster"];
//array destructuring
const [pet1, pet2, pet3] = pets;
console.log(pet1, pet2, pet3);

//spread
const teamInfo1 = {
  wins: 9,
  losses: 4,
};

const teamInfo2 = {
  leaguePosition: 5,
  budget: 10000,
  ...teamInfo1,
};

console.log(teamInfo2);

//rest
const multiplyByFive = (...args) =>
  args.forEach((element) => console.log(element * 5));

multiplyByFive(1, 2, 3, 4, 5);

//add a function with the object method shorthand
const func = {
  square(x) {
    return x * x;
  },
};

console.log(func.square(2));
