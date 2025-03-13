const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('gagal membaca berkas');
    }
    console.log(data);
};
fs.readFile('todo.txt','UTF-8', fileReadCallback);