class SmartPhones {
    constructor(color,brand,model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class ios extends SmartPhones {
    airDrop() {
        console.log('ios have a behavior AirDrop');
    }
}

class Android extends SmartPhones {
    splitscreen() {
        console.log('Android have a split screen');
    }
}

const iso = new ios('black','A','12 Pro Max');
const android = new android('white','B','Galaxy S21');

android.charging();//ouutput charging galaxy s21
android.splitscreen();//output android have a split screen

console.log(ios instanceof SmartPhones); //output : true
console.log(android instanceof SmartPhones);//output : false