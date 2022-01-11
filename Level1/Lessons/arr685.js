// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp

var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// push - adds item(s) to the end of the array
    arrOfFoods.push("cereal")
    console.log(arrOfFoods)
// pop - removes item from the end of the array
    arrOfFoods.pop();
    console.log(arrOfFoods)
// unshift - adds item(s) to the beginning of the array
    arrOfFoods.unshift("cereal")
    console.log(arrOfFoods)
// shift - removes item from the beginning of the array
    arrOfFoods.shift();
    console.log(arrOfFoods)
// concat
    var colors1 = ["blue", "green"];
    var colors2 = ["red", "yellow"];
    var colorsNew = colors1.concat(colors2);
    console.log(colorsNew)
// indexOf
    console.log(arrOfFoods.indexOf("pizza"));

// slice
var newArr = arrOfFoods.slice(1,3)
console.log(arrOfFoods.slice(1,3))
// join
var name = "steve";
var splitName = name.split("");
console.log(splitName)
var nameJoin = splitName.join("");
var nameJoin2 = splitName.join("-");
var nameJoin3 = splitName.join(" ");
console.log(nameJoin,nameJoin2,nameJoin3)

// reverse
var name = "Rick"
var splitName = name.split("");
var nameR = splitName.reverse("");
var allAtOnce = name.split("").reverse().join("");
console.log("All = " + allAtOnce);

// splice

var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

var result = arrOfFoods.splice(2, 2, "bacon", "orange juice");
console.log(arrOfFoods + "\n" + result);
