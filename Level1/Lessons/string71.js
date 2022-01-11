// JS String Methods

// Methods are Functions 
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp

var name = "luke"

// toUpperCase & toLowerCase

var nameU = name.toUpperCase();
console.log(nameU);
var nameL = nameU.toLowerCase();
console.log(name);
// concat
    var s = name.concat("s");
    console.log(s);
// split
    var animal= "tiger";
    var characterArray = animal.split("");
    console.log(characterArray);
// slice
    var phoneNumber = "6764567890" // 676-456-7890
    var phoneF3 = phoneNumber.slice(0,3);
    console.log(phoneF3);
    var phoneM3 = phoneNumber.slice(3,6);
    console.log(phoneM3);
    var phoneL4 = phoneNumber.slice(6,);
    console.log(phoneL4);
    var phoneNumberNew = phoneF3 + "-" + phoneM3 + "-" + phoneL4;
console.log(phoneNumberNew)
// indexOf
    var city = "New York City";
    var indexC = city.indexOf("C");
    console.log(indexC);
    console.log(city.indexOf("C"))