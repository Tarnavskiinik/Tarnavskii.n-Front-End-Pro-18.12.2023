class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let totalPrice = this.size.price + this.stuffing.price;
        this.toppings.forEach(topping => {
            totalPrice += topping.price;
        });
        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(topping => {
            totalCalories += topping.calories;
        });
        return totalCalories;
    }
}

const smalSize = { price: 50, calories: 20 };
const largeSize = { price: 100, calories: 40 };
const cheese = { price: 10, calories: 20 };
const salad = { price: 20, calories: 5 };
const potato = { price: 15, calories: 10 };
const spice = { price: 15, calories: 0 };
const mayo = { price: 20, calories: 5 };

const hamburger = new Hamburger(smalSize, cheese);
hamburger.addTopping(mayo);
console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());
hamburger.addTopping(spice);
console.log(hamburger.calculatePrice());