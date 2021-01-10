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
