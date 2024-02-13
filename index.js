class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }
    
    setOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log('Власник повинен бути старше 18 років');
        }
    }
    
    ownerInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік виписку: ${this.year}, Номерний знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log('Інформація про власника:');
            console.log(this.owner.info());
        } else {
            console.log('Цей автомобіль не має власника');
        }
    }
}

let person = new Person('Іван', 30);
let secondPerson = new Person("Марія", 17);

let car = new Car('Toyota', 'Corolla', 2015, 'ВС1234АА');
car.setOwner(person);

let secondCar = new Car('Honda', 'Civic', 2020, 'ВС5678ВВ');
secondCar.setOwner(secondPerson);

console.log('Інформація про автомобіль 1:');
car.ownerInfo();
console.log();
console.log('Інформація про автомобіль 2:');
secondCar.ownerInfo();