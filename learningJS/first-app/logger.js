
const EventEmitter = require('events');

var url = 'http://mylogger.io/log'; //sends an http request to url

class Logger extends EventEmitter { //logger class has all the functionality from event emitter
  log(message) { //when a function is inside a class, it is method
    //send an http request
    console.log(message); //both have scope in logger only
    //Raise an event
    this.emit('messageLogged', { id: 1, url: 'http://'});
  }
}

//module.exports.log = log; //object we are exporting only has log methods

module.exports = Logger; //exports logger class
