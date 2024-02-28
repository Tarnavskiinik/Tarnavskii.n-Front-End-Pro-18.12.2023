let input = document.querySelector('.input')
let div = document.querySelector('.block')

let handleMouse = function(event){
    if(event.type === 'focus'){
        div.style.display = 'block'
    }else if(event.type === 'blur'){
        div.style.display = 'none'
    }
}

input.addEventListener('focus', handleMouse);
input.addEventListener('blur', handleMouse);