console.log("connected")

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const timer = document.getElementById("timer")

let count = 0
let intervalID

timer.textContent = count;

function incrementTimer() {
    count++;
    timer.textContent = count;
}

// startBtn.addEventListener("click", function(e) {

//     intervalID = setInterval(incrementTimer, 10)
// })


// stopBtn.addEventListener("click", function(e) {

//     clearInterval(intervalID)
// })


startBtn.addEventListener("click", function(e) {

    intervalID = setTimeout(incrementTimer, 10000) //10 sec before executed
})


stopBtn.addEventListener("click", function(e) {

    clearTimeout(intervalID) //stop before 10 sec
})