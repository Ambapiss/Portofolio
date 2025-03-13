class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}


const myCar = new Vehicle("Toyota", "Camry", 2022);
console.log(`Brand: ${myCar.brand}`);
console.log(`model: ${myCar.model}`);
console.log(`year: ${myCar.year} `); 
