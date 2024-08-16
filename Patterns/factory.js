/*
4. Factory Pattern
The Factory Pattern is a creational design pattern that provides a way to create objects without specifying the exact class of the object that will be created. This pattern is useful for managing and maintaining a group of similar objects.
*/

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class CarFactory {
    createCar(make, model) {
        return new Car(make, model);
    }
}

const factory = new CarFactory();
const myCar = factory.createCar('Toyota', 'Corolla');

console.log(myCar); // Car { make: 'Toyota', model: 'Corolla' }
