const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

const positiveNum = arr.filter(num => num > 0)
const sum = positiveNum.reduce((a , b) => a + b)

console.log(positiveNum.length);
console.log(sum);

min = arr[0];
max = min;
for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max){
         max = arr[i];
    }
    else if (arr[i] < min){
        min = arr[i];
    }
}
console.log(max, arr.indexOf(max));

console.log(min , arr.indexOf(min));

const negatNum = arr.filter(num => num < 0);

console.log(negatNum);

const unpaNum = positiveNum.filter(num => num % 2 !== 0)
const pairedNum = positiveNum.filter(num => num % 2 ===0)

console.log(unpaNum);
console.log(pairedNum);
console.log(unpaNum.length);
console.log(pairedNum.length);

const sumPairedNum = pairedNum.reduce((a, b) => a + b)
console.log(sumPairedNum);
const sumUnpaNum = unpaNum.reduce((a, b) => a + b)
console.log(sumUnpaNum);

const mult = positiveNum.reduce((a, b) => a * b)
console.log(mult);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
        arr[i] = 0;
    }
}

console.log(arr);