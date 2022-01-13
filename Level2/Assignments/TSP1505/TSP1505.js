console.log("connected");

class Player {
    constructor(name, totalCoins, status, hasStar) {
            this.name = name;
            this.totalCoins = totalCoins;
            this.status = status;
            this.hasStar = hasStar;
        }
        ////////////////////////////////Functions////////////////////////////////
}



let playerName;



function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

function setName() {
    playerName = randomNumber(2);

    if (playerName < 1) {
        playerName = "Mario"
    } else playerName = "Luigi"
    return (playerName);
}

// namePicked();

// function setName() {
//     Player.name = namePicked();
//     return Player.name;
// }

setName();

function addCoin(coins) {
    coins += 1
    return coins
}

function print() {

}

const player = new Player(playerName, 0, "alive", false);
console.log("Name: " + player.name + "\nStatus: " + player.status + "\nTotal Coins: " + player.totalCoins);