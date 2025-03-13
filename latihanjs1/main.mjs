class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}     

//membuat instance dari person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 35);


console.log(person1) = new Person('Alice',30);
console.log(person2) = new Person('Bob',25);

person1.eat(); //output alice is eating
person2.eat(); //output bobo is eating