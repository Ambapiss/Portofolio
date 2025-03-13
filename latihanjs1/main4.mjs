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
class Android extends SmartPhones {
    constructor(color,brand,model,device) {
    super(color,brand,model);
    this.device = device;
    }
    charging() {
        super.charging();
        console.log(`android ${this.model} with fast charger`);
    }
    splitscreen() {
        console.log('android have a split screen');
    }
}
const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

android.charging();

/** 
 * output:
 * Charging Galaxy S21
 * Charging Galaxy S21 with fast charging
*/