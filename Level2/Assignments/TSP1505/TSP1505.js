console.log("connected");
const readlineSync = require("readline-sync");

let playerName = ["Mario", "Luigi"];
let namePicked = readlineSync.keyInSelect(playerName);
let playerStatus = ["Powered Up", "Big", "Small", "Dead"];

class Player {
    constructor(namePicked) {
            this.name = namePicked;
            this.totalCoins = 0;
            this.status = playerStatus[2];
        }
        ////////////////////////////////Functions////////////////////////////////

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.hasStar === true) {
            console.log("The star protected you!");
            this.hasStar = false;
        }

        if (this.status === "Powered Up") {
            this.status = playerStatus[1];
        } else if (this.status === "Big") {
            this.status = playerStatus[2];
        } else if (this.status === "Small") {
            this.status = playerStatus[3];
            console.log(`Sorry ${this.name} but you are dead!`)
        }
    }

    gotPowerUp() {
        if (this.status === "Small") {
            this.status = playerStatus[1];
            console.log(`You are now Big ${this.name}!`);
        } else if (this.status === "Big") {
            this.status = playerStatus[0];
            console.log(`You are now Powered Up ${this.name}!`);
        } else if (this.status === "Powered Up") {
            this.hasStar = true;
            console.log("You have a star!");
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        console.log(
            `\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`
        );
        if (this.hasStar === true) {
            console.log("The star protected you!\n");
        } else if (this.status === "Powered Up") {
            console.log(`You are now Powered Up ${this.name}!\n`);
        } else if (this.status === "Big") {
            console.log(`You are now Big ${this.name}!\n`);
        } else if (this.status === "Small") {
            console.log(`You are now Small ${this.name}.\n`);
        }
    }
}

////////////////////////////////Game Logic//////////////////////////////

let count = 0;

const gameStart = () => {
    const player = new Player();
    player.setName(playerName[namePicked]);
    const gameInterval = setInterval(() => {
        let gameLive = true;
        let num = 3;
        let randomNumber = Math.floor(Math.random() * num);
        if (randomNumber === 0) {
            console.log(`You got hit`)
            player.gotHit();
            count++;
            player.print();
        } else if (randomNumber === 1) {
            console.log(`Power Up!`)
            player.gotPowerUp();
            count++;
            player.print();
        } else if (randomNumber === 2) {
            console.log(`You received a coin!`)
            player.addCoin();
            count++;
            player.print();
        }
        if (player.status === "Dead") {
            console.log(`You survived ${count} turns`)
            clearInterval(gameInterval);
            gameLive = false;
            player.print();
        }

        // player.print();
        // console.log(randomNumber);
    }, 500);
};

gameStart();