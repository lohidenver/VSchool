

//#1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp",
 "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;
for (var i = 0; i < officeItems.length; i++) {
   
    if (officeItems[i] === "computer") {
        count++
    }
    
}
console.log("There are " + count + " computer instances")

//#2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for (var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    var userAge;
    var userGender;

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        userGender = "him";
    } else {
        userGender = "her";
    }

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        userAge = " is old enough. You can let " + userGender + " in."
    } else {
        userAge = " is too young. Do not let " + userGender + " in."
    }


  

    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + userAge)
  
}

