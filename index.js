let images = document.getElementsByClassName('image')
let outputNum = Math.floor(Math.random() * images.length);
let outputImage = images[outputNum]
outputImage.style.display = 'block'; 
