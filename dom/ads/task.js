const rotators = document.querySelectorAll('.rotator__case');

let i = 0;
let timer = setInterval(() => {
    rotators[i].classList.remove('rotator__case_active');
    i++;
    if (i === rotators.length) i = 0;
    rotators[i].style.color = rotators[i].dataset.color;
    rotators[i].classList.add('rotator__case_active');
}, rotators[i].dataset.speed);
