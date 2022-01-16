const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');

function addTask() {
    if (input.value.trim !== ' ') {
        tasksList.insertAdjacentHTML('afterBegin', `
        <div class="task">
            <div class="task__title">
                ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
        input.value = ''
    };
};

input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

button.onclick = () => addTask();


document.addEventListener('click', function(event) {
    if(event.target.classList.contains('task__remove')) {
        event.target.parentElement.remove();
    };
});


