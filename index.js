const images = Array.from(document.getElementsByClassName('image'))
const countersElements = Array.from(document.getElementsByClassName('count'))
let counters = [];
//дает стартовое значение счетчиков 
images.forEach((e, index )=> {
    counters.push(Math.ceil(Math.random() * 13))
})
// Показывает значение счетчиков , меняет ДОМ
images.forEach((e, index )=> {
    countersElements[index].innerHTML = counters[index];
})
// иннициализация закончилась
images.forEach(imgIterator)

function imgIterator(img, index){
    img.addEventListener('click', () =>{
        addCounter(index)
    })
}

function addCounter(index){
    counters[index]++
    countersElements[index].innerHTML = counters[index];
}