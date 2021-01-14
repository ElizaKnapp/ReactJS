
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

//let, const
const age = 30; //can't change it
let score = 0; //can change it

//String, Numbers, Boolean, null, undefined
const name = "John";
const num = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //auto undefined
console.log(typeof x); //null is weird

//Concatenation
console.log("My name is " + name + " and I am " + age);

const s = "hello";
console.log(s.length);
console.log(s.toUpperCase);
console.log(s.substring(0, 5));
console.log(s.split(''));

//Arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ["apples", "oranges", "pears"];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries'); //adds strawberries to beginning
fruits.pop(); //take out last
console.log(fruits);
console.log(fruits.indexOf('oranges'));
console.log(Array.isArray(fruits)); //checks if something is an array

//object literals
const person = {
  firstName: 'John',
  lastName: "Doe",
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

person.email = 'johndoe@person';
console.log(person.email);

//Array of object literals
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];

console.log(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loops are the same as java
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}
//while
let i = 0;
while (i < 10) {
  console.log("hello" + i);
  i++;
}
//for of
for (let todo of todos) {
  console.log(todo.text);
}

//forEach, map, filter
todos.forEach(function(todo) {
  console.log(todo.text);
});

const todoText = todos.map(function(todo) {
  return todo.text; //returns each one in an array
})

//returns full todos that are completed
console.log(todoText);
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
})
console.log(todoCompleted);

//conditionals
const hk = 10;
if (hk == 10) { //matches info, triple equals === matches data type
  console.log('x is 19')
} else {
  console.log('x is not 10')
}

//ternary operator
const q = 10;
const color = q > 10 ? 'red' : 'blue'; //? is then, : is else
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}

//functions
function addNums(num1 = 1, num2 = 1) { //sets default parameters
  console.log(num1 + num2);
  //or
  return num1 + num2;
}

addNums(5, 4);

//or do this
const addNumsEasy = (num1 = 1, num2 = 1) => num1 + num2; //returns the sm
console.log(addNumsEasy(3, 4));

//constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

//instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1);
