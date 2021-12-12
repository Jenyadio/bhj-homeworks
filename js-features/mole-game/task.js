
let dead = document.getElementById("dead");
let lost = document.getElementById("lost")
let deadNum = 0;
let lostNum = 0;

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById("hole" + i);
    hole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            deadNum++
            dead.textContent = deadNum;
            if (deadNum === 10) {
                endGame("Вы выиграли!");
            }  
        } else {
            lostNum++;
            lost.textContent = lostNum;
            if (lostNum === 5) {
                endGame("Вы проиграли!");
            }
        }
    }
}

function endGame(message) {
    deadNum = 0;
    lostNum = 0;
    dead.textContent = deadNum;
    lost.textContent = lostNum;
    alert(message);
}
