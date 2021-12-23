const sliderPrev = document.querySelector('.slider__arrow_prev');
const sliderNext = document.querySelector('.slider__arrow_next');
const slides = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));

let index = 0;

function changeSlide(index) {
    const activeSlide = document.querySelector('.slider').querySelector('.slider__item_active');
    if (activeSlide) {
        activeSlide.classList.remove('slider__item_active'); 
    };
    slides[index].classList.add('slider__item_active');
};

function changeDot(index) {
    for (const dot of dots) {
        dot.classList.remove('slider__dot_active');
    };
    dots[index].classList.add('slider__dot_active');
};

function changeSlideAndDot(index) {
    changeSlide(index);
    changeDot(index);
};

sliderNext.onclick = function() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlideAndDot(index);
};

sliderPrev.onclick = function() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlideAndDot(index);
};

dots.forEach((item, dotIndex) => {
    item.onclick = () => {
        index = dotIndex;
        changeSlideAndDot(index);
    };
});