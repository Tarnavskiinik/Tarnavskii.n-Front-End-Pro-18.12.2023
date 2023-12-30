const mathAction = prompt('add, sub, mult, div');
const numOne = Number(prompt('Enter first number'))
const numTwo = Number(prompt('Enter second number'))


if(mathAction === 'add'){
    alert(numOne + '+' + numTwo + '=' + (numOne + numTwo))
} else if(mathAction === 'sub'){
    alert(numOne + '-' + numTwo + '=' + (numOne - numTwo))
}else if(mathAction === 'mult'){
    alert(numOne + '*' + numTwo + '=' + (numOne * numTwo))
}else if(mathAction === 'div'){
    alert(numOne + '/' + numTwo + '=' + (numOne / numTwo))
}else{
    console.log('Invalid math operation')
}

