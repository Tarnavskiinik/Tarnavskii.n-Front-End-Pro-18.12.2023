const container = document.querySelector('.container')
const colorCode = document.querySelector('.color-code')


function colorUpdate(e){
    let rect = container.getBoundingClientRect();
    console.log(rect);
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;


    let red = Math.floor(x / rect.width * 255)
    let green = Math.floor(y / rect.height * 255);
    let blue = 100;

    let color = '#' + 
    ('0' + red.toString(16)).slice(-2)+ 
    ('0' + green.toString(16)).slice(-2)+
    ('0' + blue.toString(16)).slice(-2)
    console.log(color);
    container.style.backgroundColor = color;
    colorCode.innerHTML = color;
    container.innerText = color;
    colorCode.innerHTML = color;
    
}

container.addEventListener('click', colorUpdate);

