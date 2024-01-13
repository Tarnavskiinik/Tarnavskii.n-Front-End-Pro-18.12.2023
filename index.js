const elem = prompt('Введіть елементи масиву через кому');
const arr = elem.split(',');
console.log(arr);

const sortedArr = arr.slice().sort((a, b) => a - b);
console.log(sortedArr);

sortedArr.splice(1, 3);
console.log(sortedArr);