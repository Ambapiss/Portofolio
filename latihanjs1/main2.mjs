class CoffeMachine {
    constructor(wateramount) {
        this.wateramount = wateramount;
        this.temperature = 90;
    }
    makeCoffe() {
        console.log('membuat kopi dengan suhu', this.temperature);
    }
}

const coffe = new CoffeMachine(100);
coffe.temperature = 60;

coffe.makeCoffe(); //output membuat kopi dengan suhu 60