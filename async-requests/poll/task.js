const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onload = function() {
    if (xhr.status != 200) {
        alert('Ошибка: ' + xhr.status);
        return;
    } let poll = JSON.parse(this.response);
    let { title, answers } = poll.data;
    pollTitle.innerHTML = `${title}`;
    for (let i = 0; i < answers.length; i++) {
        pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">${answers[i]}</button>`)
    };
    const pollAnswer = document.querySelectorAll('.poll__answer');
    pollAnswer.forEach(elem => {
        elem.addEventListener('click', () => {
            alert('Спасибо, Ваш голос засчитан!');
        });
    });
};