
console.log("running...")
console.log("")
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet = alphabet.toUpperCase().split('');

console.log("people: " + people);
console.log("Length: "+ people.length);
console.log("people is an array: " + Array.isArray(people));
console.log("")

console.log("alphabet: " + alphabet);
console.log("Length: " + alphabet.length)
console.log("alphabet is an array: " + Array.isArray(alphabet));
console.log("")

let outputArray = [];

function forception(people, alphabet) {
    for (let i =0; i < people.length; i++) {
        outputArray.push(people[i])
    
    for (let j =0;j < alphabet.length;j++) {
        outputArray.push(alphabet[j]);
        
    }
    }
return outputArray
}
console.log(forception(people,alphabet))




console.log("")
console.log("Output: " + outputArray);

console.log("...finished")