for (let num = 20; num <= 30; num += 0.5) {
    console.log(num);
}

for (let dol = 10; dol <= 100; dol += 10) {
    console.log(`${dol}$ = ${dol * 27} грн`);
}
let numN = prompt('Введіть число N: ');
for (let i = 1; i <= 100; i++) {
    let square = i ** 2;
    if (square <= numN) {
        console.log(i);
    }
}

let integer = prompt('Введіть ціле число: ');

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= integer; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}


let numInteger = prompt('Введіть ціле число: ');

function isPowerOfThree(num) {
    while (num > 1) {
        if (num % 3 !== 0) {
            return false;
        }
        num /= 3;
    }
    return num === 1;
}

if (isPowerOfThree(numInteger)) {
    console.log('Число є ступенем трійки');
} else {
    console.log('Число не є ступенем трійки');
}