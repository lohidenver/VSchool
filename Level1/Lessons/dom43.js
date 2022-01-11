// innerHTML - security risk;
// innerText - resource heavy;
// textContent - the right choice;

var person = {name: "Joe"};
person.name = "Jim";
console.log(person);

var result = document.getElementById("header").textContent;
console.log(result);

var headerText = document.querySelector("#header").textContent;
document.querySelector("#placeholder").textContent = headerText;