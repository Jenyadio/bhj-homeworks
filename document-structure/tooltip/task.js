const phrases = document.querySelectorAll('.has-tooltip');

phrases.forEach(elem => {
    elem.insertAdjacentHTML('afterEnd', `<div class="tooltip">${elem.getAttribute('title')}</div>`);    

    elem.addEventListener('click', (event) => {
        event.preventDefault();
        let tooltip = elem.nextElementSibling;
        tooltip.style.left = `${elem.getBoundingClientRect().left}px` ;
        tooltip.classList.toggle('tooltip_active');
    });
});




/* document.addEventListener('click', (event) => {
    const tooltipActive = document.querySelector('.tooltip_active');
    if (tooltipActive) {
        tooltipActive.classList.remove('tooltip_active');
    };

    if (event.target.tagName === 'A') {
        event.target.nextElementSibling.classList.add('tooltip_active');
        event.target.nextElementSibling.innerHTML = event.target.title;
        const position = event.target.getBoundingClientRect();
        event.target.nextElementSibling.style.top = position.top + 20 + 'px';
        event.target.nextElementSibling.style.left = position.left + 'px';
    };
    event.preventDefault();
}); */