let resultConv = [];
for (let i = 10; i <= 20; i++) {
    let result = Math.pow(i, 2);
    resultConv.push(result);
}
console.log(resultConv);

for (let i = 7; i <= 7; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

let resultSum = 0;
for (let i = 1; i <= 15; i++) {
    resultSum += i;
}
console.log(resultSum);

let resultMult = 1;
for (let i = 15; i <= 35; i++) {
    resultMult *= i;
}
console.log(resultMult);

let sumArifm = 0;
for (let i = 1; i <= 500; i++) {
    sumArifm += i;
}
let resultArifm = sumArifm / 500;
console.log(resultArifm);

let sumPaired = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumPaired += i;
    }
}
console.log(sumPaired);

let multiples = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        multiples.push(i);
    }
}
console.log(multiples);

let numb = 50;
let resultDivis = [];
for (let i = 1; i <= numb; i++) {
    if (numb % i === 0) {
        resultDivis.push(i);
    }
}
console.log(resultDivis);

let paired = [];
let pairedSum = 0;
for (let i = 1; i <= numb; i++) {
    if (numb % i === 0 && i % 2 === 0) {
        paired.push(i);
        pairedSum += i;
    }
}
console.log(paired);
console.log(paired.length);
console.log(pairedSum);

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        multiplicationTable = i * j;
        console.log(`${i} * ${j} = ${multiplicationTable}`);
    }
}
