const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();

const makeCoffe = ({name}) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({price}) => {
    console.log(`Bill sebesaar ${price} telah dibuat!`);
}

myEventEmitter.on('coffe-order', makeCoffe);
myEventEmitter.on('coffe-order', makeBill);

myEventEmitter.emit('coffe-order',  {name: 'Tubruk', price:
    15000 });