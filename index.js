class People{

    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}
class Apartment{
    constructor(){
        this.residents = [];
    }

    addResidents(people){
        this.residents.push(people)
    }
}

class House{
    constructor(maxApartments){
        this.apartments = []
        this.maxApartments = maxApartments
    }

    addApartments(apartments){
        if(this.apartments.length < this.maxApartments){
            this.apartments.push(apartments)
        }else{
            console.log("Досягнуто максимальну кількість квартир у будинку");
        }
    }
}


let person = new People('Максим' , 'Чоловік');
let secondPerson = new People('Анастасія' , 'Жінка');

let apartment = new Apartment();
let secondApartment = new Apartment();

apartment.addResidents(person)
secondApartment.addResidents(secondPerson)

let house = new House(2)

house.addApartments(apartment)
house.addApartments(secondApartment)

console.log(house.apartments);