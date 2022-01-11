console.log("connected");

////////////////////////////////Required


////////////////////////////////Variables

let clickCount = 0;
sessionStorage.setItem('clickCount', clickCount);
clickCount = sessionStorage.getItem('clickCount');

if (localStorage.getItem('highScore') === 'undefined') {
    localStorage.setItem('highScore', 0);
}

localHighScore = localStorage.getItem('highScore');


let localHighScoreDOM = document.getElementById('highScore');
let playerScoreDOM = document.getElementById('playerScore');
let clicksDOM = document.getElementById('clicks');

localHighScoreDOM.textContent = "High Score: " + localHighScore;

////////////////////////////////Functions


function startGame() {

    function countRed() {
        console.log("RED")
        document.body.style.backgroundColor = "red";
    }

    function countYellow() {
        console.log("YELLOW")
        document.body.style.backgroundColor = "yellow";
    }

    function countGreen() {
        console.log("GREEN")
        document.body.style.backgroundColor = "green";
        document.addEventListener('mousedown', clickCounter)

    }

    function countWhite() {
        console.log("WHITE")
        document.body.style.backgroundColor = "white";
        document.removeEventListener('mousedown', clickCounter);
        playerScoreDOM.textContent = "Player Score: " + clickCount;
        if (clickCount > localHighScore) {
            let newScore = clickCount;
            localStorage.setItem('highScore', newScore);
            let localHighScore = localStorage.getItem('highScore');
            localHighScoreDOM.style.color = "green";
            localHighScoreDOM.textContent = "High Score: " + localHighScore;
        } else {
            localHighScoreDOM.style.color = "red";
        }

    }

    function countDown() {
        setTimeout(countRed, 0);
        setTimeout(countYellow, 1000);
        setTimeout(countGreen, 2000);
        setTimeout(countWhite, 13000);
    }

    function clickCounter() {

        clickCount = ++clickCount;
        console.log("count: " + clickCount);
        clicksDOM.textContent = "Clicks: " + clickCount;
        return clickCount;
    }

    countDown();
}


startGame();