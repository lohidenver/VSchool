function character() {
  const characterArray = [
    "Mrs. White",
    "Mr. Green",
    "Mrs. Peacock",
    "Professor Plum",
    "Miss Scarlet",
    "Colonel Mustard",
  ];
  const randomCharacter = Math.floor(Math.random() * characterArray.length);

  const characterGame = characterArray[randomCharacter];

  if (randomCharacter === 0) {
    document.body.style.backgroundColor = "white";
  } else if (randomCharacter === 1) {
    document.body.style.backgroundColor = "green";
  } else if (randomCharacter === 2) {
    document.body.style.backgroundColor = "midnightblue";
  } else if (randomCharacter === 3) {
    document.body.style.backgroundColor = "indigo";
  } else if (randomCharacter === 4) {
    document.body.style.backgroundColor = "darkred";
  } else {
    document.body.style.backgroundColor = "goldenrod";
  }

  return characterGame;
}

function weapon() {
  const weaponArray = [
    "candelstick",
    "dagger",
    "lead pipe",
    "revolver",
    "rope",
    "wrench",
  ];
  const randomWeapon = Math.floor(Math.random() * weaponArray.length);

  return weaponArray[randomWeapon];
}

function room() {
  const roomArray = [
    "kitchen",
    "ballroom",
    "conservatory",
    "dining room",
    "cellar",
    "billard room",
    "library",
    "study",
    "hall",
    "lounge",
  ];
  const randomRoom = Math.floor(Math.random() * roomArray.length);

  // window.alert(roomArray[randomRoom]);
  return roomArray[randomRoom];
}

function solution() {
  document.getElementById("solution").innerHTML =
    character() + " with the " + weapon() + " in the " + room();
}

function clueCharacter() {
  const characterArray = [
    "Miss Peach",
    "Monsier Brunette",
    "Madame Rose",
    "Sergeant Grey",
    "Captain Brown",
    "Mr. Slate-Grey",
    "The Thief",
    "Lady Lavender",
    "Mr. Meadow-Brook",
    "Mrs. Meadow-Brook",
    "Prince Azure",
    "Rusty Nayler",
    "Lord Gray",
    "Madame Rubie",
    "General Umber",
    "Mrs. Azul",
    "Mr. Pine",
    "Sir Ube",
    "Dr. Rose",
    "Dr. Orchid",
  ];

  for (i = 0; i < characterArray.length; i++) {
    console.log(characterArray[i]);
  

    alert(characterArray[i]);

    function characters() {
      document.getElementById("characters").innerHTML = characterArray[i];
    }
  }
}
var person = {
    name : "Charles barkley",
    age: 60,
    opponents: ['sixers', 'lakers']
} 
console.log(person.opponents[0])



// document.getelemtbyid('characters').addEventListener( "click" , myFunction )