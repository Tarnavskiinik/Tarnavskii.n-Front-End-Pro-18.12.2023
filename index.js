for (let num=20; num <= 30; num+=0.5) {
    console.log(num) 
  }


for(let dol = 10; dol <= 100; dol+= 10) 
console.log(`${dol}$ =  ${dol * 27}`)


let p = 70;
for(let i = 1; i < 100 ; i++){
    let n = i**2;
    if(p > n){
        console.log(n)
    }
 
}

let n = prompt('введите число от 1 до 10'); 
nextPrime:
for (let i = 2; i <= n ; i++){
    for(let j = 2; j < i; j++){
    if(i % j ==0) continue nextPrime;
}
console.log(i);
}

let number = prompt('Введите число , что бы проверить деление на 3: ')
if(number % 3 === 0 && number){
    alert('Число можно поделить на 3')
}else{
    alert('Число нельза поделить на 3');
}