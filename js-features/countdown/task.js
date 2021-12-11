let timer = document.getElementById("timer");

/* let countdown = function() {
    if (timer.textContent == 0) {
        alert ("Вы победили в конкурсе!");
        clearInterval(clearId);
    } else {
        timer.textContent -= 1;
    }
}

let clearId = setInterval(countdown, 1000); */

let i = +timer.textContent; 

let countdown = function() {
    if (i === 0) {
        alert ("Вы победили в конкурсе!");
        clearInterval(clearId);
    } else {
        i -= 1;
        if (i < 10) {
            timer.textContent = `00:00:0${i}`;
        } else {
            timer.textContent = `00:00:${i}`;
        }
    }
}

let clearId = setInterval(countdown, 1000);