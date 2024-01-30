function sum (value){
    console.log(value);
    function sumClosure(num){
        value = value + num
        return value
    }
    return sumClosure
}

const calculateSum = sum(3);
console.log(calculateSum(5));
console.log(calculateSum(20));


