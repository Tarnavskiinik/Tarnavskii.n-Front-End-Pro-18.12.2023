const numberOne = prompt('Введите первое число');
const numberTwo = prompt('Введите второе число');

const firstNumber = Number(numberOne);
const secondNumber = Number(numberTwo)

const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;

alert(`${firstNumber} + ${secondNumber} = ${sum}\n${firstNumber} - ${secondNumber} = ${difference}\n${firstNumber} * ${secondNumber} = ${product}\n${firstNumber} / ${secondNumber} = ${quotient}`);
