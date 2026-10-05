let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "purple"]

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is started!");
        started = true;

        levelUp();
    }
})
function levelUp() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor)
    console.log(gameseq);

    gameFlash(randBtn);
}

function checkAns(idx){

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML = `Game over ! <b>Your Score was :- ${level}</b> <br> Press any to start Again.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"; 
        }, 200);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

function gameFlash (btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash (btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 250);
}


let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}