const carouselWrapIner = document.querySelector('.carousel-wrap_iner');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let count = 0;
const numberOfImages = 3;

next.addEventListener('click', () => {
    count += 730;
    if (count >= 730 * (numberOfImages - 1)) {
        next.style.display = 'none';
    } else if (count > 0) {
        prev.style.display = 'block';
    }
    carouselWrapIner.style.transform = `translateX(-${count}px)`;
});

prev.addEventListener('click', () => {
    count -= 730;
    if (count <= 0) {
        prev.style.display = 'none';
    } else if (count < 730 * (numberOfImages - 1)) {
        next.style.display = 'block';
    }
    carouselWrapIner.style.transform = `translateX(-${count}px)`;
});