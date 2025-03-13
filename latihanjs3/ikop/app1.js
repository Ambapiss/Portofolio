const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();

const makeCoffe = ({name}) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

    myEventEmitter.on('coffe-order', makeCoffe);
