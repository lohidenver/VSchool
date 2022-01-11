//Web Storage

//Local Storage


//Session Storage







//Setter Methods

localStorage.setItem("name", "Steve");
localStorage.setItem("age", 10);
localStorage.setItem("isAlive", true);
localStorage.setItem("friends", JSON.stringify(["Ross", "Rachael", "Monica", "Chandler"])); //array
localStorage.setItem("address", JSON.stringify({ street: "123 Main St", city: "Anywhere", country: "USA" })); //object

//Getter Methods

const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
const isAlive = localStorage.getItem("isAlive");
const friendsWrong = localStorage.getItem("friends");
const friendsRight = JSON.parse(localStorage.getItem("friends"));
const addressWrong = localStorage.getItem("address");
const addressRight = JSON.parse(localStorage.getItem("address"))

console.log(name, age, isAlive, friendsWrong, friendsRight, addressWrong, addressRight)
console.log(typeof friendsWrong, typeof friendsRight)

//Remove
localStorage.removeItem("age");

//alt method <not recommended>
localStorage.dinosaur = "T-Rex"; //<--- creates a key value pair with dinosaur as the key and T-Rex as the value
console.log(localStorage.dinosaur)