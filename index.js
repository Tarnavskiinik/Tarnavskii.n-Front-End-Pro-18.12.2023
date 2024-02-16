class SuperMath {
    check(obj) {
        if (this.isValidOperator(obj.znak)) {
            console.log(`Вы хотите выполнить действие ${obj.znak} с числами ${obj.X} и ${obj.Y}?`);
            const answer = prompt("Введите 'да' или 'нет':");
            if (answer.toLowerCase() === 'да') {
                console.log(this.calculate(obj.X, obj.Y, obj.znak));
            } else {
                this.input();
            }
        } else {
            alert("Неверный оператор. Пожалуйста, введите один из следующих операторов: +, -, /, *, %.");
            this.input();
        }
    }

    input() {
        const X = parseFloat(prompt("Введите первое число:"));
        const Y = parseFloat(prompt("Введите второе число:"));
        const znak = prompt("Введите оператор (+, -, /, *, %):");
        const obj = { X, Y, znak };
        this.check(obj);
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
                return "Некорректный оператор";
        }
    }

    isValidOperator(znak) {
        const operators = ["+", "-", "/", "*", "%"];
        return operators.includes(znak);
    }
}



const math = new SuperMath();
math.input();