var powerRangers = [
  "Jason Lee Scott",
  "Kimberly Hart",
  "Zack Taylor",
  "Trini Kwan",
  "Billy Cranston",
  "Tommy Oliver"
];

var rangersList = document.getElementById("rangers");

for (var i = 0; i < powerRangers.length; i++) {
  var newName = document.createElement("li");
  newName.textContent = powerRangers[i];
  rangersList.append(newName);
}
////////////////////////////////////////////////////////////////

for (var i = 0; i < powerRangers.length; i++) {
    rangers.innerHTML += "<li style = 'color: purple'>" + powerRangers[i ] + "</li>";
}
////////////////////////////////////////////////////////////////
var powerRangers2 = [
    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]

for (var i = 0; i < powerRangers2.length; i++) {

    rangers.innerHTML += "<li>" + powerRangers2[i].name + " - " + powerRangers2[i].color + "</li>";
    document.getElementsByTagName("li")[i].style.color = powerRangers2[i].color;
}


