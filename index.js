let input = document.querySelector('.input')
let div = document.querySelector('.block')

let handleMouse = function(event){
    if(event.type === 'mouseover'){
        div.style.display = 'block'
    }else if(event.type === 'mouseout'){
        div.style.display = 'none'
    }
}

input.addEventListener('mouseover', handleMouse);
input.addEventListener('mouseout', handleMouse);