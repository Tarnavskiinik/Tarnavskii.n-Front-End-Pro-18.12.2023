class SuperMath {
    input() {
        const X = parseFloat(prompt("Введите число X:"));
        const Y = parseFloat(prompt("Введите число Y:"));
        let znak = prompt("Введите оператор (+, -, /, *, %):");
        if(znak){
            console.log(this.calculate(X, Y, znak));
        } else{
            alert("Вы не ввели оператор");
            this.input()
        }
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case "+":
                return X + Y;
            case "-":
                return X - Y;
            case "/":
                return X / Y;
            case "*":
                return X * Y;
            case "%":
                return X % Y;
            default:
                alert("Неверный оператор. Пожалуйста, введите один из следующих операторов: +, -, /, *, %.");
                return this.input();
        }
    }
}

const p = new SuperMath();
p.input();
