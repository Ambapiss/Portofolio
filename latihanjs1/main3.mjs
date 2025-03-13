class CoffeMachine {
    constructor(wateramount) {
        this.wateramount = wateramount;
        this.temperature = 90;
    }
    set temperature(temperature) {
        console.log('you are not allowed to change the temperature');
    }
get temperature(){
return this.temperature;
        }   
    }

    const coffe = new CoffeMachine(10);
    console.log('sebelum diubah:', coffe.temperature);
    coffe.temperature = 100;
    console.log('setelah diubah:', coffe.temperature);

