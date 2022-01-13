
const interestCheck = document.querySelectorAll('.interest__check');
let parentElement
let childElement

interestCheck.forEach( elem => {
  
    elem.addEventListener('click', (event) => {
        parentElement = event.currentTarget.closest('.interest');
        childElement = parentElement.querySelectorAll('.interest__check');
        childElement.forEach((elem) => elem.checked = event.currentTarget.checked);
    });
});