
const { EventEmitter } = require('events');

class BirthdayEmitter extends EventEmitter {}

const birthdayEmitter = new BirthdayEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}`);
}

birthdayEmitter.on('birthday', birthdayEventListener);

birthdayEmitter.emit('birthday', 'John Doe');
