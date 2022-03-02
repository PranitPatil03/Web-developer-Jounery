const events = require('events')

const eventEmitter=new events.EventEmitter();

const eventHandler=function(){
    console.log("I hear something")
}

eventEmitter.on('sound', eventHandler);

eventEmitter.emit('sound')