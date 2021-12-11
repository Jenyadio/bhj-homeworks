let counter = document.getElementById("clicker__counter");
let counterNum = +counter.textContent;
let cookie = document.getElementById("cookie");


function changeCookie() {
    counterNum++;
    if (counterNum % 2 !== 0) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
    counter.textContent = counterNum;
}

cookie.onclick = changeCookie;