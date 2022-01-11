console.log("Colossal Adventure Started");
console.log("");

////////////////////////////////Variables////////////////////////////////
const readlineSync = require("readline-sync");

let player = createPlayer();
let isAlive = true;
let moves = 0;
let enemiesDefeated = 0;
let typeEnemy = [{
        name: "Death Demon",
        hitPoints: 200,
        item: "Diamond",
    },
    {
        name: "Dragonbear",
        hitPoints: 100,
        item: "Ruby",
    },
    {
        name: "Lionsnake",
        hitPoints: 50,
        item: "Silver",
    },
    {
        name: "Snow Badger",
        hitPoints: 125,
        item: "Gold",
    },
    {
        name: "Mountain Cobra",
        hitPoints: 150,
        item: "Tanzanite",
    },
    {
        name: "Bald Beagle",
        hitPoints: 175,
        item: "Tourmaline",
    },
];
let fightOptions = ["(R)un", "(F)ight"];

////////////////////////////////Start////////////////////////////////
console.log(
    "Welcome adventurer!  The world is full of strange creatures. \nIt is your mission to take out as many as possible. "
);

const name = readlineSync.question("What is your name, adventurer? \n");
console.log("");
console.log(
    `\nWelcome ${name}!  You will enter 'w' to move forward.  There is a chance you might run into an enemy. \nYou can choose to attack or run.  If you choose to run, you might get attacked from behind and have to battle!\nAt anytime you can enter 'p' to get your player status.\n`
);
console.log("");

function startGame() {
    CreatePlayer();
}

//////////////////////////////////Functions////////////////////////////////
function randomInt(num) {
    let randomChoice = Math.floor(Math.random() * num);
    console.log(randomChoice);
    return randomChoice;
}

function getRandomAttack(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function CreatePlayer() {
    player = {
        name: name,
        hitPoints: 1000,
        playerItems: [],
    };
    return player;
}

function CreateEnemy() {
    let enemy = typeEnemy[randomInt(typeEnemy.length)];
    return enemy;
}

////////////////////////////////BattleLogic////////////////////////////////
function battle() {
    let newEnemy = CreateEnemy();
    let fight = true;
    console.log(`You ran into a ${newEnemy.name}`);
    let enemyHP = newEnemy.hitPoints;

    while (fight) {
        let fightEnemy = readlineSync.keyIn(fightOptions, "(F)ight or (R)un? ");
        //fight
        if (fightEnemy === "f") {
            console.log("");
            console.log(player.name + " hit points: " + playerHitpoints);
            console.log(newEnemy.name + " hit points: " + enemyHP);

            let attackSequence = true;

            while (attackSequence) {
                let playerAttack = getRandomAttack(20, 30);
                let enemyAttack = getRandomAttack(10, 20);

                enemyHP = enemyHP - playerAttack;

                console.log(
                    `\n${player.name} attacks! ${newEnemy.name} was dealt ${playerAttack} damage. ${newEnemy.name}: ${enemyHP}\n`
                );

                if (enemyHP <= 0) {
                    console.log(`You have defeated the ${newEnemy.name}!`);
                    let bonusHP = Math.floor(
                        (getRandomAttack(3, 5) / 100) * playerHitpoints
                    );
                    console.log(
                        `You have received a bonus item: ${newEnemy.item}\nHP boost of ${bonusHP}\n`
                    );
                    playerHitpoints = bonusHP + playerHitpoints;
                    enemiesDefeated = enemiesDefeated + 1;
                    player.playerItems.push(newEnemy.item); //pushing item to player
                    if (enemiesDefeated > 20) {
                        console.log("You have successfully eliminated all the enemies!");
                        console.log("Here are your final stats");
                        status();
                        process.exit(0);
                    }
                    fight = false;
                    attackSequence = false;
                }

                if (enemyHP > 0) {
                    playerHitpoints = playerHitpoints - enemyAttack;
                    console.log(
                        `${newEnemy.name} strikes! ${player.name} was dealt ${enemyAttack} damage. ${player.name}: ${playerHitpoints}`
                    );
                }

                if (playerHitpoints <= 0) {
                    console.log("You have been defeated.  Here are your final stats: ");
                    status();
                    process.exit(0);
                }
            }
        }

        //run

        if (fightEnemy === "r") {
            let chance = 2;
            let runOption = randomInt(chance);
            //console.log(runOption);
            if (runOption === 0) {
                console.log("You escaped!");
                fight = false;
                run = false;
            } else {
                console.log("You got caught from behind!  ");
                let revengeAttack = getRandomAttack(30, 40);
                console.log(
                    `${newEnemy.name} did ${revengeAttack} damage to ${player.name}.`
                );
                playerHitpoints = playerHitpoints - revengeAttack;
            }
        }

        if (fightEnemy === "q") {
            process.exit(0);
        }

        if (fightEnemy === "p") {
            status();
        }
    }
}

startGame();
let playerHitpoints = player.hitPoints;
////////////////////////////////Game Logic////////////////////////////////
while (isAlive) {
    const choice = readlineSync.question(
        "Press w to walk or p for player details\n "
    );
    ////////////////////////////////MoveLogic////////////////////////////////
    if (choice === "w") {
        moves = moves + 1;
        if (moves === 50) {
            console.log(
                `You have traveled through the kindom without much resistance.  You have won the game ${name}!`
            );
            console.log("Here are your final stats");
            status();
            process.exit(0);
        }
        let walk = randomInt(3); //1 in 3 chance
        if (walk === 0) {
            battle();
        }
    } else if (choice === "p") {
        status();
    } else if (choice === "q") {
        process.exit(0);
    } else {
        console.log("Please enter a valid choice");
    }

    ////////////////////////////////PlayerStatus////////////////////////////////
    function status() {
        console.log(
            `\nName: ${name} HP: ${playerHitpoints} Moves: ${moves} Enemies Killed: ${enemiesDefeated}`
        );
        console.log(`Inventory: ${player.playerItems}\n`);
    }
}