function arithmeticMean(arr){
    const numbers = arr.filter(item => !isNaN(item));
    if(numbers.length === 0){
        return 0;
    }
    const result = numbers.reduce((a , b) => a + b)
    return result / numbers.length
}
console.log(arithmeticMean(['wm', 'h', 'hi', 1, 3,4 ,5, 7, 8, 'end']));

function doMath(x, znak, y) {
    switch (znak) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        return x / y;
      case '%':
        return x % y;
      case '^':
        return Math.pow(x, y);
      default:
        return 'Невірний оператор';
    }
  }

  const x = parseFloat(prompt('Введіть перше число:'));
  const znak = prompt('Введіть математичний оператор (+, -, *, /, %, ^):');
  const y = parseFloat(prompt('Введіть друге число:'));
  const result2 = doMath(x, znak, y);
  console.log(result2);


function createArray(){
    const result = [];
    const lenght = prompt('Enter arr lenght');
   
    for(let i =0; i < lenght; i++){
      const secondLenght = prompt('Enter your');
      result[i] = []
      for(let j = 0; j < secondLenght; j++){
        result[i][j] = prompt('Enter num');
      }
     }
    return result
   }
  
   console.log(createArray())


function removeCharacters(string, deleteItems) {
    let result = string;

    for (let i = 0; i < deleteItems.length; i++) {
        const currentElement = deleteItems[i];
        result = result.split(currentElement).join('');
    }

    return result;
}

const inputString = prompt('Введите строку');
const deleteItems = prompt('Введите символ для удаления').split('');

if (inputString.includes(deleteItems.join(''))) {
    const result = removeCharacters(inputString, deleteItems);
    console.log(result);
} else {
    console.log('Введені символи для видалення не знайдені в рядку.');
}
