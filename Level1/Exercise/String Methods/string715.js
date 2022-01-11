console.log("string715.js is running" + "\n" + " ");


//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
var testString = prompt("enter something");
console.log("")
capitalizeAndLowerCase(testString);

function capitalizeAndLowerCase (uI) {
    // console.log("in capitalizeAndLowerCase");
    // console.log(testString);
    // console.log("")
    var testCap = uI.toUpperCase();
    var testLow = uI.toLowerCase();
    capLow = testCap.concat(testLow);
    return capLow;

}


console.log("=> " + capLow);

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

findMiddleIndex(testString);

function findMiddleIndex () {
    // console.log(testString.length/2)
    middle = Math.floor(testString.length/2);
    return middle;
}

console.log("=>" + middle)
//Write a function that uses `[slice()] and the other functions you've written to return the first half of the given string.

returnFirstHalf(testString);

function returnFirstHalf (x) {
    let middle = findMiddleIndex(x);
    let firstHalf = x.slice(0,middle);
  let lastHalf = x.slice(middle, x.length)
    console.log("First => " + firstHalf)
    console.log("Last => " + lastHalf)
}


//Write a function that takes a string as a parameter and capitalizes any character that follows a space.
capitalAfterSpace(testString);

function capitalAfterSpace () {
    word = testString.toLowerCase().split(' ');
    for (let i = 0; i < word.length; i++) {
        word[i]=word[i].charAt(0).toUpperCase()+word[i].substring(1);
    }
    console.log(word)
    return word.join(' ').toString();
    
}

console.log(word);


console.log("");
console.log("string715.js is finished" + "\n" + " ");