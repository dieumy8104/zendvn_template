// slide
const slideImages = document.getElementsByClassName('section-slide-carousel-opacity')
const slides = document.querySelector('.section-slide-banner')
const next = document.querySelector('.section-slide-next')
const prev = document.querySelector('.section-slide-prev')

let index = 1;
var width;
 
function slideWidth() {
    width = slideImages[0].clientWidth;
}

slideWidth()
window.addEventListener('resize', slideWidth)
slides.style.transform = 'translateX(' + (-width * index) + 'px)';

next.addEventListener('click', slideNext)

function slideNext() {
    if (index >= slideImages.length - 1) {
        return
    };
    slides.style.transition = 'transform 0.4s ease-out';
    index++;
    slides.style.transform = 'translateX(' + (-width * index) + 'px)';
}
 
prev.addEventListener('click', slidePrev)

function slidePrev() {
    if (index <= 0) {
        return
    };
    slides.style.transition = 'transform 0.4s ease-out';
    index--;
    slides.style.transform = 'translateX(' + (-width * index) + 'px)';
}

slides.addEventListener('transitionend', function() {
    if (slideImages[index].id === 'section-slide-first') {
        slides.style.transition = 'none'
        index = slideImages.length - index;
        slides.style.transform = 'translateX(' + (-width * index) + 'px)';
    }
    if (slideImages[index].id === 'section-slide-last') {
        slides.style.transition = 'none'
        index = slideImages.length - 2;
        slides.style.transform = 'translateX(' + (-width * index) + 'px)';
    }
})
 
function autoSliding() {
    deleteInterval = setInterval(timer, 3000)
    function timer() {
        slideNext()
    }
}
autoSliding();
 
const container = document.querySelector('.section-slide-container')
container.addEventListener('mouseover', function() {
    clearInterval(deleteInterval)
})
container.addEventListener('mouseout', autoSliding)
// end slide