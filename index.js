const userInput = document.getElementById('input')
const btn = document.getElementById('button')


btn.addEventListener('click' , () => {
    let inputValue = userInput.value.trim()
    console.log(inputValue);
    const value = 'http://'
    if(!inputValue.includes('http:') && !inputValue.includes('https:')){
        userInput.value = value + userInput.value
    }else{
        window.open(inputValue, '_blank')
    }
})