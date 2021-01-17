
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on('connection', (socket) => {
  console.log('New connection...')
})

server.listen(3000);

console.log('Listening on port 3000');

/*

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listening
logger.on('messageLogged', (arg) => { //arrow function, replaces function(args)
  console.log('Listener called', arg);
})

logger.log('message');

/*

const fs = require('fs');

//var files = fs.readdirSync('./'); //all files and folders in current directory
//console.log(files);

//below is an asychronous method
fs.readdir('$', function(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});

/*
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);
//Template string -- ECMAScript 6
console.log(`Total Memory: ${totalMemory}`); //no need to concatenate
console.log(`Free Memory: ${freeMemory}`);
//node allows us to get information about the operating system on the server

/*

(function (exports, require, modeule, __filename, __dirname) {
  //node always wraps code inside the above function- module wrapper function
  //filename and dirname represent the path
})

//this is how we load modules
const path = require('path')
//first assumes that this is a built inspect../path implies that it is on the home computer
var pathObj = path.parse(__filename);

console.log(pathObj);


//console.log(__filename);
//console.log(__dirname);


/*

function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello('Mosh');

console.log(); //global object

setTimeout(); //call a function after a delay
clearTimeout();

setInterval(); // call a function after a given delay
clearInterval();

window.console.log() //object where all the globals are, implicit call to window

var message = '';
global.console.log() //also in the global object, but variables are not added to globals

var sayHello = function() {
  //functions are added to the global scope
  //it's better not to do this because then there always have to be new function names
}

window.sayHello();

//app.js is the main module

console.log(module); //module is not global, this prints out all the properties of the module

//creating a module- to access logger function
//load module

//use relative path to target module

const logger = require('./logger'); //store in constant because this can never change
console.log(logger);

logger.log('message');

//you can also export a single functions
log('message');

*/
