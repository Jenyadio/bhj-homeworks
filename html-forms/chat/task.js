const chatWidget = document.querySelector('.chat-widget');
const messagesAll = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');

let timer = 0;

chatWidget.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
    timer = setInterval(replyTimer, 30000);
});

function replyTimer() {
    let time = new Date().getHours() + ':' + new Date().getMinutes();
    messagesAll.innerHTML += `
        <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">
            Надеюсь, вы уже ушли?
        </div>
    </div>
    `;
    scroll();
}

function scroll() {
    const messagesScroll = document.querySelector('.chat-widget__messages-container');
    messagesScroll.scrollTop = messagesScroll.scrollHeight;
}

input.addEventListener('keydown', function(event) {
    clearInterval(timer)
    let time = new Date().getHours() + ':' + new Date().getMinutes();

    let robotMessages = [
        'Тебе тут не рады',
        'Ты плохой покупатель',
        'Ты мне не нравишься',
        'Мы тебе ничего не продадим',
        'Ты в черном списке',
        'Еще одно слово - и я за себя не отвечаю',
    ]

    let robotMessagesRandom = robotMessages[Math.floor(Math.random() * robotMessages.length)];

    if (input.value !== ' ' && event.code === 'Enter') {
        messagesAll.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${event.target.value}</div>
        </div>` 
        ;
        scroll();
        messagesAll.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${robotMessagesRandom}</div>
        </div>` 
        ;
        scroll();
    };
    timer = setInterval(replyTimer, 30000);
});