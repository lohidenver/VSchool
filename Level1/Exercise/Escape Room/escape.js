const readlineSync = require("readline-sync");


console.log("You are trapped in a room.  There is a door to the north, a desk to the east, a bookcase to the south, and a painting to the west.\nBelow you there is a rug and above you there is a light. ");



let hasKey = false;
let hasEscaped = false;

while (hasEscaped === false) {
    let choice = ['door', 'desk', 'bookcase', 'painting', 'rug', 'light'];
    let searchChoice = readlineSync.keyInSelect(choice, 'What would you like to explore first?');
    

if (searchChoice === 0 && hasKey === false) { 
    console.log('The door is locked.  You must find a key.');

} else if (searchChoice === 0 && hasKey === true) {
    console.log('The door is locked.  You open the door and use the key to escape.');
    hasEscaped = true;
}
else if (searchChoice === 1 && hasKey === false) {
    console.log('The desk has a drawer.  You open the drawer and find nothing.');
} else if (searchChoice === 2 && hasKey === false) {
    console.log('The bookcase has a book named secrets.  You read the book and it mentions a painting of Maroon Bells.');
}else if (searchChoice === 3 && hasKey === false) {
        console.log('The painting is of Maroon Bells.  You remove the painting and find a key taped to the back');
        hasKey = true;
    } 
else if (searchChoice === 4 && hasKey === false) {
    console.log('Under the rug there is a hole.  You stick your hand in the hole.  The hole was a trap!\nYou are now stuck and will die of starvation');
    process.exit(0);
} else if (searchChoice === 5 && hasKey === false) {
    console.log('The light is turned on but there isn\'t much to do.')
}
 
   
}


