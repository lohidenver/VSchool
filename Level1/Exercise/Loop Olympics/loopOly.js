for (var i = 1; i <= 9; i++) {
  console.log("loop: " + [i]);
}

console.log(" ");
for (var i = 9; i >= 0; i--) {
  console.log("loop: " + [i]);
}
console.log(" ");

const fruit = ["banana", "orange", "apple", "kiwi"];

for (var i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
console.log(" ");

var numberArr = [];
for (let i = 0; i <= 9; i++) {
  numberArr.push([i]);
  console.log("loop:" + [i]);
}
console.log(numberArr);
console.log(" ");

for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log([i]);
  }
}
console.log(" ");

const fruit1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var fruitArr = [];

for (var i = 0; i < fruit1.length; i++) {
  if (i % 2 === 0) {
    fruitArr.push(fruit1[i]);
  }
}

console.log(fruitArr);
console.log(" ");

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

for (var i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}

console.log(" ");

var nameArr = [];
var occArr = [];

for (var i = 0; i < peopleArray.length; i++) {
  var name = peopleArray[i].name;
  var occ = peopleArray[i].occupation;
  nameArr.push(name);
  occArr.push(occ);
}

console.log(nameArr);
console.log(occArr);
console.log(" ");

nameArr = [];
occArr = [];

for (var i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    nameArr.push(peopleArray[i].name);
  } else {
    occArr.push(peopleArray[i].occupation);
  }
}

console.log(nameArr);
console.log(occArr);
console.log(" ");

console.log("0grid")
var newArr = new Array(3);
for (var i = 0; i < newArr.length; i++) {
    newArr[i] = new Array(3)
}

for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < newArr.length; j++){
        newArr[i][j] = 0;
    }
}
console.log(newArr)
console.log(" ")

console.log("0,0,0 1,1,1 2,2,2 grid")
var arrGrid = new Array(3);

for (var i = 0; i < arrGrid.length; i++) { 
    arrGrid[i] = new Array(3)        
    for (var j = 0; j < 3; j++)  {
        arrGrid[i][j] = i;
   }
}
console.log(arrGrid);
console.log(" ");

console.log("0,1,2grid");
var gridThree= new Array(3);

for (var i = 0; i < gridThree.length; i++) {
    gridThree[i] = new Array(3);
    for (var j = 0; j < 3; j++) {
        gridThree[i][j] = j
    }
};
console.log(gridThree);
console.log(" ");
// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++)  {
//         arrGrid[i][j] = j;
//     }  
// }


// console.log(arrGrid);
// console.log(" ");

console.log("xGrid")
var xAxis = 3;
var yAxis = 3;
var xGrid = Array(yAxis).fill(Array(xAxis).fill("x"));
console.log(xGrid);
