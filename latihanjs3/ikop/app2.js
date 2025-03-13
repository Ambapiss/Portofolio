const {EventEmitter} = require('events');
const  myEventEmitter  = require('process');

const makeCoffe = ({name}) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

myEventEmitter.on('coffe-order', makeCoffe);
myEventEmitter.emit('coffe-order', {name:Tubruk});