// prints into console in inspect mode
const timeHTML = document.querySelector('h2');

let seconds = 0;
let minutes = 3;
let intervaltime = 1000;


function Reset() {
    seconds = 0;
    minutes = 0;
    timeHTML.innerHTML = minutes + ":0" + seconds;
}

function Restart() {
    seconds = 0;
    minutes = 3
    if (seconds >= 60) {
        minutes = Math.round(minutes + seconds / 60);
        seconds = seconds % 60;
    }

    timeHTML.innerHTML = minutes + ":0" + seconds;
    Stop();

}


if (seconds >= 60) {
    minutes = Math.round(minutes + seconds / 60);
    seconds = seconds % 60;
}
timeHTML.innerHTML = "00:0" + seconds;

timeHTML.innerHTML = minutes + ":" + seconds;
if (seconds < 10) {
    timeHTML.innerHTML = minutes + ":0" + seconds;
}

var count;

function Start() {
    count = setInterval(() => {

        if (seconds > 0 || minutes > 0) {
            seconds--;
        }

        if (seconds == -1) {
            minutes--;
            seconds = 59;
        }

        timeHTML.innerHTML = minutes + ":" + seconds;
        if (seconds < 10) {
            timeHTML.innerHTML = minutes + ":0" + seconds;
        }

    }, intervaltime)

}

function Stop() {
    clearInterval(count);
}

